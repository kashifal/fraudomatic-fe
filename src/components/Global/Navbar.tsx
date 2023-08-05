import React, { Fragment, useState } from 'react'
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { BellIcon } from "@heroicons/react/24/outline";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ElectricityIcon from "@/icons/light";
import { Disclosure, Menu } from "@headlessui/react";
import { Dialog, Transition } from "@headlessui/react";


function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}



const Navbar = (props:any) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);


   

  const userNavigation = [
    { name: "Your profile", href: "#" },
    { name: "Sign out", href: "#" },
  ];


  return (
    <Fragment>
       <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
            onClick={() => props.isSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>

          <div className="flex flex-1 justify-end md:justify-between items-center gap-x-6 self-stretch lg:gap-x-6">
            <h1 className='text-2xl hidden font-normal md:block text-[#1D1D42]'>Welcome Back Kashif</h1>
            <div className="flex items-center gap-x-6">
            <form
              className="relative max-w-sm px-2 flex h-7 w-full sm:w-56 overflow-hidden ring-1 ring-gray-300 rounded-full"
              action="#"
              method="GET"
            >
              <label htmlFor="search-field" className="sr-only">
                Search
              </label>
              <MagnifyingGlassIcon
                className="pointer-events-none absolute inset-y-0 left-2 h-full w-5 text-gray-400"
                aria-hidden="true"
              />
              <input
                id="search-field"
                className="block py-2 w-full border-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 focus:outline-0 sm:text-sm"
                placeholder="Search..."
                type="search"
                name="search"
              />
            </form>
            <div className="hidden sm:flex items-center gap-x-8 lg:gap-x-8">
              <button
                type="button"
                className="-m-2.5 bg-primaryPurple rounded-lg p-1.5 text-white hover:text-gray-500"
              >
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="-m-2.5 bg-primaryPurple rounded-lg p-1.5 text-white hover:text-gray-500"
              >
                <span className="sr-only">View notifications</span>
                <ElectricityIcon />
              </button>

              {/* Profile dropdown */}
              <Menu as="div" className="relative">
                <Menu.Button className="-m-1.5 flex items-center p-1.5">
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full bg-gray-50"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                    {userNavigation.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <a
                            href={item.href}
                            className={classNames(
                              active ? "bg-gray-50" : "",
                              "block px-3 py-1 text-sm leading-6 text-gray-900"
                            )}
                          >
                            {item.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
            </div>
          </div>
        </div>
    </Fragment>
  )
}

export default Navbar