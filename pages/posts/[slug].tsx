import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import {
  getAllPostsWithSlug,
  getPostAndMorePosts,
} from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import { GetStaticProps, GetStaticPaths } from 'next';
import ErrorPage from 'next/error';
import Image from 'next/image';
import Link from 'next/link';
import BlogItems from '../../components/blogItems';
import { PostData, PostView } from '../../lib/posts';
import { FC } from 'react';

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
  console.log(morePosts);
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
          <article>
            <div className="w-full h-100 ">
              <Image
                className="object-cover object-center rounded-lg"
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
                src={post.author.picture.url}
                alt="profile"
                width="55rem"
                height="55rem"
              />
              <div className="flex flex-col">
                <p className="text-gray-500 dark:text-gray-300">
                  {post.author.name}
                </p>
                <Date
                  className="text-gray-400"
                  dateString={post.date}
                />
              </div>
            </div>
            <div
              className="mt-8 text-xl"
              dangerouslySetInnerHTML={{ __html: post.content.html }}
            />
          </article>
          <h1 className="mt-8 text-xl font-bold tracking-wide text-indigo-700 dark:text-indigo-600 font-serif">
            More posts
          </h1>
          <BlogItems allPostsData={morePosts} />
          <div
            className="text-indigo-700 dark:text-indigo-600 text-lg hover:text-indigo-900
           dark:hover:text-indigo-400 mt-8 transition  duration-500 ease-in-out mb-8 "
          >
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        </>
      )}
    </Layout>
  );
};

export default Post;
