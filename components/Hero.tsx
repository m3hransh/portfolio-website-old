import React from 'react';
import SocialFollow from './SocialFollow';
import Link from 'next/link';

function Intro({ className }: any = {}) {
  return (
    <div className={className}>
      <h1 className="mt-6 text-2xl  sm:mt-8 sm:text-3xl">
        Hello there,
        <br />
        my name is{' '}
        <span className="text-indigo-500 font-semibold">
          Mohammad Mehran Shahidi.
        </span>{' '}
        <br />I am a{' '}
        <span className="font-semibold">Software Engineer.</span>{' '}
        <br />
        Welcome to my Website
      </h1>
      <div className="mt-4 sm:mt-6">
        <Link href="/about">
          <a className="text-2xl btn">About me</a>
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
          <div className="flex flex-col ">
            <img
              src="/images/profile.svg"
              className="p-8  h-72 lg:h-auto "
              alt={`Profile`}
            />
            <SocialFollow />
          </div>
          <Intro className="lg:hidden flex flex-col items-center" />
        </div>
        <div className="hidden col-span-2 lg:block">
          <Intro />
        </div>
      </div>
    </>
  );
}
