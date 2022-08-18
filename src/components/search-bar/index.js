import React, { useContext, useState, useEffect } from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { AppContext } from "../application/provider";

export default function SearchBar() {
  const [state, setState] = useContext(AppContext);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [selector, setSelector] = useState("Rol");

  const handleDropDown = (selector) => {
    window.event.preventDefault();
    setFilter(selector);
  };

  useEffect(() => {
    setState({ ...state, filtro: filter, busqueda: search });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, search]);

  const handleSearch = (typed) => {
    window.event.preventDefault();
    setSearch(typed);
  };

  return (
    <>
      <div className="flex py-2 justify-center ">
        <Menu as="div" className="relative inline-block text-left  ">
          <div>
            <Menu.Button
              className="inline-flex justify-center w-36
               shadow-sm px-4 py-2 text-sm font-medium text-gray-900 bg-gray-50 rounded-l-lg border-l-gray-50 border-l-2 border border-gray-300 focus:border-1 focus:outline-none "
            >
              {selector}
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
                  <>
                    <ul>
                      <li
                        onClick={() => {
                          handleDropDown("All");
                          setSelector("Todos");
                        }}
                        className="bg-white text-gray-900 block px-4 py-2 text-sm hover:cursor-pointer"
                      >
                        Todos
                      </li>
                      <li
                        onClick={() => {
                          handleDropDown("Assassin");
                          setSelector("Asesinos");
                        }}
                        className="bg-white text-gray-900 block px-4 py-2 text-sm hover:cursor-pointer"
                      >
                        Asesinos
                      </li>
                      <li
                        onClick={() => {
                          handleDropDown("Fighter");
                          setSelector("Luchadores");
                        }}
                        className="bg-white text-gray-900 block px-4 py-2 text-sm hover:cursor-pointer"
                      >
                        Luchadores
                      </li>
                      <li
                        onClick={() => {
                          handleDropDown("Mage");
                          setSelector("Magos");
                        }}
                        className="bg-white text-gray-900 block px-4 py-2 text-sm hover:cursor-pointer"
                      >
                        Magos
                      </li>
                      <li
                        onClick={() => {
                          handleDropDown("Marksman");
                          setSelector("Tiradores");
                        }}
                        className="bg-white text-gray-900 block px-4 py-2 text-sm hover:cursor-pointer"
                      >
                        Tiradores
                      </li>
                      <li
                        onClick={() => {
                          handleDropDown("Support");
                          setSelector("Soportes");
                        }}
                        className="bg-white text-gray-900 block px-4 py-2 text-sm hover:cursor-pointer"
                      >
                        Soportes
                      </li>
                      <li
                        onClick={() => {
                          handleDropDown("Tank");
                          setSelector("Tanques");
                        }}
                        className="bg-white text-gray-900 block px-4 py-2 text-sm hover:cursor-pointer"
                      >
                        Tanques
                      </li>
                    </ul>
                  </>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        <div className="relative w-2/6">
          <input
            type="search"
            onInput={(e) => handleSearch(e.target.value)}
            id="search-dropdown"
            className="block p-2 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:border-0 focus:outline-none "
            placeholder="Buscar"
          />
        </div>
      </div>
    </>
  );
}
