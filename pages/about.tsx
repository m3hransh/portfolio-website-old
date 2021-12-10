import Layout from '../components/Layout';
import { FC } from 'react';
import ProgrammingLanguages from '../components/About/ProgrammingLanguages';
import Technologies from '../components/About/Technologies';
import { CardPannel } from '../components/About';
import Tools from '../components/About/Tools';
import SocialFollow from '../components/SocialFollow';
import Head from 'next/head';
import Image from 'next/image';
import { GetStaticProps } from 'next';
import { getAboutPage, AboutPage } from '../lib/pages';
import remarkHtml from 'remark-html';
import { remark } from 'remark';
import Certifications from '../components/About/Certifications';
import TimeLine from '../components/About/Timeline';
export const getStaticProps: GetStaticProps = async ({
  preview = false,
}) => {
  const content: AboutPage = await getAboutPage(preview);

  content.bio = String(
    remark().use(remarkHtml).processSync(content.bio),
  );
  return {
    props: { content, preview },
  };
};

interface AboutProps {
  content: AboutPage;
  preview: boolean;
}

const About: FC<AboutProps> = ({ content, preview }) => {
  console.log(content.body[0].items);
  return (
    <Layout>
      <Head>
        <title>{content.title}</title>
      </Head>
      <div className="max-w-4xl w-5/6 mx-auto mb-5">
        <div className=" grid lg:space-x-4 space-y-4 lg:grid-cols-2 mb-5">
          <div className="px-2 sm:px-8 py-4">
            <div className="flex flex-col items-start gap-3 lg:flex-row lg:items-center lg:space-x-8">
              <Image
                src="/images/profile.svg"
                width={96}
                height={96}
                alt={`Profile`}
              />
              <SocialFollow />
            </div>
            <h1 className="mt-4 text-2xl text-secondary-500 dark:text-secondary-400 font-semibold font-mono">
              Who Am I?
            </h1>
            {/* About Content  */}

            <div
              className="mt-4 font-mono prose dark:prose-dark sm:prose-xl"
              dangerouslySetInnerHTML={{ __html: content.bio }}
            />
          </div>
          <CardPannel>
            <Technologies />
          </CardPannel>
          <CardPannel>
            <ProgrammingLanguages />
          </CardPannel>
          <CardPannel>
            <Tools />
          </CardPannel>
        </div>
        <Certifications className="p-4" content={content.body[0]} />
        <TimeLine />
      </div>
    </Layout>
  );
};

export default About;
