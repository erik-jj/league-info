import React, { useState } from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SearchBar() {
  const [dropDown, setDropDown] = useState(false);

  return (
    <>
      <form>
        <div className="flex py-2 justify-center">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button
                className="inline-flex justify-center w-full  
               shadow-sm px-10 py-2 text-sm font-medium text-gray-900 bg-gray-50 rounded-l-lg border-l-gray-50 border-l-2 border border-gray-300 focus:border-1 focus:outline-none "
              >
                Rol
                <ChevronDownIcon
                  className="-mr-1 ml-2 h-5 w-5"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute z-10 right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Asesino
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

          <div className="relative w-3/6">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:border-0 focus:outline-none "
              placeholder="Buscar"
              required
            />
            <button
              type="submit"
              className="absolute top-0 right-0 p-2 text-sm font-medium text-white bg-blue-800 rounded-r-lg border  hover:bg-slate-800  focus:outline-none"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
