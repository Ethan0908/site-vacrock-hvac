import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = { title: 'VacRock HVAC', description: 'hvac • manhattan • 5 rating • 5 Google reviews • 36 W 15th St, New York, NY 10011, USA' };

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
