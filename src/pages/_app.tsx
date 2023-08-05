import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import AdvertisorsIcon from "@/icons/Advertisors";
import CampaignIcon from "@/icons/Campaign";
import HomeIconSVG from "@/icons/Home";
import PublishersIcon from "@/icons/Publishers";
import ReportIcon from "@/icons/Reportings";
import SettingsIcon from "@/icons/SettingIcon";
import UsageIcon from "@/icons/UsageIcon";
 
import QuestionIcon from "@/icons/QuestionsIcon";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Disclosure, Menu } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { BellIcon } from "@heroicons/react/24/outline";
import ElectricityIcon from "@/icons/light";
import Navbar from "@/components/Global/Navbar";
import Breadcrumb from "@/components/Global/Breadcrumb";

const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIconSVG, current: true },
  {
    name: "Campaigns",
    icon: CampaignIcon,
    current: false,
    children: [
      { name: "Engineering", href: "#" },
      { name: "Human Resources", href: "#" },
      { name: "Customer Success", href: "#" },
    ],
  },
  {
    name: "Publishers",
    icon: PublishersIcon,
    current: false,
    children: [
      { name: "GraphQL API", href: "#" },
      { name: "iOS App", href: "#" },
      { name: "Android App", href: "#" },
      { name: "New Customer Portal", href: "#" },
    ],
  },
  {
    name: "Advertisers",
    href: "#",
    icon: AdvertisorsIcon,
    current: false,
    children: [
      { name: "GraphQL API", href: "#" },
      { name: "iOS App", href: "#" },
      { name: "Android App", href: "#" },
      { name: "New Customer Portal", href: "#" },
    ],
  },
  {
    name: "Reporting",
    href: "#",
    icon: ReportIcon,
    current: false,
    children: [
      { name: "GraphQL API", href: "#" },
      { name: "iOS App", href: "#" },
      { name: "Android App", href: "#" },
      { name: "New Customer Portal", href: "#" },
    ],
  },
  {
    name: "Automations",
    href: "#",
    icon: ReportIcon,
    current: false,
    children: [
      { name: "GraphQL API", href: "#" },
      { name: "iOS App", href: "#" },
      { name: "Android App", href: "#" },
      { name: "New Customer Portal", href: "#" },
    ],
  },
];
 


