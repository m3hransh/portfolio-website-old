import { ImageLoader } from 'next/image';
import getConfig from 'next/config';
export const imageLoader: ImageLoader = (props) => {
  return (process.env.NEXT_PUBLIC_IMAGE_PATH as string) + props.src;
};

export async function fetchAPI(
  query: string,
  { variables, preview }: { variables?: any; preview?: boolean } = {},
) {
  let apiUrl: string;
  let token: string;
  if (preview) {
    const { serverRuntimeConfig } = getConfig();
    apiUrl = serverRuntimeConfig.CMS_API;
    token = serverRuntimeConfig.CMS_AUTH_TOKEN;
    console.log(`API for Preview: ${apiUrl}`);
  } else {
    apiUrl = process.env.BUILD_CMS_API;
    token = process.env.CMS_AUTH_TOKEN;
    console.log(`API at build time: ${apiUrl}`);
  }

  const res = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
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
