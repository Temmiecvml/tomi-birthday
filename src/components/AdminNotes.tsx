import React, { useEffect, useState } from 'react';
import './AdminNotes.css';

interface RSVP {
  name: string;
  attending: boolean;
  message: string;
}

const AdminNotes: React.FC = () => {
  const [rsvps, setRsvps] = useState<RSVP[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/rsvps')
      .then(res => res.json())
      .then(data => {
        setRsvps(data.filter((r: RSVP) => r.message && r.message.trim() !== ''));
        setLoading(false);
      });
  }, []);

  return (
    <div className="admin-notes-container">
      <h2>Sweet Notes from Friends 💌</h2>
      {loading ? (
        <div className="loading">Loading notes...</div>
      ) : rsvps.length === 0 ? (
        <div className="no-notes">No notes yet. Encourage your friends to leave you a sweet message!</div>
      ) : (
        <ul className="notes-list">
          {rsvps.map((r, i) => (
            <li key={i} className="note-item">
              <div className="note-message">“{r.message}”</div>
              <div className="note-author">— {r.name}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminNotes;
