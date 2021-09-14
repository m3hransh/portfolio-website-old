import { ImageLoader } from 'next/image';
import configs from '../configs.json';

export const imageLoader: ImageLoader = (props) => {
  return (process.env.NEXT_PUBLIC_IMAGE_PATH as string) + props.src;
};

export async function fetchAPI(
  query: string,
  { variables, preview }: { variables?: any; preview?: boolean } = {},
) {
  const res = await fetch(process.env.NEXT_PUBLIC_CMS_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_CMS_AUTH_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });
  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

export const urlBuilder = (src) => {
  const fullUrl = process.env.NEXT_PUBLIC_IMAGE_PATH + src;
  return fullUrl;
};
