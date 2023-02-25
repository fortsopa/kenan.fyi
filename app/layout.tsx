import Link from "next/link";
import "../styles/globals.css";
import { Noto_Serif } from "@next/font/google";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div className='text-center p-1 my-1  rounded-md'>
        <Link href='/'>
          <h1 className='text-5xl font-bold text-slate-600'>kenan</h1>
          <h3 className='text-3xl text-right font-bold text-slate-600'>.fyi</h3>
        </Link>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className=' mt-1 py-1  text-center text-slate-700'>
        <p className='animate-typing overflow-hidden whitespace-nowrap text-gray-700 italic pb-10 text-1xl'>
          droppings from my second brain...
        </p>
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
    <html className={notoSerif.className}>
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
