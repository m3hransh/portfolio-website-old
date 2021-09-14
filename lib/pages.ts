import { fetchAPI } from './utils';

export interface AboutPage {
  title: string;
  bio: string;
  body: CertificatSection[];
}
export interface CertificatSection {
  name: string;
  description: string;
  items: ItemContent[];
}
export interface ItemContent {
  id: number;
  name: string;
  content: string;
  link: string;
  issued: string;
  grade: string;
  picture: { url: string };
}

export async function getAboutPage(
  preview: boolean,
): Promise<AboutPage> {
  const data = await fetchAPI(
    `
    query About{
    aboutMe(publicationState: LIVE){
      title
      bio
      body{
        __typename
        ...on ComponentPageSection{
          name
          description
          items{
            id
            name
            content
            link
            issued
            grade
            picture{
              url
            }
          }
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
  return data.aboutMe;
}
