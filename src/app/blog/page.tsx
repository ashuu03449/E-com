// import AnotherHeroSection from '@/components/AnotherHeroSection'
// import BlogPage from '@/components/BlogPage'
// import FeatureSection from '@/components/Frameonesix'
// import React from 'react'

// export default function Blog() {
//   return (

//     <>
//     <AnotherHeroSection mainhead={"Blog"} homename={"Home"} currentPage={"Blog"} />
//     <BlogPage />
//     <FeatureSection />
//     </>
//   )
// }

import AnotherHeroSection from "@/components/AnotherHeroSection";
import { Frame } from "lucide-react";
import type { NextPage } from "next";
import Image from "next/image";
import { FaUser, FaTag, FaCalendarAlt } from "react-icons/fa"; // React Icons

const BlogPage: NextPage = () => {
  const posts = [
    {
      title: "Going all-in with millennial design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/assets/bloglap.png",
      category: "Wood",
      date: "14 Oct 2022",
    },
    {
      title: "Exploring new ways of decorating",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/assets/bloglap2.png",
        category: "Handmade",
      date: "14 Oct 2022",
    },
    {
      title: "Handmade pieces that took time to make",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/assets/bloglap3.png",
        category: "Wood",
      date: "14 Oct 2022",
    },
  ];

  const recentPosts = [
    {
      title: "Going all-in with millennial design",
      date: "03 Aug 2022",
      image: "/assets/recent1.png",
    },
    {
      title: "Exploring new ways of decorating",
      date: "03 Aug 2022",
      image: "/assets/recent2.png",    },
    {
      title: "Handmade pieces that took time to make",
      date: "03 Aug 2022",
      image: "/assets/recents3.png",     },
    {
      title: "Modern home in Milan",
      date: "03 Aug 2022",
      image: "/assets/recent4.png",     },
    {
      title: "Colorful office redesign",
      date: "03 Aug 2022",
      image: "/assets/recent5.png",     },
  ];

  return (
    <div>
      {/* Hero Section */}
      <AnotherHeroSection mainhead={"Blog"} homename={"Home"} currentPage={"Blog"} />
      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row gap-8 p-6">
        {/* Main Content: Blog Posts */}
        <div className="flex flex-col w-full lg:w-3/4 gap-6">
          {/* Newsletter Section */}
          <div className="bg-indigo-100 p-6 rounded-lg shadow-md flex justify-between items-center">
            <div>
              <h2 className="text-lg font-bold">Subscribe to our Newsletter</h2>
              <p className="text-sm text-gray-600">
                Get the latest updates and insights directly to your inbox.
              </p>
            </div>
            <button className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700">
              Subscribe
            </button>
          </div>

          {/* Blog Posts Section */}
          <div className="space-y-8">
            {posts.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden p-6 flex flex-col space-y-4"
              >
                <h2 className="text-2xl font-bold text-gray-800">
                  {post.title}
                </h2>
                <p className="text-gray-600">{post.description}</p>
                <Image
                  src={post.image}
                  alt={post.title}
                  width={817}
                  height={500}
                  className="rounded-md"
                />
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <FaUser />
                    <span>Admin</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaTag />
                    <span>{post.category}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaCalendarAlt />
                    <span>{post.date}</span>
                  </div>
                </div>
                <button className="text-primary font-semibold hover:underline mt-4">
                  Read more
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar: Categories and Recent Posts */}
        <div className="flex flex-col w-full lg:w-1/4 gap-6">
          {/* Categories Section */}
          <div className="bg-gray-100 rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-bold mb-4">Categories</h2>
            <ul className="space-y-4">
              {["Crafts", "Design", "Handmade", "Interior", "Wood"].map(
                (category, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between text-base"
                  >
                    <span>{category}</span>
                    <span className="bg-gray-300 text-sm rounded-full px-3 py-1">
                      {Math.floor(Math.random() * 10) + 1}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Recent Posts Section */}
          <div className="bg-gray-100 rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-bold mb-4">Recent Posts</h2>
            <div className="space-y-4">
              {recentPosts.map((post, index) => (
                <div key={index} className="flex gap-4">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={80}
                    height={80}
                    className="rounded-md"
                  />
                  <div className="flex flex-col">
                    <h3 className="text-lg font-bold">{post.title}</h3>
                    <p className="text-sm text-gray-500">{post.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center space-x-2 md:space-x-4">
        {/* First Block (Yellow) */}
        <div className="flex justify-center">
          <div className="bg-yellow-500 text-white py-2 px-4 rounded-md text-lg font-semibold cursor-pointer hover:bg-yellow-600 transition">
            1
          </div>
        </div>

        {/* Second Block (Light Yellow) */}
        <div className="flex justify-center">
          <div className="bg-yellow-300 text-white py-2 px-4 rounded-md text-lg font-semibold cursor-pointer hover:bg-yellow-400 transition">
            2
          </div>
        </div>

        {/* Third Block (Light Yellow) */}
        <div className="flex justify-center">
          <div className="bg-yellow-300 text-white py-2 px-4 rounded-md text-lg font-semibold cursor-pointer hover:bg-yellow-400 transition">
            3
          </div>
        </div>

        {/* Next Button (Same Yellow for Consistency) */}
        <div className="flex justify-center">
          <div className="bg-yellow-300 text-white py-2 px-4 rounded-md text-lg font-semibold cursor-pointer hover:bg-yellow-400 transition">
            Next
          </div>
        </div>
      </div>
      <Frame />
    </div>
  );
};

export default BlogPage;