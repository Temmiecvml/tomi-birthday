import { useState, useEffect } from 'react';
import SaveTheDate from '../components/SaveTheDate';
import RSVPForm from '../components/RSVPForm';
import AdminNotes from '../components/AdminNotes';
import '../components/SaveTheDate.css';
import '../components/RSVPForm.css';
import '../components/AdminNotes.css';

export default function Home() {
  const [rsvps, setRsvps] = useState<{ name: string; attending: boolean; message: string }[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [revoked, setRevoked] = useState<string[]>([]);
  const [adminView, setAdminView] = useState(false);

  useEffect(() => {
    fetch('/api/rsvps')
      .then(res => res.json())
      .then(setRsvps);
    fetch('/api/rsvps?revoked=1')
      .then(res => res.json())
      .then(data => setRevoked(data.map((r: any) => r.name)));
  }, []);

  const handleRSVP = (name: string, attending: boolean, message: string) => {
    fetch('/api/rsvps', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, attending, message })
    })
      .then(async res => {
        if (!res.ok) throw new Error((await res.json()).error || 'Error');
        return res.json();
      })
      .then(() => {
        setRsvps(prev => [...prev, { name, attending, message }]);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
      })
      .catch(e => alert(e.message));
  };

  const revokeInvite = (name: string) => {
    fetch('/api/rsvps/revoke', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name })
    })
      .then(() => setRevoked(prev => [...prev, name]));
  };

  const unrevokeInvite = (name: string) => {
    fetch('/api/rsvps/unrevoke', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name })
    })
      .then(() => setRevoked(prev => prev.filter(n => n !== name)));
  };

  return (
    <div className="app-container">
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem' }}>
        <button onClick={() => setAdminView(v => !v)} style={{ background: adminView ? '#a020f0' : '#1a1a1a', color: '#fff', fontWeight: 600 }}>
          {adminView ? 'Back to Event' : 'Admin: View Notes'}
        </button>
      </div>
      {adminView ? (
        <AdminNotes />
      ) : (
        <>
          <SaveTheDate />
          <RSVPForm onSubmit={handleRSVP} />
          {submitted && <div className="thank-you">Thank you for your RSVP!</div>}
          {rsvps.length > 0 && (
            <div className="rsvp-list">
              <h3>Friends who have RSVP'd:</h3>
              <ul>
                {rsvps.map((r, i) => (
                  <li key={i} style={{ opacity: revoked.includes(r.name) ? 0.5 : 1 }}>
                    <strong>{r.name}</strong> - {r.attending ? 'Attending' : 'Not Attending'}
                    {r.message && <span>: "{r.message}"</span>}
                    {revoked.includes(r.name) ? (
                      <button style={{ marginLeft: 8 }} onClick={() => unrevokeInvite(r.name)}>Unrevoke</button>
                    ) : (
                      <button style={{ marginLeft: 8 }} onClick={() => revokeInvite(r.name)}>Revoke</button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
}
