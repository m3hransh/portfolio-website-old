import Layout from '../components/Layout';
import BlogItems from '../components/BlogItems';
import { GetStaticProps } from 'next';
import { getAllPostsForHome } from '../lib/posts';
import Head from 'next/head';

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
function Blog({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>Blog</title>
      </Head>
      <main className="max-w-4xl w-10/12 mx-auto mb-5">
        <section className="lg:px-12">
          <h2 className="text-4xl font-bold tracking-wider text-secondary-600 dark:text-secondary-500 mt-4 font-serif">
            Blog Posts
          </h2>
          <BlogItems allPostsData={allPostsData} />
        </section>
      </main>
    </Layout>
  );
}

export default Blog;
