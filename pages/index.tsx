import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getAllPostsForHome } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import PostItem from "../components/postItem";

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPostsData = await getAllPostsForHome(preview);
  // By returning { props: { posts } }, the Blog component
  // will receive 'posts' as a prop at build time
  return {
    props: { allPostsData },
  };
};
function Home({ allPostsData }) {
  return (
    <>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>

        <section className="max-w-2xl px-12 py-8">
          <h2 className="text-4xl text-indigo-500 mt-4">Blog</h2>
          <ul className="mt-4">
            {allPostsData.map(({author, title, slug, coverImage, excerpt, date}) => (
              // <li className={utilStyles.listItme} key={slug}>
              //   <Link href={`/posts/${slug}`}>
              //     <a>{title}</a>
              //   </Link>
              //   <br />
              //   <small className={utilStyles.lightText}>
              //     <Date dateString={date} />
              //   </small>
              // </li>
              <Link  href={`/posts/${slug}`}>
                   <a>

              <PostItem author={author} title={title}
                slug={slug}
                coverImage={coverImage}
                excerpt={excerpt}
                date={date}/>
                   </a>
                 </Link>
            ))}
          </ul>
        </section>
      </Layout>
    </>
  );
}

export default Home;
