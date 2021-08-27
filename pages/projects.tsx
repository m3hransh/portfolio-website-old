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
  return {
    props: { allProjects, preview },
  };
};

function Projects({ allProjects, preview }) {
  return (
    <Layout preview={preview}>
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
                <a target="_blank">
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
