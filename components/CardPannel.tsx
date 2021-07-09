import React, { FC } from 'react';

interface CardPannelProps {
  className?: string;
  children?: React.ReactNode;
}

const CardPannel: FC<CardPannelProps> = ({ className, children }) => {
  return (
    <div
      className={`bg-gray-100 dark:bg-gray-900 rounded-lg shadow block p-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default CardPannel;
