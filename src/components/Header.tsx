"use client";
import { useState } from "react";
import Logo from "@/Picture/Logo.png";
import Image from "next/image";
import Link from "next/link";
import { MdPersonOutline } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoClose } from "react-icons/io5"; // Close Icon

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track menu state

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="navbar max-w-7xl mx-auto px-4 py-4 bg-white flex justify-between items-center">
        {/* Logo */}
        <div className="logo ">
          <Image
            src={Logo}
            width={185}
            height={41}
            alt="Picture of the author"
            className="h-[25px] w-[100px] md:w-[150px] md:h-[40px]"
          />
        </div>

        {/* Navbar Links for Desktop */}
        <div className="navbtns hidden md:flex">
          <ul className="head flex space-x-4 md:space-x-6">
            <li>
              <Link href="/Home" className="text-gray-900">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="text-gray-900">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-gray-900">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-900">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Navbar Icons */}
        <div className="icons flex space-x-2 sm:space-x-6 md:space-x-6 hidden  md:flex">
          <MdPersonOutline size={20} className="sm:text-xl md:text-2xl text-gray-900" />
          <CiSearch size={20} className="sm:text-xl md:text-2xl text-gray-900" />
          <GoHeart size={20} className="sm:text-xl md:text-2xl text-gray-900" />
          <AiOutlineShoppingCart size={20} className="sm:text-xl md:text-2xl text-gray-900" />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-600">
            {/* Hamburger icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Sliding Menu */}
      <div
        className={`fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg z-50 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-all duration-300 ease-in-out`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu}>
            <IoClose size={30} className="text-gray-600" />
          </button>
        </div>

        {/* Mobile Menu Links */}
        <ul className="flex flex-col items-center space-y-6 p-6">
          <li>
            <Link href="/Home" className="text-gray-900">
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" className="text-gray-900">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-gray-900">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-900">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Icons */}
        <div className="flex justify-center space-x-6 py-4">
          <MdPersonOutline size={24} className="text-gray-900" />
          <CiSearch size={24} className="text-gray-900" />
          <GoHeart size={24} className="text-gray-900" />
          <AiOutlineShoppingCart size={24} className="text-gray-900" />
        </div>
      </div>
    </>
  );
}
