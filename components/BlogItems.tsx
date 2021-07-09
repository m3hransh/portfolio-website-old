import PostItem from './PostItem';
import Link from 'next/link';
import { FC } from 'react';
import { PostView } from '../lib/posts';
// fix the typing
interface BlogItemsProps {
  allPostsData: PostView[];
  className?: string;
}
const BlogItems: FC<BlogItemsProps> = ({
  allPostsData,
  className,
}) => {
  return (
    <ul className={className}>
      {allPostsData?.map((postView: PostView) => (
        <Link key={postView.slug} href={`/posts/${postView.slug}`}>
          <a>
            <PostItem postView={postView} />
          </a>
        </Link>
      ))}
    </ul>
  );
};

export default BlogItems;
