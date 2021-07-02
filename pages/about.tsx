import Layout from '../components/layout';
import { FC } from 'react';
import ProgrammingLanguages from '../components/programmingLanguages';

const About: FC = () => {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto grid lg:grid-cols-2">
        <div className="px-8 py-4">
          <img
            src="/images/profile.svg"
            className="h-24 "
            alt={`Profile`}
          />
          <h1 className="mt-4 text-2xl font-semibold font-mono">
            Bio
          </h1>
        </div>
        <div className=" relative  lg:block p-3">
          <div>
            <ProgrammingLanguages />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
