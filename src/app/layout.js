import { Fira_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

const popins = Fira_Sans({ subsets: ['latin'], weight: ['500'] });

export const metadata = {
  title: 'NoteBook',
  description: 'A Daily NoteBook',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${popins.className} bg-slate-900 text-slate-200`}>
        <Header />
        <main className='w-full min-h-[calc(100vh_-_115px)] py-10 px-28'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
