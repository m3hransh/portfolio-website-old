import React, { FC } from 'react';
import Date from './Date';
import { ProjectView } from '../lib/projects';
import Image from 'next/image';
import { imageLoader } from '../lib/utils';
import { IoCalendar, IoHourglassOutline } from 'react-icons/io5';

interface ProjectItemProps {
  projectView: ProjectView;
}

const ProjectItem: FC<ProjectItemProps> = ({ projectView }) => {
  return (
    <div
      className="bg-main-50 mt-4 transition transform duration-500 
        ease-in-out hover:-translate-y-1 hover:scale-105 
      hover:bg-main-200 dark:hover:bg-background-600 dark:bg-background-800 p-6 
        shadow-lg rounded-lg flex flex-col justify-between 
        space-y-2

      "
    >
      <div className="flex space-x-6">
        <div className="relative flex-none hidden lg:block w-24 h-24 ">
          <Image
            loader={imageLoader}
            src={projectView.coverImage.url}
            alt="Cover Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <h1 className="text-xl font-semibold text-gray-900 dark:text-secondary-400">
            {projectView.title}
          </h1>
          <small className="text-main-500 flex items-center space-x-1">
            Contributers:
          </small>
          <div className="flex -space-x-2">
            {projectView.contributers.map((contributer) => (
              <div className="relative w-8 h-8 ">
                <Image
                  loader={imageLoader}
                  className="shadow rounded-full"
                  src={contributer.picture?.url}
                  alt="Avatar"
                  layout="fill"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col ">
        <small className="text-main-500 flex items-center space-x-1">
          <IoCalendar className="inline mr-2" /> Starting Date:{' '}
          <Date dateString={projectView.startDate} />
        </small>
        <small className="text-main-500 flex items-center space-x-1">
          <IoCalendar className="inline mr-2" /> Last Update: {''}
          <Date dateString={projectView.lastUpdate} />
        </small>
      </div>
      <p>
        Task done:{' '}
        <span className="text-accent-400">
          {projectView.completedTasks}
        </span>
        /{projectView.tasks}
      </p>
      <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
        <div
          style={{
            width: `${
              (projectView.completedTasks / projectView.tasks) * 100
            }%`,
          }}
          className="h-full text-center text-xs text-white 
        bg-accent-400 rounded-full"
        ></div>
      </div>
      <p className="text-main-400">
        {projectView.excerpt.slice(0, 100)}...
      </p>
    </div>
  );
};

export default ProjectItem;
