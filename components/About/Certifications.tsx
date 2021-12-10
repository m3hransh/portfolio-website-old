import React, { FC } from 'react';
import { CertificatSection } from '../../lib/pages';
import Item from './Item';

interface CertificationsProps {
  className?: string;
  chidlren?: React.ReactNode;
}
interface CertificationsProps {
  className?: string;
  content: CertificatSection;
}
const Certifications: FC<CertificationsProps> = ({
  content,
  className,
}) => {
  return (
    <div className={className}>
      <details>
        <summary className=" text-2xl text-secondary-600 dark:text-secondary-400 font-bold">
          {content.name}
        </summary>
        <ul>
          {content.items?.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </ul>
      </details>
    </div>
  );
};

export default Certifications;
