import { FC } from 'react';
import {
  SiGithub,
  SiApollographql,
  SiGraphql,
  SiNextDotJs,
  SiReact,
} from 'react-icons/si';

interface TechnologiesProps {
  className?: string;
}
const Technologies: FC<TechnologiesProps> = ({ className }) => {
  return (
    <>
      <h1 className="text-xl  text-indigo-700 font-bold ">
        Technologies
      </h1>
      {/* //JavaScript */}
      <SiGithub
        className="text-gray-800 dark:text-gray-300 mt-4"
        size="2em"
      />
      <div className="w-full h-2 bg-gray-500 rounded-full mt-3">
        <div className="w-3/4 h-full text-center text-xs text-white bg-gray-800 dark:bg-gray-300 rounded-full"></div>
      </div>
      {/* React */}
      <SiReact className="text-blue-600 mt-4" size="2em" />
      <div className="w-full h-2 bg-gray-500 rounded-full mt-3">
        <div className="w-3/4 h-full text-center text-xs text-white bg-blue-600 rounded-full"></div>
      </div>
      {/* Next */}
      <SiNextDotJs
        className="text-gray-800 dark:text-gray-300 mt-4"
        size="2em"
      />
      <div className="w-full h-2 bg-gray-500 rounded-full mt-3">
        <div className="w-3/4 h-full text-center text-xs text-white bg-gray-800 dark:bg-gray-300 rounded-full"></div>
      </div>
      {/* GraphQL */}
      <SiGraphql className="text-pink-500 mt-4" size="2em" />
      <div className="w-full h-2 bg-gray-500 rounded-full mt-3">
        <div className="w-3/5 h-full text-center text-xs text-white bg-pink-500 rounded-full"></div>
      </div>
      <SiApollographql
        className="text-gray-800 dark:text-gray-300 mt-4"
        size="2em"
      />
      <div className="w-full h-2 bg-gray-500 rounded-full mt-3">
        <div className="w-3/5 h-full text-center text-xs text-white bg-gray-800 dark:bg-gray-300 rounded-full"></div>
      </div>
    </>
  );
};

export default Technologies;
