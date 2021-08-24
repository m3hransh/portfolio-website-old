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
