import { fetchAPI } from './utils';
export interface Author {
  name: string;
  picture: { url: string };
}

export interface PostView {
  title: string;
  id: number;
  slug: string;
  data: string;
  coverImage: { url: string };
  author: Author;
  excerpt: string;
  date: string;
  readTime: number;
}

export interface PostData extends PostView {
  content: string;
}
export interface PostMorePosts {
  post: PostData;
  morePosts: PostView[];
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
    query PostBySlug($slug: String!, $publicationState: PublicationState!) {
      post: postBySlug( slug: $slug, publicationState: $publicationState ) {
        title
        slug
        content
        date
        readTime
        coverImage {
          url
        }
        excerpt
        author {
          name
          picture{
            url
          }
        }
      }
      morePosts: posts(sort: "date:desc", limit: 2, where: {slug_ncontains: [$slug]}) {
        title
        slug
        excerpt
        date
        readTime
        coverImage {
          url
        }
        author {
          name
          picture {
            url
          }
        }
      }
}
  `,
    {
      preview,
      variables: {
        publicationState: preview ? 'PREVIEW' : 'LIVE',
        slug,
      },
    },
  );
  return data;
}

export async function getAllPostsForHome(
  preview: boolean,
): Promise<PostView[]> {
  const data = await fetchAPI(
    `
    query Posts($publicationState: PublicationState!){
     posts(sort: "date:desc", limit: 20, publicationState:$publicationState) {
        title
        slug
        excerpt
        date
        readTime
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
    {
      preview,
      variables: {
        publicationState: preview ? 'PREVIEW' : 'LIVE',
      },
    },
  );
  return data.posts;
}
