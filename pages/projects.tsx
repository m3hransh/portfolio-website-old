import Layout from '../components/Layout';
import { GetStaticProps } from 'next';
import { getAllProjects, ProjectView } from '../lib/projects';
import ProjectItem from '../components/ProjectItem';
import Link from 'next/link';
import Head from 'next/head';

export const getStaticProps: GetStaticProps = async ({
  preview = false,
}) => {
  const allProjects: ProjectView[] = await getAllProjects(preview);
  //   {
  //     id: '1',
  //     title: 'Twitter-clone',
  //     excerpt:
  //       'Implementing Twitter clone using React, GraphQL, and Prisma in typescript. The purpose of the project is to become comfortable with the advanced features that React and GraphQL offer.',
  //     link: 'https://github.com/m3hransh/twitter-clone',
  //     coverImage: {
  //       url: '/uploads/10wmt_super_Jumbo_v4_7a2e7318a9.jpg',
  //     },
  //     startDate: '2021-08-04',
  //     lastUpdate: '2021-08-24',
  //     tasks: 10,
  //     completedTasks: 6,
  //     contributers: [
  //       {
  //         name: 'Mehran Shahidi',
  //         title: 'Software Engineer',
  //         picture: {
  //           url: '/uploads/face_5fa04cd995.svg',
  //         },
  //       },
  //       {
  //         name: 'Mehrdad Shahidi',
  //         title: 'DevOps Engineer',
  //         picture: {
  //           url: '/uploads/m3d_8db56665be.jpg',
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     id: '1',
  //     title: 'Twitter-clone',
  //     excerpt:
  //       'Implementing Twitter clone using React, GraphQL, and Prisma in typescript. The purpose of the project is to become comfortable with the advanced features that React and GraphQL offer.',
  //     link: 'https://github.com/m3hransh/twitter-clone',
  //     coverImage: {
  //       url: '/uploads/10wmt_super_Jumbo_v4_7a2e7318a9.jpg',
  //     },
  //     startDate: '2021-08-04',
  //     lastUpdate: '2021-08-24',
  //     tasks: 10,
  //     completedTasks: 6,
  //     contributers: [
  //       {
  //         name: 'Mehran Shahidi',
  //         title: 'Software Engineer',
  //         picture: {
  //           url: '/uploads/face_5fa04cd995.svg',
  //         },
  //       },
  //       {
  //         name: 'Mehrdad Shahidi',
  //         title: 'DevOps Engineer',
  //         picture: {
  //           url: '/uploads/m3d_8db56665be.jpg',
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     id: '1',
  //     title: 'Twitter-clone',
  //     excerpt:
  //       'Implementing Twitter clone using React, GraphQL, and Prisma in typescript. The purpose of the project is to become comfortable with the advanced features that React and GraphQL offer.',
  //     link: 'https://github.com/m3hransh/twitter-clone',
  //     coverImage: {
  //       url: '/uploads/10wmt_super_Jumbo_v4_7a2e7318a9.jpg',
  //     },
  //     startDate: '2021-08-04',
  //     lastUpdate: '2021-08-24',
  //     tasks: 10,
  //     completedTasks: 6,
  //     contributers: [
  //       {
  //         name: 'Mehran Shahidi',
  //         title: 'Software Engineer',
  //         picture: {
  //           url: '/uploads/face_5fa04cd995.svg',
  //         },
  //       },
  //       {
  //         name: 'Mehrdad Shahidi',
  //         title: 'DevOps Engineer',
  //         picture: {
  //           url: '/uploads/m3d_8db56665be.jpg',
  //         },
  //       },
  //     ],
  //   },
  // ];
  // By returning { props: { posts } }, the Blog component
  // will receive 'posts' as a prop at build time
  return {
    props: { allProjects },
  };
};

function Projects({ allProjects }) {
  return (
    <Layout>
      <Head>
        <title>Projects</title>
      </Head>
      <main className="max-w-4xl w-10/12 mx-auto mb-5">
        <section className="lg:px-12">
          <h2 className="text-4xl font-bold tracking-wider text-secondary-600 dark:text-secondary-500 mt-4 font-serif">
            Projects
          </h2>
          <div className="grid lg:grid-cols-2 lg:gap-3">
            {allProjects?.map((projectView: ProjectView) => (
              <Link key={projectView.id} href={projectView.link}>
                <a>
                  <ProjectItem projectView={projectView} />
                </a>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Projects;