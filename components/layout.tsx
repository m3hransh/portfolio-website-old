import styles from "./layout.module.css";
import Image from "next/image";
import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import React from "react";
import Navbar from "./nav";

const name = "Mehran Shahidi";
export const siteTitle = "Mehran Shahidi";

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
      <div className="max-w-2xl mx-auto dark:text-white">
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
