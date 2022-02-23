import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

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
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0'>
        {allPostsData.map(({ id, date, blog_image, title }) => (
          <div key={id} className='border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col'>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <img src={blog_image}></img>
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </div>
        ))}
      </div>
    </Layout>
  );
}
