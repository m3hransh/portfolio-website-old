import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Navbar from './Nav';
import Hero from './Hero';

const name = 'Mehran Shahidi';
export const siteTitle = 'Mehran Shahidi';

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: Boolean;
}) {
  return (
    <>
      <Navbar />
      <Head>
        <link rel="icon" type="image/png" href="images/profile.png" />
        <meta
          name="description"
          content="Hi, I am Mehran. I have some contents in my website that you might be intersted in. Make sure you check it out"
        />
        <meta
          property="og:image"
          content={`https://mehran-blog.vercel.app/images/profile.png`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className=" h-auto mt-10 dark:bg-gray-800 dark:text-white">
        <main className=" mx-auto">{children}</main>
      </div>
    </>
  );
}
