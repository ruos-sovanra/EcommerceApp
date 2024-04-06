'use client'
import React, { createContext, useContext, useState } from "react";
import {BiCategory, BiChevronLeft, BiChevronRight, BiHomeCircle} from "react-icons/bi";
import {MoreVertical} from "react-feather";
import Link from "next/link";

type SidebarContextType = {
    expanded: boolean;
    setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
};


const SidebarContext = createContext<SidebarContextType | undefined>(undefined);
const SideBarPage = () => {
    const [expanded, setExpanded] = useState(false);
    const contextValue = { expanded, setExpanded };
    const [active, setActive] = useState(true);
    return (
        <nav className="h-full flex flex-col bg-white border-r shadow-sm">
            <div className="p-4 pb-2 flex justify-between items-center">
                <img
                    src="https://img.logoipsum.com/243.svg"
                    className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"}`}
                    alt=""
                />
                <button
                    onClick={() => setExpanded(curr => !curr)}
                    className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
                >
                    {expanded ?<BiChevronLeft/>  : <BiChevronRight/>}
                </button>
            </div>
            <SidebarContext.Provider value={contextValue}>
                <ul className="flex-1 px-3">
                    <li
                        onClick={() => setActive(true)}
                        className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
                            active ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-indigo-50 text-gray-600"
                        }`}
                    >
                        <BiHomeCircle className="mr-2"/> {/* This is your icon */}
                        <span
                            className={`text-lg text-gray-700 ${!expanded && "scale-0"}`}><Link
                            href="/dashboard">DashBoard</Link></span> {/* Added text-lg and text-gray-700 classes for styling */}
                        {!expanded && (
                            <div
                                className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
                            >
                            </div>
                        )}
                    </li>
                    <li
                        onClick={() => setActive(true)}
                        className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
                            active ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-indigo-50 text-gray-600"
                        }`}
                    >
                        <BiCategory className="mr-2"/> {/* This is your icon */}
                        <span
                            className={`text-lg text-gray-700 ${!expanded && "scale-0"}`}><Link
                            href="/create">Create</Link></span> {/* Added text-lg and text-gray-700 classes for styling */}
                        {!expanded && (
                            <div
                                className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
                            >
                            </div>
                        )}
                    </li>
                    <li
                        onClick={() => setActive(true)}
                        className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
                            active ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-indigo-50 text-gray-600"
                        }`}
                    >
                        <BiCategory className="mr-2"/> {/* This is your icon */}
                        <span
                            className={`text-lg text-gray-700 ${!expanded && "scale-0"}`}><Link
                            href="/">Home Page</Link></span> {/* Added text-lg and text-gray-700 classes for styling */}
                        {!expanded && (
                            <div
                                className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
                            >
                            </div>
                        )}
                    </li>
                </ul>
            </SidebarContext.Provider>
            <div className="border-t flex p-3">
                <div
                    className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>
                    <MoreVertical size={20}/>
                </div>
            </div>
        </nav>
    );
};

export default SideBarPage;
