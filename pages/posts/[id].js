import { getAllPostIds, getPostData } from "../../lib/posts"
import Head from "next/head"
import Date from "../../components/date"
import Image from "next/image"



export default function Post({ postData }) {
    return (
      <div>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article>
          <h1 className="">{postData.title}</h1>
          <div className="">
          <Image src={postData.blogImage} />
            <Date dateString={postData.date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </div>
    )
  }

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}