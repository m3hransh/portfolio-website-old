import { FC } from 'react';

export const colorPicker = [
  ['#FDA4AF', '#BE123C'],
  ['#D8B4FE', '#6B21A8'],
  ['#A5B4FC', '#4338CA'],
  ['#7DD3FC', '#075985'],
  ['#6EE7B7', '#047857'],
  ['#BEF264', '#4D7C0F'],
  ['#FDE047', '#F59E0B'],
  ['#FED7AA', '#EA580C'],
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
              rounded-full`}
            style={{
              color: colorPicker[tag.id % n][1],
              backgroundColor: colorPicker[tag.id % n][0],
            }}
          >
            {tag.name}
          </div>
        ))}
    </div>
  );
};

export default Tags;
