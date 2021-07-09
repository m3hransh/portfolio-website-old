import { FC } from 'react';
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
} from 'react-icons/si';

const ProgrammingLanguages: FC = () => {
  return (
    <>
      <h1 className="text-xl  text-indigo-700 font-bold ">
        Programming Langauges
      </h1>
      {/* //JavaScript */}
      <SiJavascript
        className="text-yellow-500 dark:text-yellow-300 mt-4"
        size="2em"
      />
      <div className="w-full h-2 bg-gray-500 rounded-full mt-3">
        <div className="w-3/4 h-full text-center text-xs text-white bg-yellow-500 dark:bg-yellow-300 rounded-full"></div>
      </div>
      {/* //TypeScript */}
      <SiTypescript className="text-blue-500 mt-4" size="2em" />
      <div className="w-full h-2 bg-gray-500 rounded-full mt-3">
        <div className="w-3/5 h-full text-center text-xs text-white bg-blue-500 rounded-full"></div>
      </div>
      <SiPython className="text-blue-600 mt-4" size="2em" />
      <div className="w-full h-2 bg-gray-500 rounded-full mt-3">
        <div className="w-3/5 h-full text-center text-xs text-white bg-blue-600 rounded-full"></div>
      </div>
      <SiCplusplus className="text-blue-500 mt-4" size="2em" />
      <div className="w-full h-2 bg-gray-500 rounded-full mt-3">
        <div className="w-3/5 h-full text-center text-xs text-white bg-blue-500 rounded-full"></div>
      </div>
    </>
  );
};

export default ProgrammingLanguages;
