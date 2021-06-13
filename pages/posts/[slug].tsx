import { useRouter } from "next/router";
import Layout from "../../components/layout";
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import { GetStaticProps, GetStaticPaths } from "next";
import ErrorPage from "next/error";

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
  const data = await getPostAndMorePosts(params.slug as string, preview);

  // Pass post data to the page via props
  return {
    props: {
      preview,
      post: data.post,
      morePosts: data.morePosts || [],
    },
  };
};

const Post = ({ post, morePost, preview }) => {
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
        <article>
          <h1 className={utilStyles.headingXl}>{post.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={post.date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: post.content.html }} />
        </article>
        </>
      )}
    </Layout>
  );
};

export default Post;
