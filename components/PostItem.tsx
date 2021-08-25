import React, { FC } from 'react';
import Date from './Date';
import { PostView } from '../lib/posts';
import Image from 'next/image';
import { IoCalendar, IoHourglassOutline } from 'react-icons/io5';
import { imageLoader } from '../lib/utils';

interface PostItemProps {
  postView: PostView;
}

const PostItem: FC<PostItemProps> = ({ postView }) => {
  return (
    <div
      className="bg-main-50 mt-4 transition transform duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-main-200 
    dark:hover:bg-main-700 dark:bg-main-900 p-6 shadow-lg rounded-lg flex justify-between items-center"
    >
      <div className="flex flex-1">
        <div className="mr-4 relative flex-none hidden lg:block w-24 h-24 ">
          <Image
            loader={imageLoader}
            src={postView.coverImage.url}
            alt="Cover Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-xl font-medium text-gray-900 dark:text-main-300">
            {postView.title}
          </h1>
          <p className="text-main-400">
            {postView.excerpt.slice(0, 200)}...
          </p>
        </div>
      </div>
      <div className="flex flex-col ml-2 flex-none items-center">
        <div className="relative w-12 h-12 ">
          <Image
            loader={imageLoader}
            className="shadow rounded-full"
            src={postView.author.picture?.url}
            alt="Avatar"
            layout="fill"
          />
        </div>
        <p className="text-xs">{postView.author.name}</p>
        <div className="flex mt-2 flex-col items-start">
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
    </div>
  );
};

export default PostItem;
