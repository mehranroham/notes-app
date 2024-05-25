import { Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';

const popins = Poppins({ subsets: ['latin'], weight: ['500'] });

export const metadata = {
  title: 'NoteBook',
  description: 'A Daily NoteBook',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={popins.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
