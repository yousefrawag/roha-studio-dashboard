'use client'
import React, { useState } from 'react'
import user from "@/images/user.jpeg"
import Image from 'next/image'
import { CiUser } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <div className="relative inline-block">
                <button
                    type="button"
                    className="px-4 py-2 text-white focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm inline-flex items-center"
                    onClick={toggleDropdown}
                >
                    <div className='flex items-center gap-2'>
                        <div className='capitalize text-sm'>
                            <p className='text-[12px] dark:text-textDark text-textLight font-bold'>mohamed kamal</p>
                            <span className='text-[12px] text-gray-400'>admin</span>
                        </div>
                        <div className='w-[50px] h-[50px] overflow-hidden rounded-full'>
                            <Image src={user} width="100%" height="100%" className='rounded-full object-cover' alt="user" />
                        </div>
                    </div>
                        <div>
                       
                        </div>
                </button>

                {isOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 w-44 rounded-t-none rounded-md shadow-lg bg-gray-800 text-gray-200 ring-1 ring-black ring-opacity-5">
                        <ul role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <li>
                                <a
                                    href="#"
                                    className={dropdownLinkStyle}
                                    onClick={closeDropdown}
                                >
                                    <CiUser />

                                    my profile
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className={dropdownLinkStyle}
                                    onClick={closeDropdown}
                                >
                                    <CiSettings />

                                    account settings
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className={`${dropdownLinkStyle} border-t-2 border-gray-600`}
                                    onClick={closeDropdown}
                                >
                                    <CiLogout />

                                    log out
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

const dropdownLinkStyle = " flex items-center gap-2 block p-4 py-2 text-sm text-gray-400 hover:text-teal-500 capitalize"

export default Dropdown;