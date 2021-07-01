import Image from 'next/image';
import Layout from '../components/layout';

function About() {
  return (
    <Layout>
      <div className="grid lg:grid-cols-2">
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
        <div className=" relative bg-gray-900 lg:block p-3">
          <h1 className="text-2xl font-semibold font-mono">Skills</h1>
        </div>
      </div>
    </Layout>
  );
}

export default About;
