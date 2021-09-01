import Layout from '../components/Layout';
import { FC } from 'react';
import ProgrammingLanguages from '../components/About/ProgrammingLanguages';
import Technologies from '../components/About/Technologies';
import { CardPannel } from '../components/About';
import Tools from '../components/About/Tools';
import SocialFollow, {
  YouTubeLink,
} from '../components/SocialFollow';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

// this should be put on cms
const aboutContent = (
  <div className="mt-4 font-mono prose dark:prose-dark sm:prose-xl">
    <p>
      My name is <b>Mohammad Mehran Shahidi</b>. I am a{' '}
      <b>Software Engineer</b> who knows how to work with modern tech
      stack effectively to create scalable and efficient{' '}
      <b>websites</b>.
    </p>
    <p>
      I am interested in writing about different things and explain
      them in simple words. I have a{' '}
      <Link href="/blog">
        <a target="_blank">Blog </a>
      </Link>
      and a{' '}
      <a target="_blank" rel="noreferrer" href={YouTubeLink}>
        Youtube Channel
      </a>
      . Take a look at them! They are good stuff!
    </p>
  </div>
);
const About: FC = () => {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <div className="max-w-4xl w-5/6 mx-auto grid lg:space-x-4 space-y-4 lg:grid-cols-2 mb-5">
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
          {aboutContent}
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
    </Layout>
  );
};

export default About;
