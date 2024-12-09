// components/BlogCard.tsx
import Link from "next/link";
import Image from "next/image";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
  link: string;
}

const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
      <Image
        src={post.image}
        alt={post.title}
        width={500}
        height={300}
        className="w-full h-64 object-cover"
      />
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
        <p className="text-sm text-gray-500 mt-2">{post.date}</p>
        <p className="text-gray-700 mt-3">{post.description}</p>
        <Link href={post.link}>
          <span className="mt-4 inline-block text-blue-500 hover:underline">
            Read More
          </span>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
