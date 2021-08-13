import { ImageLoader } from 'next/image';
export interface Author {
  name: string;
  picture: { url: string };
}

export interface PostView {
  title: string;
  slug: string;
  data: string;
  coverImage: { url: string };
  author: Author;
  excerpt: string;
  date: string;
}

export interface PostData extends PostView {
  content: { html: string };
}
export interface PostMorePosts {
  post: PostData;
  morePosts: PostView[];
}

async function fetchAPI(
  query: string,
  { variables, preview }: { variables?: any; preview?: boolean } = {},
) {
  const res = await fetch(process.env.GRAPHCMS_PROJECT_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${
        preview
          ? process.env.GRAPHCMS_DEV_AUTH_TOKEN
          : process.env.GRAPHCMS_PROD_AUTH_TOKEN
      }`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });
  const json = await res.json();

  if (json.errors) {
    console.log(process.env.NEXT_EXAMPLE_CMS_GCMS_PROJECT_ID);
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

export async function getAllPostsWithSlug(): Promise<
  { slug: string }[]
> {
  const data = await fetchAPI(`
    {
      posts {
        slug
      }
    } 
  `);
  return data.posts;
}

export async function getPostAndMorePosts(
  slug: string,
  preview: boolean,
): Promise<PostMorePosts> {
  const data = await fetchAPI(
    `
    query PostBySlug($slug: String!, $stage: Stage!) {
      post(stage: $stage, where: {slug: $slug}) {
        title
        slug
        content {
          html
        }
        date
        ogImage: coverImage {
          url(transformation: {image: {resize: {fit: crop, width: 2000, height: 1000}}})
        }
        coverImage {
          url(transformation: {image: {resize: {fit: crop, width: 2000, height: 1000}}})
        }
        excerpt
        author {
          name
          picture {
            url(transformation: {image: {resize: {fit: crop, width: 100, height: 100}}})
          }
        }
      }
      morePosts: posts(orderBy: date_DESC, first: 2, where: {slug_not_in: [$slug]}) {
        title
        slug
        excerpt
        date
        coverImage {
          url(transformation: {image: {resize: {fit: crop, width: 2000, height: 1000}}})
        }
        author {
          name
          picture {
            url(transformation: {image: {resize: {fit: crop, width: 100, height: 100}}})
          }
        }
      }
    }
  `,
    {
      preview,
      variables: {
        stage: preview ? 'DRAFT' : 'PUBLISHED',
        slug,
      },
    },
  );
  return data;
}
export const imageLoader: ImageLoader = (props) => {
  return (process.env.NEXT_PUBLIC_IMAGE_PATH as string) + props.src;
};
export async function getAllPostsForHome(
  preview: boolean,
): Promise<PostView[]> {
  const data = await fetchAPI(
    `
    {
     posts(sort: "date:desc", limit: 20) {
        title
        slug
        excerpt
        date
        coverImage{
          url
        }
        author{
          name
          picture{
            url
          }
        }
        }
    }
  `,
    { preview },
  );
  return data.posts;
}
