import { fetchAPI } from './utils';

export interface Contributer {
  name: string;
  picture: { url: string };
  title: string;
}

export interface ProjectView {
  id: string;
  title: string;
  excerpt: string;
  coverImage: { url: string };
  link: string;
  previewLink: string;
  contributers: Contributer[];
  startDate: string;
  lastUpdate: string;
  tasks: number;
  completedTasks: number;
  tags: { name: string; id: number }[];
}

export async function getAllProjects(
  preview,
): Promise<ProjectView[]> {
  const data = await fetchAPI(
    `
    query($publicationState: PublicationState!){

    projects(publicationState:$publicationState){
      id
      title
      excerpt
      link
      previewLink
      coverImage{
        url
      }
      startDate
      lastUpdate
      tasks
      completedTasks
      contributers{
        name
        title
        picture{
          url
        }
      }
      tags{
        name
        id
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
  return data.projects;
}
