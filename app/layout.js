import './globals.css';

export const metadata = {
  title: 'AYUSH R. — Creative Developer & AI Engineer',
  description: 'AI student, developer and curious builder exploring the intersection of intelligence, technology and creativity.',
  keywords: ['Ayush R', 'AI Developer', 'Three.js', 'Creative Developer', 'Machine Learning', 'Next.js', 'Kerala'],
  authors: [{ name: 'Ayush R.' }],
  openGraph: {
    title: 'AYUSH R. — Interactive 3D Developer Identity',
    description: 'Ideas into reality. Exploring the intersection of artificial intelligence, technology and creativity.',
    url: 'https://frettedmelodist2007.vercel.app/',
    siteName: 'AYUSH R.',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-bg text-tx-primary bg-grain antialiased selection:bg-gold selection:text-bg">
        {children}
      </body>
    </html>
  );
}

