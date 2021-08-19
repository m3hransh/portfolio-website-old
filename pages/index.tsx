import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import { getAllPostsForHome } from '../lib/posts';
import { GetStaticProps } from 'next';
import Hero from '../components/Hero';
import BlogItems from '../components/BlogItems';

export const getStaticProps: GetStaticProps = async ({
  preview = false,
}) => {
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
        <header className="">
          <Hero className="max-w-3xl mx-auto dark:text-white" />
        </header>
        <main className="max-w-3xl mx-auto">
          <section className="px-12 py-8">
            <h2 className="text-4xl font-bold tracking-wider text-indigo-500 mt-4 font-serif">
              Blog
            </h2>
            <BlogItems allPostsData={allPostsData} className="mt-6" />
          </section>
        </main>
      </Layout>
    </>
  );
}

export default Home;
