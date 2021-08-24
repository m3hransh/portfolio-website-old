import { FC } from 'react';
import {
  SiGithub,
  SiApollographql,
  SiGraphql,
  SiNextDotJs,
  SiReact,
} from 'react-icons/si';
import { Bar } from '.';

interface TechnologiesProps {
  className?: string;
}
const Technologies: FC<TechnologiesProps> = ({ className }) => {
  return (
    <>
      <h1 className="text-xl text-primary-700 dark:text-primary-500 font-bold">
        Technologies
      </h1>
      {/* //JavaScript */}
      <SiGithub
        className="text-gray-800 dark:text-gray-300 mt-4"
        size="2em"
      />
      <Bar className="w-3/4" />
      {/* React */}
      <SiReact className="text-blue-600 mt-4" size="2em" />
      <Bar className="w-3/4" />
      {/* Next */}
      <SiNextDotJs
        className="text-gray-800 dark:text-gray-300 mt-4"
        size="2em"
      />
      <Bar className="w-3/4" />
      {/* GraphQL */}
      <SiGraphql className="text-pink-500 mt-4" size="2em" />
      <Bar className="w-3/5" />
      {/* Apollo */}
      <SiApollographql
        className="text-gray-800 dark:text-gray-300 mt-4"
        size="2em"
      />
      <Bar className="w-3/5" />
    </>
  );
};

export default Technologies;
