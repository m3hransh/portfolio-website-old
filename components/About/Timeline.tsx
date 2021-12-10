import React, { FC } from 'react';

interface TimeLineProps {
  className?: string;
  chidlren?: React.ReactNode;
}

const TimeLine: FC<TimeLineProps> = () => {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <div className="col-start-5 col-end-6 relative mr-10">
          <div className="w-6 h-6  top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
          <div className="h-full w-6 flex items-center justify-center">
            <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
          </div>
        </div>
        <div>
          Education
          <br />
          <br />
          This is
        </div>
      </div>
      {/* Items 2 */}
      <div className="flex">
        <div className="col-start-5 col-end-6 relative mr-10">
          <div className="w-6 h-6  top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
          <div className="h-full w-6 flex items-center justify-center">
            <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
          </div>
        </div>
        <div>
          Education
          <br />
          <br />
        </div>
      </div>

      <div className="flex">
        <div className="col-start-5 col-end-6 relative mr-10">
          <div className="h-full w-6 flex items-center justify-center">
            <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
          </div>
          <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
        </div>
        <div>Education</div>
      </div>
    </div>
  );
};

export default TimeLine;
