import { FC } from 'react';
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiGo,
  SiLinux,
  SiDocker,
  SiVisualstudiocode,
  SiVim,
  SiNotion,
} from 'react-icons/si';
import { Bar } from '.';

const Tools: FC = () => {
  return (
    <>
      <h1 className="text-2xl  text-secondary-500 dark:text-secondary-400 font-bold ">
        Tools
      </h1>
      {/* //JavaScript */}
      <SiLinux
        className="text-yellow-600 dark:text-yellow-300 mt-4"
        size="2em"
      />
      <Bar className="w-3/4" />
      {/* //TypeScript */}
      <SiDocker className="text-blue-400 mt-4" size="2em" />
      <Bar className="w-3/4" />
      <SiVisualstudiocode className="text-blue-600 mt-4" size="2em" />
      <Bar className="w-3/4" />
      <SiVim className="text-green-500 mt-4" size="2em" />
      <Bar className="w-1/2" />
      <SiNotion
        className="text-main-800 dark:text-main-200 mt-4"
        size="2em"
      />
      <Bar className="w-1/2" />
    </>
  );
};

export default Tools;
