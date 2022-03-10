import Head from "next/head";
import Link from "next/link";
import logo from "../public/images/ar-logos_black.png";
import Image from "next/image";

const name = "A purposeless blog of various topics.";
// export const mylogo = "../public/images/ar-logos_black.png";

export default function Layout({ children }) {
  return (
    <div className="">
      <Head>
        <link rel="shortcut icon" href="../public/images/logo.ico"></link>
      </Head>
      <nav className="flex items-center justify-start flex-wrap bg-slate-100 p-6">
        <header className="">
          <div className="flex items-center">
            <Link className="hover:border-teal-500" href="/">
              <a>
                <Image src={logo} alt="logo" height={40} width={40} />
              </a>
            </Link>
            <h3 className="text-right">{name}</h3>
          </div>
        </header>
      </nav>
      <main className="container flex-1">{children}</main>
      <footer className="bg-slate-100 mt-8 py-4">
        <div className="container mx-auto flex justify-left">
          &copy; 2022 Andrea Rumbaua
        </div>
      </footer>
    </div>
  );
}
