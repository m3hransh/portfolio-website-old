/* This example requires Tailwind CSS v2.0+ */
import { useEffect, useState } from 'react';
import { Disclosure, Switch } from '@headlessui/react';
import { FcMenu } from 'react-icons/fc';
import { AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';
import { useRouter } from 'next/router';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function DarkModeSwitch({
  enabled,
  setEnabled,
  className,
}: {
  enabled: boolean;
  setEnabled: any;
  className?: string;
}) {
  return (
    <Switch.Group>
      <div className={`${className} flex items-center`}>
        <Switch.Label className="mr-2 font-semibold dark:text-main-dark">
          Dark Mode
        </Switch.Label>
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${
            enabled ? 'bg-primary-600' : 'bg-main-200'
          } relative inline-flex items-center h-6 rounded-full w-11`}
        >
          <span className="sr-only">Enable notifications</span>
          <span
            className={`${
              enabled ? 'translate-x-6' : 'translate-x-1'
            } inline-block w-4 h-4 transform duration-300 ease-in-out bg-main-700 dark:bg-main-50 rounded-full`}
          />
        </Switch>
      </div>
    </Switch.Group>
  );
}
export default function Navbar({ preview }) {
  const [enabled, setEnabled] = useState(true);
  const router = useRouter();
  const [navigation, setNavigation] = useState([
    { name: 'Home', href: '/', current: true },
    { name: 'About', href: '/about', current: false },
    { name: 'Projects', href: '/projects', current: false },
    { name: 'Blog', href: '/blog', current: false },
  ]);

  useEffect(() => {
    if (localStorage.theme === 'white') setEnabled(false);
    else setEnabled(true);
  }, []);

  useEffect(() => {
    const nn = navigation.map((item) => {
      item.current = item.href === router.pathname;
      return item;
    });
    setNavigation(nn);
  }, [router.pathname]);

  useEffect(() => {
    localStorage.theme = enabled ? 'dark' : 'white';
    if (enabled) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [enabled]);

  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <div className="h-16">
          <div className="fixed top-0 opacity-95 inset-x-0 bg-background-100 dark:bg-background-800 z-50">
            <div className="max-w-4xl mx-auto px-2 sm:px-6 ">
              <div className="relative flex items-center justify-between h-16">
                {/* Mobile menu button*/}
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-main  hover:text-main hover:bg-main focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <AiOutlineClose
                        className="block h-6 w-6"
                        aria-hidden="true"
                      />
                    ) : (
                      <FcMenu
                        className="block h-6 w-6"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                </div>
                {/* Desktop Navbar */}
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="hidden sm:block ">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <Link href={item.href} key={item.name}>
                          <a
                            className={classNames(
                              item.current
                                ? 'bg-background-200  dark:bg-background-900'
                                : 'hover:bg-background-200 dark:hover:bg-background-900',
                              'px-3 py-2 rounded-md  font-semibold',
                            )}
                            aria-current={
                              item.current ? 'page' : undefined
                            }
                          >
                            {item.name}
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 hidden sm:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-5">
                  <DarkModeSwitch
                    enabled={enabled}
                    setEnabled={setEnabled}
                  />
                  {preview && (
                    <Link href="/api/clearPreview">
                      <a className=" btn text-sm text-main-800 bg-secondary-400">
                        Preview Off
                      </a>
                    </Link>
                  )}
                </div>
              </div>
            </div>
            {/* Phone menu */}
            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link href={item.href} key={item.name}>
                    <a
                      className={classNames(
                        item.current
                          ? 'bg-gray-900 text-white'
                          : 'dark:text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block px-3 py-2 rounded-md  font-semibold',
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  </Link>
                ))}
                <DarkModeSwitch
                  enabled={enabled}
                  setEnabled={setEnabled}
                  className="px-3 py-2 rounded-md text-base font-medium"
                />
                {preview && (
                  <Link href="/api/clearPreview">
                    <a className=" btn text-sm text-main-800 bg-secondary-400">
                      Preview Off
                    </a>
                  </Link>
                )}
              </div>
            </Disclosure.Panel>
          </div>
        </div>
      )}
    </Disclosure>
  );
}
