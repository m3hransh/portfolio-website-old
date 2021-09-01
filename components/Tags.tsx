import { FC } from 'react';

export const colorPicker = [
  'rose',
  'pink',
  'fuchsia',
  'purple',
  'violet',
  'indigo',
  'blue',
  'sky',
  'cyan',
  'teal',
  'emerald',
  'green',
  'lime',
  'yellow',
  'amber',
  'orange',
  'red',
  'gray',
];

interface TagsProps {
  tags: { name: string; id: number }[];
  className?: string;
}
const Tags: FC<TagsProps> = ({ tags, className }) => {
  const n = colorPicker.length;
  return (
    <div className={className}>
      {tags &&
        tags.map((tag) => (
          <div
            key={tag.id}
            className={`linkPop text-xs m-0.5 inline-flex items-center font-bold 
              leading-sm uppercase px-3 py-1 
              bg-${colorPicker[tag.id % n]}-600
              text-${colorPicker[tag.id % n]}-200 
              dark:bg-${colorPicker[tag.id % n]}-300
              dark:text-${colorPicker[tag.id % n]}-800 
              rounded-full`}
          >
            {tag.name}
          </div>
        ))}
    </div>
  );
};

export default Tags;
