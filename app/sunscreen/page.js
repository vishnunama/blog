import BlogCard from "@/components/BlogCard";

export default function SunscreenPage() {
  const sunscreenPosts = [
    {
      slug: "how-to-layer-sunscreen",
      category: "Sunscreen",
      title:
        "How to Layer Sunscreen in Your Skincare Routine (With Moisturizer & Makeup)?",
      excerpt:
        "You've washed your face, applied your serum, and massaged in your moisturizer. Now, the big question: when to apply sunscreen?",
      image:
        "https://images.unsplash.com/photo-1556228852-80c3be03f6b4?w=500&q=80",
    },
    {
      slug: "best-sunscreens-for-sensitive-skin",
      category: "Sunscreen",
      title:
        "Best Sunscreens for Sensitive and Acne-Prone Skin (Mineral vs Chemical)",
      excerpt:
        "Struggling to find a sunscreen that doesn't break you out or cause redness? You're not alone. For people with sensitive",
      image:
        "https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=500&q=80",
    },
    {
      slug: "how-long-does-sunscreen-last",
      category: "Sunscreen",
      title:
        "How Long Does Sunscreen Last on Skin? When and How to Reapply It?",
      excerpt:
        "Ever applied sunscreen once in the morning and called it a day? You're not alone. But here's the truth: that",
      image:
        "https://images.unsplash.com/photo-1532413992378-f169ac26fff0?w=500&q=80",
    },
  ];

  return (
    <>
      {/* Category Hero */}
      <section className="bg-gradient-to-r from-orange-50 to-yellow-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Sunscreen Articles
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about sun protection and skincare.
          </p>
        </div>
      </section>

      {/* Category Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sunscreenPosts.map((post, index) => (
              <BlogCard key={index} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
