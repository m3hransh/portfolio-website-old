import Layout from '../components/Layout';
import { FC } from 'react';
import ProgrammingLanguages from '../components/About/ProgrammingLanguages';
import Technologies from '../components/About/Technologies';
import { CardPannel } from '../components/About';
import Tools from '../components/About/Tools';

const About: FC = () => {
  return (
    <Layout>
      <div className="max-w-2xl w-5/6 mx-auto grid lg:space-x-4 space-y-4 lg:grid-cols-2">
        <div className="px-8 py-4">
          <img
            src="/images/profile.svg"
            className="h-24 "
            alt={`Profile`}
          />
          <h1 className="mt-4 text-2xl font-semibold font-mono">
            Who Am I?
          </h1>
          <p className="mt-4 font-mono">
            My name is <b>Mohammad Mehran Shahidi</b>. I am a{' '}
            <b>Software Engineer</b> who know how to work with modern
            tech stack effectively to create scalable and efficient{' '}
            <b>websites</b>. I am interested in writing about
            different things and explain them in simple words.
          </p>
        </div>
        <div className="px-8 py-4">
          <h1 className="mt-4 text-2xl font-semibold font-mono">
            Projects
          </h1>
        </div>
        <CardPannel>
          <ProgrammingLanguages />
        </CardPannel>
        <CardPannel>
          <Technologies />
        </CardPannel>
        <CardPannel>
          <Tools />
        </CardPannel>
      </div>
    </Layout>
  );
};

export default About;
