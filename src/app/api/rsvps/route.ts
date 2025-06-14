import { NextResponse } from 'next/server';

// Dummy RSVP data for demonstration
const rsvps = [
  { name: 'Alice', attending: true, message: 'Happy 30th Tomi! 🎉' },
  { name: 'Bob', attending: false, message: 'Wish I could be there, have a wonderful birthday!' },
  { name: 'Charlie', attending: true, message: 'Can’t wait to celebrate with you!' },
];

export async function GET() {
  return NextResponse.json(rsvps);
}
