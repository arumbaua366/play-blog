import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = "A purposeless blog of various topics."
export const siteTitle = 'illamination'

export default function Layout({ children, home }) {
    return (
      <div className="flex flex-col min-h-screen">
        <header className='bg-100 mb-8 py-4'>
          {home ? (
            <>
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={144}
                width={144}
                alt={name}
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
          ) : (
            <>
              <Link href="/">
                <a>
                  <Image
                    priority
                    src="/images/profile.jpg"
                    className={utilStyles.borderCircle}
                    height={108}
                    width={108}
                    alt={name}
                  />
                </a>
              </Link>
              <h2 className={utilStyles.headingLg}>
                <Link href="/">
                  <a className={utilStyles.colorInherit}>{name}</a>
                </Link>
              </h2>
            </>
          )}
        </header>
        <main className='container mx-auto flex-1'>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Home</a>
            </Link>
          </div>
        )}
            <footer className='bg-100 mt-8 py-4'>
        <div className='container mx-auto flex justify-center'>
          &copy; 2022 Andrea Rumbaua
        </div>
      </footer>
      </div>
      
    )
  }