import Link from "next/link";

const name = "A purposeless blog of various topics."
export const siteTitle = "illamination"

export default function Layout({ children }) {
    return (
      <div className='flex flex-col min-h-screen'>
        <header className=''>
          <div className='container flex-auto'>
            <Link href='/'>
              <a>←Home</a>
            </Link>
            <h3 className=''>{name}</h3>
          </div>
        </header>
        <main className='container flex-1'>{children}</main>
            <footer className='bg-100 mt-8 py-4'>
        <div className='container mx-auto flex justify-center'>
          &copy; 2022 Andrea Rumbaua
        </div>
      </footer>
      </div>
      
    )
  }