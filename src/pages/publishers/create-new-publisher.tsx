import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { CheckCircleIcon, TrashIcon } from "@heroicons/react/20/solid";

const products = [
  {
    id: 1,
    title: "Basic Tee",
    href: "#",
    price: "$32.00",
    color: "Black",
    size: "Large",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/checkout-page-02-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
  },
  // More products...
];
const deliveryMethods = [
  {
    id: 1,
    title: "Standard",
    turnaround: "4–10 business days",
    price: "$5.00",
  },
  { id: 2, title: "Express", turnaround: "2–5 business days", price: "$16.00" },
];
const paymentMethods = [
  { id: "credit-card", title: "Credit card" },
  { id: "paypal", title: "PayPal" },
  { id: "etransfer", title: "eTransfer" },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(
    deliveryMethods[0]
  );

  return (
    <div className="bg-white rounded-lg">
      <div className="mx-auto max-w-2xl px-4 pb-8 pt-8 sm:px-6 lg:max-w-7xl lg:px-8">
        <form className="lg:grid lg:grid-cols-1 lg:gap-x-12 xl:gap-x-16">
          <div>
            <div className="">
              <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Advertiser Name *
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="first-name"
                      name="first-name"
                      autoComplete="given-name"
                      className="block px-2 w-full py-2 shadow-sm ring-1 ring-gray-300 focus:transition-all transition-all focus:outline-0 rounded-md border-gray-300 focus:border-primaryPurple focus:ring-primaryPurple sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    LPoint of Contact Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="first-name"
                      name="first-name"
                      autoComplete="given-name"
                      className="block px-2 w-full py-2 shadow-sm ring-1 ring-gray-300 focus:transition-all transition-all focus:outline-0 rounded-md border-gray-300 focus:border-primaryPurple focus:ring-primaryPurple sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Address *
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="first-name"
                      name="first-name"
                      autoComplete="given-name"
                      className="block px-2 w-full py-2 shadow-sm ring-1 ring-gray-300 focus:transition-all transition-all focus:outline-0 rounded-md border-gray-300 focus:border-primaryPurple focus:ring-primaryPurple sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Account Manager 
                  </label>
                  <div className="mt-1">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="block px-2 w-full py-2 shadow-sm ring-1 ring-gray-300 focus:transition-all transition-all focus:outline-0 rounded-md border-gray-300 focus:border-primaryPurple focus:ring-primaryPurple sm:text-sm"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Country *
                  </label>
                  <div className="mt-1">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="block px-2 w-full py-2 shadow-sm ring-1 ring-gray-300 focus:transition-all transition-all focus:outline-0 rounded-md border-gray-300 focus:border-primaryPurple focus:ring-primaryPurple sm:text-sm"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Advertiser Type *
                  </label>
                  <div className="mt-1">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="block px-2 w-full py-2 shadow-sm ring-1 ring-gray-300 focus:transition-all transition-all focus:outline-0 rounded-md border-gray-300 focus:border-primaryPurple focus:ring-primaryPurple sm:text-sm"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone-number"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Phone Number
                  </label>
                  <div className="relative mt-2 rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 flex items-center">
                      <label htmlFor="country" className="sr-only">
                        Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country"
                        className="block px-2 w-full py-2 shadow-sm ring-0 ring-gray-300 focus:transition-all transition-all focus:outline-0 rounded-md border-0 focus:border-none focus:ring-none sm:text-sm"
                      >
                        <option>US</option>
                        <option>CA</option>
                        <option>EU</option>
                      </select>
                    </div>
                    <input
                      type="text"
                      name="phone-number"
                      id="phone-number"
                      className="block px-2 w-full py-2 shadow-sm ring-1 ring-gray-300 focus:transition-all transition-all focus:outline-0 rounded-md border-gray-300 focus:border-primaryPurple focus:ring-primaryPurple sm:text-sm pl-16"
                      placeholder="+1 (555) 987-6543"
                    />
                  </div>
                </div>
                <div className="mt-1">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Account Status *
                  </label>
                  <div className="mt-2">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="block px-2 w-full py-2 shadow-sm ring-1 ring-gray-300 focus:transition-all transition-all focus:outline-0 rounded-md border-gray-300 focus:border-primaryPurple focus:ring-primaryPurple sm:text-sm"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="comment"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Note *
                  </label>
                  <div className="mt-2">
                    <textarea
                      rows={4}
                      name="comment"
                      id="comment"
                      placeholder="Enter a Note..."
                      className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-0 focus:ring-inset focus:ring-primaryPurple sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex gap-6 items-center justify-end">
            <button
              type="button"
              className="rounded-md bg-primaryPurple/20 px-3 py-1.5 text-sm font-normal text-primaryPurple shadow-sm hover:bg-primaryPurple focus-visible:outline hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primaryPurple"
            >
              Cancel
            </button>
            <button
              type="button"
              className="rounded-md bg-primaryPurple px-3 py-1.5 text-sm font-normal text-white shadow-sm hover:bg-primaryPurple focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primaryPurple"
            >
              Save & Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
