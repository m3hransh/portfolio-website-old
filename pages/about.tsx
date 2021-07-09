import Layout from '../components/Layout';
import { FC } from 'react';
import ProgrammingLanguages from '../components/ProgrammingLanguages';
import Technologies from '../components/Technologies';
import CardPannel from '../components/CardPannel';

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
      </div>
    </Layout>
  );
};

export default About;
