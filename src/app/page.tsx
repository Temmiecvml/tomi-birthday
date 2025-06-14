'use client';

import '@/components/SaveTheDate.css';

export default function Home() {
  return (
    <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #f8e1ff 0%, #e0c3fc 100%)' }}>
      <div style={{
        background: 'rgba(255,255,255,0.95)',
        borderRadius: 24,
        boxShadow: '0 8px 32px rgba(160,32,240,0.12)',
        padding: '2.5rem 2rem',
        maxWidth: 420,
        width: '100%',
        textAlign: 'center',
        margin: '2rem 0',
      }}>
        <h1 style={{ fontFamily: 'cursive', color: '#a020f0', fontSize: '2.5rem', marginBottom: 8 }}>
          Tomi’s 30th Birthday
        </h1>
        <h2 style={{ color: '#6c3483', fontWeight: 500, fontSize: '1.3rem', marginBottom: 24 }}>
          Save the Date!
        </h2>
        <div style={{ fontSize: '1.1rem', color: '#333', marginBottom: 18 }}>
          <span role="img" aria-label="calendar">📅</span> <b>Date:</b> Saturday, July 19, 2025<br/>
          <span role="img" aria-label="clock">⏰</span> <b>Time:</b> 6:00 PM<br/>
          <span role="img" aria-label="location">📍</span> <b>Venue:</b> Tomi’s Place, Lagos
        </div>
        <div style={{ fontSize: '1.05rem', color: '#6c3483', marginBottom: 24 }}>
          Join us for an unforgettable evening of laughter, music, and memories as we celebrate Tomi’s milestone birthday!<br/>
          <span style={{ fontSize: '1.5rem' }}>🎉🥳💜</span>
        </div>
        <div style={{ fontSize: '1rem', color: '#555', marginBottom: 24 }}>
          Kindly RSVP by July 10th.<br/>
          Formal invitation and details to follow.
        </div>
        <a href="/rsvp-form" style={{
          display: 'inline-block',
          background: '#a020f0',
          color: '#fff',
          padding: '0.75rem 2.2rem',
          borderRadius: 8,
          fontWeight: 600,
          fontSize: '1.1rem',
          textDecoration: 'none',
          boxShadow: '0 2px 8px rgba(160,32,240,0.10)',
          transition: 'background 0.2s',
        }}>RSVP Now</a>
      </div>
      <footer style={{ marginTop: 32, color: '#a020f0', fontSize: '0.95rem', opacity: 0.7 }}>
        Made with 💜 for Tomi’s friends & family
      </footer>
    </div>
  );
}
