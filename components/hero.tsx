import React from "react";
import SocialFollow from "./socialFollow";

function Intro({ className }: any = {}) {
  return (
    <div className={className}>
      <h1 className="mt-6 text-2xl sm:mt-8 sm:text-4xl">
        Hello, I am <br />
        <span className="text-indigo-500">Mehran Shahidi</span> welcome to my
        Website
      </h1>
      <div className="mt-4 sm:mt-6">
        <a className="btn" href="#">
          Contact Me
        </a>
      </div>
    </div>
  );
}

export default function Hero({ className }) {
  return (
    <>
      <div className={`grid lg:grid-cols-2 ${className}`}>
        <div className="px-12 py-4 flex flex-col lg:max-w-xl ">
          <div className="flex flex-col ">
            <img
              src="/images/profile.svg"
              className="px-8 py-2 h-72 lg:h-auto "
              alt={`Profile`}
            />
            <SocialFollow />
          </div>
          <Intro className="lg:hidden" />
        </div>
        <div className="hidden  lg:block">
          <Intro />
        </div>
      </div>
    </>
  );
}
