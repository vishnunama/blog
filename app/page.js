import BlogCard from "@/components/BlogCard";

export default function Home() {
  const blogPosts = [
    {
      slug: "how-to-layer-sunscreen",
      category: "Sunscreen",
      title:
        "How to Layer Sunscreen in Your Skincare Routine (With Moisturizer & Makeup)?",
      excerpt:
        "You've washed your face, applied your serum, and massaged in your moisturizer. Now, the big question: when to apply sunscreen?",
      image:
        "https://mamaearth.in/blog/wp-content/uploads/2025/11/sunscreen_layering_1200x628.webp",
    },
    {
      slug: "best-sunscreens-for-sensitive-skin",
      category: "Sunscreen",
      title:
        "Best Sunscreens for Sensitive and Acne-Prone Skin (Mineral vs Chemical)",
      excerpt:
        "Struggling to find a sunscreen that doesn't break you out or cause redness? You're not alone. For people with sensitive",
      image:
        "https://mamaearth.in/blog/wp-content/uploads/2025/11/Best_Sunscreens_for_Sensitive.webp",
    },
    {
      slug: "how-long-does-sunscreen-last",
      category: "Sunscreen",
      title:
        "How Long Does Sunscreen Last on Skin? When and How to Reapply It?",
      excerpt:
        "Ever applied sunscreen once in the morning and called it a day? You're not alone. But here's the truth: that",
      image:
        "https://mamaearth.in/blog/wp-content/uploads/2025/11/sunscreen_reapply_1200x628.webp",
    },
    {
      slug: "reapply-sunscreen-over-makeup",
      category: "Sunscreen",
      title: "How to Reapply Sunscreen Over Makeup Without Messing It Up?",
      excerpt:
        "If your makeup is good but the sun protection is not, it indicates an issue. You would need to note",
      image:
        "https://mamaearth.in/blog/wp-content/uploads/2025/11/reapply_sunscreen.webp",
    },
    {
      slug: "sunscreen-ingredients-explained",
      category: "Sunscreen",
      title:
        "Sunscreen Ingredients Explained: What's Inside Your Bottle and Why It Matters?",
      excerpt:
        "Ever looked at your sunscreen bottle and felt totally confused by the ingredients list? We often wonder why some products",
      image:
        "https://mamaearth.in/blog/wp-content/uploads/2025/11/sunscreen_ingredients.webp",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-50 to-blue-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Welcome to Our Blog
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover expert tips, natural beauty secrets, and wellness advice
            for your skin and hair care journey.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard key={index} post={post} />
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-700 transition">
              Load More Articles
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
