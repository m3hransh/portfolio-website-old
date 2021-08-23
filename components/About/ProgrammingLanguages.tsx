import { FC } from 'react';
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiGo,
} from 'react-icons/si';
import { Bar } from '.';

const ProgrammingLanguages: FC = () => {
  return (
    <>
      <h1 className="text-xl  text-primary-700 dark:text-primary-500 font-bold ">
        Programming Langauges
      </h1>
      {/* //JavaScript */}
      <SiJavascript
        className="text-yellow-500 dark:text-yellow-200 mt-4"
        size="2em"
      />
      <Bar className="w-3/4" />
      {/* //TypeScript */}
      <SiTypescript className="text-blue-500 mt-4" size="2em" />
      <Bar className="w-3/4" />
      <SiPython className="text-blue-600 mt-4" size="2em" />
      <Bar className="w-3/4" />
      <SiCplusplus className="text-blue-500 mt-4" size="2em" />
      <Bar className="w-1/2" />
      <SiGo className="text-blue-500 mt-4" size="2em" />
      <Bar className="w-1/2" />
    </>
  );
};

export default ProgrammingLanguages;
