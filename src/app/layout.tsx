import '../components/App.css';
import '../components/RSVPForm.css';
import '../components/AdminNotes.css';
import '../components/SaveTheDate.css';

export const metadata = {
  title: "Tomi's 30th Birthday RSVP",
  description: "RSVP and leave a note for Tomi's 30th birthday!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="main-container">{children}</div>
      </body>
    </html>
  );
}
