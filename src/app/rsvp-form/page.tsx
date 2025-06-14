"use client";

import RSVPForm from '../../components/RSVPForm';

const RSVPFormPage = () => {
  const handleRSVPSubmit = (name: string, attending: boolean, message: string) => {
    // TODO: Implement submission logic (e.g., call an API route)
    console.log('RSVP submitted:', { name, attending, message });
  };

  return <RSVPForm onSubmit={handleRSVPSubmit} />;
};

export default RSVPFormPage;
