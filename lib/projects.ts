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
  contributers: Contributer[];
  startDate: string;
  lastUpdate: string;
  tasks: number;
  completedTasks: number;
}

export async function getAllProjects(
  preview,
): Promise<ProjectView[]> {
  const data = await fetchAPI(
    `
    query {

    projects{
      id
      title
      excerpt
      link
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
  }
    }
    `,
  );
  return data.projects;
}
