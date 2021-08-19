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
        <Switch.Label className="mr-2 dark:text-gray-300">
          Dark Mode
        </Switch.Label>
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${
            enabled ? 'bg-blue-600' : 'bg-gray-200'
          } relative inline-flex items-center h-6 rounded-full w-11`}
        >
          <span className="sr-only">Enable notifications</span>
          <span
            className={`${
              enabled ? 'translate-x-6' : 'translate-x-1'
            } inline-block w-4 h-4 transform bg-white rounded-full`}
          />
        </Switch>
      </div>
    </Switch.Group>
  );
}
export default function Navbar() {
  const [enabled, setEnabled] = useState(true);
  const router = useRouter();
  const [navigation, setNavigation] = useState([
    { name: 'Home', href: '/', current: true },
    { name: 'About', href: '/about', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Blog', href: '#', current: false },
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
    <Disclosure as="nav" className="dark:bg-gray-800">
      {({ open }) => (
        <div className="h-16">
          <div className="fixed top-0 opacity-95 inset-x-0 bg-gray-50 dark:bg-gray-900 z-50">
            <div className="max-w-3xl mx-auto px-2 sm:px-6 ">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  {/* <div className="flex-shrink-0 flex items-center">
                    <img
                      className="sm:block h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                      alt="Workflow"
                    />
                  </div> */}
                  <div className="hidden sm:block ">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <Link href={item.href} key={item.name}>
                          <a
                            className={classNames(
                              item.current
                                ? 'bg-gray-900 text-white'
                                : 'dark:text-gray-300 hover:bg-gray-700 hover:text-white',
                              'px-3 py-2 rounded-md text-sm font-medium',
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
                <div className="absolute inset-y-0 right-0 hidden sm:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ">
                  <DarkModeSwitch
                    enabled={enabled}
                    setEnabled={setEnabled}
                  />
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link href={item.href} key={item.name}>
                    <a
                      className={classNames(
                        item.current
                          ? 'bg-gray-900 text-white'
                          : 'dark:text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block px-3 py-2 rounded-md text-base font-medium',
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
              </div>
            </Disclosure.Panel>
          </div>
        </div>
      )}
    </Disclosure>
  );
}
