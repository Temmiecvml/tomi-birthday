"use client";
import React from 'react';
import './SaveTheDate.css';

const SaveTheDate: React.FC = () => (
  <div className="save-the-date">
    <h1>🎉 Tomi's 30th Birthday! 🎉</h1>
    <h2>Save the Date</h2>
    <p>
      <strong>Date:</strong> August 16, 2025<br />
      <strong>Time:</strong> 6:00 PM<br />
      <strong>Location:</strong> Santorini, Greece (A beautiful venue by the sea)
    </p>
    <p className="invite">You are invited to celebrate this special milestone with Tomi!<br />Please RSVP below.</p>
  </div>
);

export default SaveTheDate;
