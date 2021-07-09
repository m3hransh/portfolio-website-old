import React, { FC } from 'react';
import Date from './Date';
import { PostView } from '../lib/posts';

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
        <div className="mr-4 flex-none ">
          <img
            className=" hidden lg:block shadow  w-24 h-24 object-cover object-center rounded-lg"
            src={postView.coverImage.url}
            alt="Avatar"
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
        <img
          className="shadow sm:w-22 sm:h-22 w-10 h-10 object-cover object-center rounded-full"
          src={postView.author.picture?.url}
          alt="Avatar"
        />
        <p className="text-xs">{postView.author.name}</p>
        <small className="mt-5 text-gray-500">
          <Date dateString={postView.date} />
        </small>
      </div>
    </div>
  );
};

export default PostItem;
