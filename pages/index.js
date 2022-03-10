import Head from "next/head";
import { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import Image from "next/image";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <div>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className='flex flex-wrap md:flex-wrap'>
        {allPostsData.map(({ id, date, blogImage, title }) => (
          <div key={id} className='p-6 '>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <Image src={blogImage} height={250} width={335} />  
            <br />
              <Date dateString={date} />

          </div>
        ))}
      </div>
    </div>
  );
}
