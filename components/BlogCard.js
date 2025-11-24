import Link from "next/link";
// import { Share2 } from "lucide-react";

export default function BlogCard({ post }) {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer group">
      {/* Image */}
      <div className="relative overflow-hidden h-56">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <Link href={`/${post.category.toLowerCase()}`}>
          <span className="absolute top-4 left-4 bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-teal-700 transition">
            {post.category}
          </span>
        </Link>
      </div>

      {/* Content */}
      <div className="p-6">
        <Link href={`/blog/${post.slug}`}>
          <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-teal-600 transition line-clamp-2">
            {post.title}
          </h3>
        </Link>
        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

        {/* Share Button */}
        <div className="flex items-center justify-between">
          <Link href={`/blog/${post.slug}`}>
            <button className="text-teal-600 font-semibold hover:text-teal-700 transition">
              Read More →
            </button>
          </Link>
          <button className="flex items-center space-x-1 text-gray-500 hover:text-teal-600 transition">
            {/* <Share2 className="w-4 h-4" /> */}
            <span className="text-sm">Share</span>
          </button>
        </div>
      </div>
    </article>
  );
}
