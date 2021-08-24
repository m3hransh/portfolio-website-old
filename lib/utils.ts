import { ImageLoader } from 'next/image';

export const imageLoader: ImageLoader = (props) => {
  return (process.env.NEXT_PUBLIC_IMAGE_PATH as string) + props.src;
};

export async function fetchAPI(
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
