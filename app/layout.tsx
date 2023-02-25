import Link from "next/link";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div className='text-center  p-1 my-1 rounded-md'>
        <Link href='/'>
          <h1 className='text-3xl font-bold text-slate-600'>kenan.fyi</h1>
        </Link>
        <p className='text-gray-800'>droppings from my second brain</p>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className=' mt-1 py-1  text-center text-slate-700'>
        <h3> Under Construction for a while.</h3>
        <p>
          Reach me out
          <Link href='https://twitter.com/kenanFyi' className='text-sky-800'>
            {" "}
            @kenanFyi
          </Link>
        </p>
      </div>
    </footer>
  );

  return (
    <html>
      <head />
      <body className='bg-eigen'>
        <div className='h-screen flex flex-col justify-center items-center mx-auto'>
          {header}
          {/* {children} */}
          {footer}
        </div>
      </body>
    </html>
  );
}
