import Link from "next/link";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div className='text-center bg-slate-800 p-8 my-6 rounded-md'>
        <Link href='/'>
          <h1 className='text-3xl font-bold text-white'>kenan.fyi</h1>
        </Link>
        <p className='text-slate-300'>droppings from my second brain</p>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className=' mt-6 py-6 text-center text-slate-400'>
        <h3> Under Construction for a while.</h3>
        <p>
          Reach me out
          <Link href='https://twitter.com/kenanFyi'> @kenanFyi</Link>
        </p>
      </div>
    </footer>
  );

  return (
    <html>
      <head />
      <body>
        <div className='mx-auto max-w-2xl px-6'>
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
