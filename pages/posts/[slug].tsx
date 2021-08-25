import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import {
  getAllPostsWithSlug,
  getPostAndMorePosts,
} from '../../lib/posts';
import { imageLoader } from '../../lib/utils';
import Head from 'next/head';
import Date from '../../components/Date';
import utilStyles from '../../styles/utils.module.css';
import { GetStaticProps, GetStaticPaths } from 'next';
import ErrorPage from 'next/error';
import Image from 'next/image';
import Link from 'next/link';
import BlogItems from '../../components/BlogItems';
import { PostData, PostView } from '../../lib/posts';
import { IoHourglassOutline, IoCalendar } from 'react-icons/io5';
import { FC } from 'react';
// import Markdown from '../../components/Markdown';
import dynamic from 'next/dynamic';
const Markdown = dynamic(() => import('../../components/Markdown'), {
  ssr: false,
});

// This function gets called at build time
export const getStaticPaths: GetStaticPaths = async (context) => {
  const posts = await getAllPostsWithSlug();

  return {
    paths: posts.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  // params contains the post 'id'
  const data = await getPostAndMorePosts(
    params.slug as string,
    preview,
  );
  // console.log(data);
  // Pass post data to the page via props
  return {
    props: {
      preview,
      post: data.post,
      morePosts: data.morePosts || [],
    },
  };
};

interface PostProps {
  post?: PostData;
  morePosts?: PostView[];
  preview?: boolean;
}
const Post: FC<PostProps> = ({ post, morePosts, preview }) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      {router.isFallback ? (
        <h1 className={utilStyles.headingXl}>Loading...</h1>
      ) : (
        <>
          <Head>
            <title>{post.title}</title>
          </Head>
          <main className="max-w-3xl w-4/5 mx-auto">
            <article>
              <div className="w-full">
                <Image
                  className="object-cover object-center d rounded-lg"
                  loader={imageLoader}
                  src={post.coverImage.url}
                  width="1000"
                  height="300rem"
                  alt="Post picture"
                />
              </div>
              <h1 className={utilStyles.headingXl}>{post.title}</h1>
              <div className="flex items-center space-x-3">
                <Image
                  className="rounded-full"
                  loader={imageLoader}
                  src={post.author.picture.url}
                  alt="profile"
                  width="55rem"
                  height="55rem"
                />
                <div className="flex flex-col">
                  <p className="text-gray-500 dark:text-gray-300">
                    {post.author.name}
                  </p>
                  <div className="flex space-x-2">
                    <small className="text-main-500 flex items-center space-x-1">
                      <IoCalendar className="inline" />{' '}
                      <Date dateString={post.date} />
                    </small>
                    <small className="text-main-500 flex items-center space-x-1">
                      <IoHourglassOutline className="inline" />
                      <p>{post.readTime} min read</p>
                    </small>
                  </div>
                </div>
              </div>
              <Markdown className="mt-5" markdown={post.content} />
            </article>
            <h1 className="mt-8 text-xl font-bold tracking-wide text-secondary-500 dark:text-secondary-400 font-serif">
              More posts
            </h1>
            <BlogItems allPostsData={morePosts} />
            <div
              className="text-secondary-500 dark:text-secondary-400 text-lg hover:text-indigo-900
           dark:hover:text-indigo-400 mt-8 transition  duration-500 ease-in-out mb-8 "
            >
              <Link href="/">
                <a>← Back to home</a>
              </Link>
            </div>
          </main>
        </>
      )}
    </Layout>
  );
};

export default Post;
