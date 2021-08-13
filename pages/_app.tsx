import '../styles/global.css';
import { AppProps } from 'next/app';
import { useEffect } from 'react';

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    )
      document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');

    // Whenever the user explicitly chooses light mode
    // localStorage.theme = "light";
    // localStorage.removeItem("theme");
    document.body.classList.add('dark:bg-gray-800');
  }, []);

  return <Component {...pageProps} />;
}
export default App;
