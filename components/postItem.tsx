import React, { FC } from "react";
import Date from "./date";

interface Author {
  name: string;
  picture: { url: string };
}

interface PostItemProps {
  author: Author;
  title: string;
  slug: string;
  coverImage: { url: string };
  excerpt: string;
  date: string;
}

const PostItem: FC<PostItemProps> = (props) => {
  console.log(props.author);
  return (
    <div className="bg-white transition transform duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-gray-100 
    dark:hover:bg-gray-700 dark:bg-gray-900 p-6 shadow-lg rounded-lg flex justify-between items-center">
      <div className="flex flex-1">
        <div className="mr-4 flex-none ">
          <img
            className=" hidden lg:block shadow  w-24 h-24 object-cover object-center rounded-lg"
            src={props.coverImage.url}
            alt="Avatar"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-xl font-medium text-gray-900 dark:text-gray-300">{props.title}</h1>
          <p className="text-gray-400">{props.excerpt.slice(0, 100)}...</p>
        </div>
      </div>
      <div className="flex flex-col ml-2 flex-none items-center text-center">
        <img
          className="shadow sm:w-22 sm:h-22 w-10 h-10 object-cover object-center rounded-full"
          src={props.author.picture?.url}
          alt="Avatar"
        />
        <p className="text-xs">{props.author.name}</p>
        <small className="mt-5 text-gray-500">
          <Date dateString={props.date} />
        </small>
      </div>
    </div>
  );
};

export default PostItem;
