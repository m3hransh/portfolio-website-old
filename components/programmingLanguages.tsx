import { FC } from 'react';
import { SiJavascript, SiTypescript, SiPython } from 'react-icons/si';

const ProgrammingLanguages: FC = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-300 rounded-lg shadow block p-4 m-auto">
      <h1 className="text-xl  text-indigo-700 font-bold ">
        Programming Langauges
      </h1>
      {/* //JavaScript */}
      <div className="mt-4">
        <div>
          <SiJavascript className="text-yellow-500" size="2em" />
        </div>
        <div className="w-full h-2 bg-gray-500 rounded-full mt-3">
          <div className="w-3/4 h-full text-center text-xs text-white bg-yellow-500 rounded-full"></div>
        </div>
      </div>
      {/* //TypeScript */}
      <div className="mt-4">
        <div>
          <SiTypescript className="text-blue-500" size="2em" />
        </div>
      </div>
      <div className="w-full h-2 bg-gray-500 rounded-full mt-3">
        <div className="w-3/5 h-full text-center text-xs text-white bg-blue-500 rounded-full"></div>
      </div>
      <div className="mt-4">
        <div>
          <SiPython className="text-blue-600" size="2em" />
        </div>
      </div>
      <div className="w-full h-2 bg-gray-500 rounded-full mt-3">
        <div className="w-3/5 h-full text-center text-xs text-white bg-blue-600 rounded-full"></div>
      </div>
    </div>
  );
};

export default ProgrammingLanguages;
