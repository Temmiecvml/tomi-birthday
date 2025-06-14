import React, { useState } from 'react';
import './RSVPForm.css';

interface RSVPFormProps {
  onSubmit: (name: string, attending: boolean, message: string) => void;
}

const RSVPForm: React.FC<RSVPFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [attending, setAttending] = useState(true);
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() === '') return;
    onSubmit(name, attending, message);
    setName('');
    setAttending(true);
    setMessage('');
  };

  return (
    <form className="rsvp-form" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Will you attend?
        <select
          value={attending ? 'yes' : 'no'}
          onChange={e => setAttending(e.target.value === 'yes')}
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </label>
      <label>
        Message (optional, say something sweet to Tomi!):
        <input
          type="text"
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder="Write a lovely note for Tomi..."
        />
      </label>
      <button type="submit">RSVP</button>
    </form>
  );
};

export default RSVPForm;
