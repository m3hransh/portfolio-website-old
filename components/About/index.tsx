import React, { FC } from 'react';

interface CardPannelProps {
  className?: string;
  children?: React.ReactNode;
}

export const CardPannel: FC<CardPannelProps> = ({
  className,
  children,
}) => {
  return (
    <div
      className={`bg-gray-100 dark:bg-background-900 rounded-lg shadow-lg block p-4 ${className}`}
    >
      {children}
    </div>
  );
};

export const Bar = ({ className }) => {
  return (
    <div className="w-full h-2 bg-gray-500 rounded-full mt-3">
      <div
        className={`${className} h-full text-center text-xs text-main-50 bg-main-900 dark:bg-main-300 rounded-full`}
      ></div>
    </div>
  );
};
