import Image from "next/image";

function About() {
  return (
    <div className="bg-gray-100 ">
      <div className="grid lg:grid-cols-2">
        <div className="px-8 py-4 max-w-md mx-auto sm:max-w-xl">
          <img src="/images/profile.svg" className="h-24 " alt={`Profile`} />
          <img
            className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full
        sm:object-cover object-center lg:hidden"
            src="/images/life-book.png"
          />

          <h1 className="mt-6 text-2xl sm:mt-8 sm:text-4xl">
            This how you should plan for you life.{" "}
            <span className="text-indigo-500">With the life book</span>
          </h1>
          <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
            We all want to have a good life. But the only way to create life of
            our dream is to be intentional about what we want to achieve.
          </p>
          <div className="mt-4 sm:mt-6">
            <a
              className="btn"
              href="#"
            >
              Get the Book
            </a>
          </div>
        </div>
        <div className="hidden relative lg:block">
          <img className="absolute inset-0 w-full h-full object-cover object-center" src="/images/life-book.png" />
        </div>
      </div>
    </div>
  );
}

export default About;
