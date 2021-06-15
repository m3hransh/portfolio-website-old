import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getAllPostsForHome } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPostsData = await getAllPostsForHome(preview);
  // By returning { props: { posts } }, the Blog component
  // will receive 'posts' as a prop at build time
  return {
    props: { allPostsData },
  };
};
function Intro({className}:any={}) {
  return (
    <div className={className}>
      <h1 className="mt-6 text-2xl sm:mt-8 sm:text-4xl">
        Hello, I am <br />
        <span className="text-indigo-500">Mehran Shahidi</span> welcome to my
        Website
      </h1>
      <div className="mt-4 sm:mt-6">
        <a className="btn" href="#">
          Contact Me
        </a>
      </div>
    </div>
  );
}
function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="grid lg:grid-cols-2">
        <div className="px-12 py-4  flex flex-col items-center  lg:max-w-xl">
          <img src="/images/profile.svg" className="px-8 py-2 h-72 lg:h-auto " alt={`Profile`} />
          <Intro className="lg:hidden"/>
        </div>
        <div className="hidden relative lg:block">
          <Intro/>
          </div>
      </div>

      <section className="max-w-2xl px-12 py-8">
        <h2 className="text-4xl text-indigo-500 mt-4">Blog</h2>
        <ul className="mt-4">
          {allPostsData.map(({ slug, date, title }) => (
            <li className={utilStyles.listItme} key={slug}>
              <Link href={`/posts/${slug}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export default Home;
