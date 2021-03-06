import React from 'react';
import SocialFollow from './SocialFollow';
import Link from 'next/link';
import Image from 'next/image';

const aboutContent = (
  <div>
    <h1 className="text-2xl sm:text-3xl">
      Hello there
      <br />
      My name is{' '}
      <span className="text-indigo-500 font-semibold">
        Mohammad Mehran Shahidi
      </span>{' '}
      <br />I am a{' '}
      <span className="font-semibold">Software Engineer</span> <br />
      Welcome to my Website
    </h1>
  </div>
);
function Intro({ className }: any = {}) {
  return (
    <div className={className}>
      {aboutContent}
      <div className="mt-4 sm:mt-6">
        <Link href="/about">
          <a className="text-xl btn">About me</a>
        </Link>
      </div>
    </div>
  );
}

export default function Hero({ className }) {
  return (
    <>
      <div className={`grid lg:grid-cols-3 ${className}`}>
        <div className="p-4 flex flex-col lg:max-w-xl ">
          <div className="flex flex-col sm:p-9 gap-2">
            <Image
              src="/images/profile.svg"
              height={260}
              width={260}
              alt={`Profile`}
            />
            <SocialFollow />
          </div>
          <Intro className="lg:hidden flex flex-col mt-6 items-center" />
        </div>
        <div className="hidden col-span-2 self-center lg:block">
          <Intro />
        </div>
      </div>
    </>
  );
}
