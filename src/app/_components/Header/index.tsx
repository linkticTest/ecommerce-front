'use client';

import { signOut } from "next-auth/react"
import Cart from "../Icons/Cart";

export default function Header() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900  w-full">
      <div className="flex flex-wrap items-center justify-end mx-auto p-4 w-full">
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className="px-4 py-3">
            <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
            <span onClick={() => signOut()} className="block text-sm  text-gray-500 truncate dark:text-gray-400 underline cursor-pointer">Logout</span>
          </div>
          <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
            <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="user photo" />
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li className="cursor-pointer">
              <Cart />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}