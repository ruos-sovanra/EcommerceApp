"use client";


import {FaInstagram, FaLinkedin, FaTwitter, FaYoutube} from "react-icons/fa";
import Link from "next/link";

const FooterComponent = () =>{
    return (
        <footer className="mt-20">
            <div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
                <div className="p-5 ">
                    <ul>
                        <p className="text-gray-800 font-bold text-3xl pb-6">
                            CSTAD<span className="text-blue-600">STORE</span>
                        </p>
                        <div className="flex gap-6 pb-5">
                            <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
                            <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
                            <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
                            <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
                        </div>
                    </ul>
                </div>
                <div className="p-5">
                    <ul>
                        <p className="text-gray-800 font-bold text-2xl pb-4">Product</p>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            Stocks
                        </li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            Futures & Options
                        </li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            Mutual Funds
                        </li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            Fixed deposits
                        </li>
                    </ul>
                </div>
                <div className="p-5">
                    <ul>
                        <p className="text-gray-800 font-bold text-2xl pb-4">Company</p>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            <Link href={"/about"}>About Us</Link>
                        </li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            <Link href="/policy">Policy</Link>
                        </li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            <Link href={"/product"}>Product</Link>
                        </li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            Careers
                        </li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            Press & Media
                        </li>
                    </ul>
                </div>
                <div className="p-5">
                    <ul>
                        <p className="text-gray-800 font-bold text-2xl pb-4">Support</p>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            Contact
                        </li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            Support Portals
                        </li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            List Of Charges
                        </li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            Downloads & Resources
                        </li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            Videos
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
                <h1 className=" text-gray-800 font-semibold">
                    © 2024-2025 All rights reserved

                </h1>
            </div>
        </footer>
    );
}

export default FooterComponent;