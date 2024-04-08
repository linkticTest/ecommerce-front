'use client';

import { signOut, useSession } from "next-auth/react"

export default function Header() {

  const { data: session } = useSession()
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900  w-full">
      <div className="flex flex-wrap items-center justify-end mx-auto p-4 w-full">
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className="px-4 py-3">
            <span className="block text-sm text-gray-900 dark:text-white">{session?.user?.name}</span>
            <span onClick={() => signOut()} className="block text-sm  text-gray-500 truncate dark:text-gray-400 underline cursor-pointer">Logout</span>
          </div>
          <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
            <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="user photo" />
          </button>
        </div>
      </div>
    </nav>
  )
}