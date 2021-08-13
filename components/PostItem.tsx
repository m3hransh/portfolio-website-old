import React, { FC } from 'react';
import Date from './Date';
import { PostView, imageLoader } from '../lib/posts';
import Image from 'next/image';

interface PostItemProps {
  postView: PostView;
}

const PostItem: FC<PostItemProps> = ({ postView }) => {
  return (
    <div
      className="bg-gray-50 mt-4 transition transform duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-gray-200 
    dark:hover:bg-gray-700 dark:bg-gray-900 p-6 shadow-lg rounded-lg flex justify-between items-center"
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
          <h1 className="text-xl font-medium text-gray-900 dark:text-gray-300">
            {postView.title}
          </h1>
          <p className="text-gray-400">
            {postView.excerpt.slice(0, 100)}...
          </p>
        </div>
      </div>
      <div className="flex flex-col ml-2 flex-none items-center text-center">
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
        <small className="mt-5 text-gray-500">
          <Date dateString={postView.date} />
        </small>
      </div>
    </div>
  );
};

export default PostItem;
