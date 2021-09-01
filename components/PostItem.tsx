import React, { FC } from 'react';
import Date from './Date';
import { PostView } from '../lib/posts';
import Image from 'next/image';
import { IoCalendar, IoHourglassOutline } from 'react-icons/io5';
import Tags from '../components/Tags';
import { urlBuilder } from '../lib/utils';

interface PostItemProps {
  postView: PostView;
}

const PostItem: FC<PostItemProps> = ({ postView }) => {
  return (
    <div
      className="bg-main-50 scale-95 sm:scale-100 mt-4 transition transform duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-main-200 
    dark:hover:bg-main-700 dark:bg-background-800 p-6 shadow-lg rounded-lg flex flex-col justify-between sm:flex-row"
    >
      <div className="flex flex-1">
        <div className="mr-4 relative flex-none hidden lg:block w-24 h-24 ">
          <Image
            src={urlBuilder(postView.coverImage.url)}
            alt="Cover Image"
            width={200}
            height={200}
            objectFit="cover"
            className="rounded-lg shadow"
          />
        </div>
        <div className="flex-1 flex flex-col">
          <h1 className="text-xl font-medium text-gray-900 dark:text-main-300">
            {postView.title}
          </h1>
          <p className="text-main-400">
            {postView.excerpt.slice(0, 200)}...
          </p>
          <Tags
            className="my-auto hidden sm:block"
            tags={postView.tags}
          />
        </div>
      </div>
      {/* Tags and profile data */}
      <div className="flex mt-2 gap-4">
        <div className="flex flex-row sm:flex-col ml-2 flex-none gap-4 items-center ">
          <div className="flex flex-col items-center">
            <div className="relative w-12 h-12 ">
              <Image
                className="shadow rounded-full"
                src={urlBuilder(postView.author.picture?.url)}
                width={48}
                height={48}
                alt="Avatar"
              />
            </div>
            <p className="text-xs">{postView.author.name}</p>
          </div>
          <div className="flex flex-col items-start">
            <small className="text-main-500 flex items-center space-x-1">
              <IoCalendar className="inline" />
              <Date dateString={postView.date} />
            </small>
            <small className="text-main-500 flex items-center space-x-1">
              <IoHourglassOutline className="inline" />
              <p>{postView.readTime} min read</p>
            </small>
          </div>
        </div>
        {/* This will be hidden after sm */}
        <Tags className=" my-auto sm:hidden" tags={postView.tags} />
      </div>
    </div>
  );
};

export default PostItem;
