import React, { FC } from 'react';
import { ItemContent } from '../../lib/pages';
import Image from 'next/image';
import { urlBuilder } from '../../lib/utils';
import { IoCalendar, IoRibbon } from 'react-icons/io5';
import Date from '../Date';

interface ItemProps {
  className?: string;
  chidlren?: React.ReactNode;
  item: ItemContent;
}

const Item: FC<ItemProps> = ({ item }) => {
  return (
    <>
      <a
        href={item.link}
        target="_blank"
        rel="noreferrer"
        className="bg-main-100 mt-4 transition transform duration-500 
        ease-in-out hover:-translate-y-1 hover:scale-105 
      hover:bg-main-200 dark:hover:bg-background-600 dark:bg-background-800 p-6 
        shadow-lg rounded-lg flex  
        space-y-2
        gap-2
"
      >
        <div className="relative flex-none lg:block p-2 w-24 h-24">
          <Image
            src={urlBuilder(item.picture.url)}
            alt="Cover Image"
            objectFit="cover"
            width={200}
            height={200}
            className="rounded-lg shadow  "
          />
        </div>
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold">{item.name}</h3>
          <div>{item.content}</div>
          <div className="flex flex-col mt-2">
            <small className="text-main-500 flex items-center space-x-1">
              <IoCalendar className="inline mr-2" /> Issued Date:{' '}
              <Date dateString={item.issued} />
            </small>
            <small className="text-main-500 flex items-center space-x-1">
              <IoRibbon className="inline mr-2" /> Grade: {''}
              <div>{item.grade}</div>
            </small>
          </div>
        </div>
      </a>
    </>
  );
};

export default Item;