function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function App({ Component, pageProps }: AppProps) {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const isSidebarOpen = (boolValue: boolean) => {
    setSidebarOpen(boolValue);
  };

  return (
    <div>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-black px-6 pb-4 ring-1 ring-white/10">
                  <div className="flex h-16 justify-center shrink-0 items-center">
                    <img
                      className="h-10 w-auto"
                      src="/fraudomatic-logo.png"
                      alt="Your Company"
                    />
                  </div>

                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul role="list" className="-mx-2 space-y-1">
                          {navigation.map((item) => (
                            <li key={item.name}>
                              {!item.children ? (
                                <a
                                  href={item.href}
                                  className={classNames(
                                    item.current
                                      ? "bg-primaryPurple"
                                      : "hover:bg-primaryPurple",
                                    "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-normal text-white"
                                  )}
                                >
                                  <item.icon
                                     
                                  />
                                  {item.name}
                                </a>
                              ) : (
                                <Disclosure as="div">
                                  {({ open }) => (
                                    <>
                                      <Disclosure.Button
                                        className={classNames(
                                          item.current
                                            ? "bg-primaryPurple"
                                            : "hover:bg-primaryPurple",
                                          "flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-normal text-white"
                                        )}
                                      >
                                        <item.icon
                                          
                                        />
                                        {item.name}
                                        <ChevronRightIcon
                                          className={classNames(
                                            open
                                            ? "-rotate-90 text-white"
                                            : "text-white rotate-90",
                                          "ml-auto h-5 w-5 shrink-0"
                                          )}
                                          aria-hidden="true"
                                        />
                                      </Disclosure.Button>
                                      <Disclosure.Panel
                                        as="ul"
                                        className="mt-1 px-2"
                                      >
                                        {item.children.map((subItem) => (
                                          <li key={subItem.name}>
                                            {/* 44px */}
                                            <Disclosure.Button
                                              as="a"
                                              href={subItem.href}
                                              className={classNames(
                                                subItem.current
                                                  ? "bg-gray-50"
                                                  : "hover:bg-gray-50",
                                                "block rounded-md py-2 pr-2 pl-9 text-sm leading-6 text-gray-700"
                                              )}
                                            >
                                              {subItem.name}
                                            </Disclosure.Button>
                                          </li>
                                        ))}
                                      </Disclosure.Panel>
                                    </>
                                  )}
                                </Disclosure>
                              )}
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li className="-mx-2 mt-auto">
                        <h1 className="text-gray-300 PL-2 text-sm my-2">
                          PREFERENCES
                        </h1>
                        <a
                          href="#"
                          className="hover:bg-primaryPurple group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-normal text-white"
                        >
                          <SettingsIcon /> Settings
                        </a>

                        <a
                          href="#"
                          className="hover:bg-primaryPurple group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-normal text-white"
                        >
                          <UsageIcon /> Usage
                        </a>

                        <a
                          href="#"
                          className="hover:bg-primaryPurple group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-normal text-white"
                        >
                          <QuestionIcon /> Help Center
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-80 lg:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex grow flex-col py-8 gap-y-5 overflow-y-auto bg-black px-6 pb-4">
          <div className="flex h-16 justify-center shrink-0 items-center">
            <img
              className="h-10 w-auto"
              src="/fraudomatic-logo.png"
              alt="Your Company"
            />
          </div>

          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <h1 className="text-gray-300 text-sm my-2">MAIN MENU</h1>
                <ul role="list" className="-mx-2 space-y-2">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      {!item.children ? (
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-primaryPurple"
                              : "hover:bg-primaryPurple",
                            "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-normal text-white"
                          )}
                        >
                          <item.icon
                            className="h-6 w-6 shrink-0 text-white"
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      ) : (
                        <Disclosure as="div">
                          {({ open }) => (
                            <>
                              <Disclosure.Button
                                className={classNames(
                                  item.current
                                    ? "bg-primaryPurple"
                                    : "hover:bg-primaryPurple",
                                  "flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-normal text-white"
                                )}
                              >
                                <item.icon
                                  className="h-6 w-6 shrink-0 text-white"
                                  aria-hidden="true"
                                />
                                {item.name}
                                <ChevronRightIcon
                                  className={classNames(
                                    open
                                      ? "-rotate-90 text-white"
                                      : "text-white rotate-90",
                                    "ml-auto h-5 w-5 shrink-0"
                                  )}
                                  aria-hidden="true"
                                />
                              </Disclosure.Button>
                              <Disclosure.Panel as="ul" className="mt-1 px-2">
                                {item.children.map((subItem) => (
                                  <li key={subItem.name}>
                                    {/* 44px */}
                                    <Disclosure.Button
                                      as="a"
                                      href={subItem.href}
                                      className={classNames(
                                        subItem.current
                                          ? "bg-primaryPurple"
                                          : "hover:bg-primaryPurple",
                                        "block rounded-md py-2 pr-2 pl-9 text-sm leading-6 text-white"
                                      )}
                                    >
                                      {subItem.name}
                                    </Disclosure.Button>
                                  </li>
                                ))}
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
              <li className="-mx-2 mt-auto">
                <h1 className="text-gray-300 PL-2 text-sm my-2">PREFERENCES</h1>
                <a
                  href="#"
                  className="hover:bg-primaryPurple group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-normal text-white"
                >
                  <SettingsIcon /> Settings
                </a>

                <a
                  href="#"
                  className="hover:bg-primaryPurple group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-normal text-white"
                >
                  <UsageIcon /> Usage
                </a>

                <a
                  href="#"
                  className="hover:bg-primaryPurple group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-normal text-white"
                >
                  <QuestionIcon /> Help Center
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="lg:pl-80">
        <Navbar isSidebarOpen={isSidebarOpen} />

        <main className=" min-h-screen  bg-[#F0F0F0]">
          <div className="px-4 py-4 sm:px-6 lg:px-8">
            <Breadcrumb />
            <Component {...pageProps} />
          </div>
        </main>
      </div>
    </div>
  );
}
