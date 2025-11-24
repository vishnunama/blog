"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FiShare2, FiClock, FiEye } from "react-icons/fi";

// All blog posts data
const allBlogPosts = {
  "how-to-layer-sunscreen": {
    slug: "how-to-layer-sunscreen",
    category: "Sunscreen",
    title:
      "How to Layer Sunscreen in Your Skincare Routine (With Moisturizer & Makeup)?",
    author: "Nishant Chaudhary",
    authorImage:
      "https://secure.gravatar.com/avatar/d4f074d5c25acb207d55ef980d5ad49bfb3e460ac98336c56ac5131e028373e8?s=50&d=mm&r=g",
    date: "3 days ago",
    views: "12524",
    featuredImage:
      "https://mamaearth.in/blog/wp-content/uploads/2025/11/sunscreen_layering_1200x628.webp",
    content: `
      <p>You've washed your face, applied your serum, and massaged in your moisturizer. Now, the big question: <strong>when to apply sunscreen?</strong> Before or after moisturizer? What about makeup? Well, this blog is all about it. Sunscreen layering confuses even skincare enthusiasts. Apply it too early, and your moisturizer might dilute it. Too late, and your makeup could mess it up.</p>

      <div class="table-of-contents">
        <h3>📋 Contents</h3>
        <ul>
          <li><a href="#why-crucial">Why Sunscreen Layering Is Crucial?</a></li>
          <li><a href="#morning-routine">Morning Routine Order: What Goes First?</a></li>
          <li><a href="#before-or-after">When to Apply Sunscreen: Before or After Moisturizer?</a></li>
          <li><a href="#with-makeup">Sunscreen Layering Steps with Makeup</a></li>
          <li><a href="#best-textures">Best Sunscreen Textures for Seamless Layering</a></li>
        </ul>
      </div>

      <h2 id="why-crucial">Why Sunscreen Layering Is Crucial?</h2>
      <p>Correct sunscreen layering ensures:</p>
      <ul>
        <li>Full UV protection- no diluted SPF or missed spots</li>
        <li>Longer makeup wear- no pilling or sliding</li>
        <li>Better skincare absorption- actives from your serums and moisturizers work as intended</li>
        <li>Protection from skin issues- like pigmentation, sensitivity, and early aging</li>
      </ul>

      <h2 id="morning-routine">Morning Routine Order: What Goes First?</h2>
      <p>Skincare experts recommend following a basic order of application- from the lightest to heaviest consistency:</p>
      <ol>
        <li>Cleanser</li>
        <li>Toner or essence (if used)</li>
        <li>Serum (e.g. vitamin C, hyaluronic acid)</li>
        <li>Moisturizer</li>
        <li>Sunscreen</li>
        <li>Primer (optional)</li>
        <li>Makeup</li>
      </ol>
      <p>Your sunscreen should always be the last step in your skincare routine, right before applying any cosmetic products.</p>

      <h2 id="before-or-after">When to Apply Sunscreen: Before or After Moisturizer?</h2>
      <p>So- before or after moisturizer? The answer is: <strong>after moisturizer.</strong></p>
      <p>Moisturizer hydrates and preps the skin. Sunscreen goes on top to shield it. Applying SPF before moisturizer can reduce its effectiveness, especially if you're using a chemical sunscreen that needs direct contact with the skin.</p>

      <h2 id="with-makeup">Sunscreen Layering Steps with Makeup</h2>
      <p>Want to wear sunscreen and makeup? Here's a set of sunscreen layering steps that you can use:</p>
      <ol>
        <li>Cleanse → Remove any overnight buildup or oils.</li>
        <li>Apply serums → Lightweight formulas like niacinamide or hyaluronic acid.</li>
        <li>Apply moisturizer → Choose one suitable for your skin type.</li>
        <li>Apply sunscreen → Use two fingers' worth for the face and neck. Let it settle for 2–5 minutes.</li>
        <li>Apply primer (optional) → Helps grip makeup while keeping SPF in place.</li>
        <li>Apply makeup → Foundation, concealer, etc.</li>
      </ol>

      <div class="pro-tip">
        💡 <strong>Pro Tip:</strong> For reapplication, use a powder sunscreen for face to refresh your SPF without disrupting your makeup.
      </div>

      <h2 id="best-textures">Best Sunscreen Textures for Seamless Layering</h2>
      <p>Choosing the right SPF matters as much as the order. Here's what works best under moisturizer and makeup:</p>
      <ul>
        <li><strong>Hydrating Sunscreen for All Skin:</strong> Great for dry or sensitive skin; doubles as a moisturizer.</li>
        <li><strong>Water Based Gel Sunscreen:</strong> Lightweight, fast-absorbing; best for oily/combo skin.</li>
        <li><strong>Niacinamide Sunscreen:</strong> Ideal for acne-prone or pigmented skin; offers brightening and calming effects.</li>
        <li><strong>Matte Finish Sunscreen:</strong> Prevents excess shine under foundation.</li>
      </ul>

      <h2>Mistakes to Avoid While Layering Sunscreen</h2>
      <div class="mistakes-box">
        <p>❌ Applying sunscreen before moisturizer: Reduces SPF effectiveness</p>
        <p>❌ Using too little: Always use the 2-finger rule</p>
        <p>❌ Not letting sunscreen set before makeup: Causes product to move or pill</p>
        <p>❌ Mixing sunscreen with other products: Can dilute the SPF value</p>
      </div>

      <h2>Conclusion</h2>
      <p>So, <strong>when to apply sunscreen?</strong> Always <strong>after moisturizer</strong> and <strong>before makeup</strong>. With the right sunscreen, application method, and layering order, you can protect your skin while keeping your makeup flawless.</p>
    `,
  },

  "best-sunscreens-for-sensitive-skin": {
    slug: "best-sunscreens-for-sensitive-skin",
    category: "Sunscreen",
    title: "Best Sunscreens for  and Acne-Prone Skin (Mineral vs Chemical)",
    author: "Nishant Chaudhary",
    authorImage:
      "https://secure.gravatar.com/avatar/d4f074d5c25acb207d55ef980d5ad49bfb3e460ac98336c56ac5131e028373e8?s=50&d=mm&r=g",
    date: "3 days ago",
    views: "10842",
    featuredImage:
      "https://mamaearth.in/blog/wp-content/uploads/2025/11/Best_Sunscreens_for_Sensitive.webp",
    content: `
      <p>Struggling to find a sunscreen that doesn't break you out or cause redness? You're not alone. For people with sensitive and acne-prone skin, choosing the right sunscreen can feel like a challenge. The wrong formula can clog pores, trigger irritation, or leave a heavy, greasy residue.</p>

      <div class="table-of-contents">
        <h3>📋 Contents</h3>
        <ul>
          <li><a href="#mineral-vs-chemical">Mineral vs Chemical Sunscreen</a></li>
          <li><a href="#sensitive-skin">Best for Sensitive Skin</a></li>
          <li><a href="#acne-prone">Best for Acne-Prone Skin</a></li>
          <li><a href="#ingredients">Key Ingredients to Look For</a></li>
        </ul>
      </div>

      <h2 id="mineral-vs-chemical">Mineral vs Chemical Sunscreen: What's the Difference?</h2>
      <p>Understanding the difference between mineral and chemical sunscreens is key to choosing the right one for your skin type.</p>
      
      <h3>Mineral Sunscreen (Physical Sunscreen)</h3>
      <ul>
        <li>Contains zinc oxide or titanium dioxide</li>
        <li>Sits on top of skin and reflects UV rays</li>
        <li>Works immediately upon application</li>
        <li>Better for sensitive skin</li>
        <li>May leave a white cast</li>
      </ul>

      <h3>Chemical Sunscreen</h3>
      <ul>
        <li>Contains organic compounds like avobenzone, octinoxate</li>
        <li>Absorbs into skin and converts UV rays to heat</li>
        <li>Takes 15-20 minutes to work</li>
        <li>Lightweight and no white cast</li>
        <li>May irritate sensitive skin</li>
      </ul>

      <h2 id="sensitive-skin">Best Sunscreens for Sensitive Skin</h2>
      <p>If you have sensitive skin, mineral sunscreens are generally the safer choice. They're less likely to cause irritation and are reef-safe.</p>

      <div class="pro-tip">
        💡 <strong>Pro Tip:</strong> Look for fragrance-free, hypoallergenic formulas with zinc oxide as the main ingredient.
      </div>

      <h2 id="acne-prone">Best Sunscreens for Acne-Prone Skin</h2>
      <p>For acne-prone skin, you need a non-comedogenic formula that won't clog pores. Oil-free, gel-based sunscreens work best.</p>
      <ul>
        <li>Choose oil-free, non-comedogenic formulas</li>
        <li>Look for niacinamide to control oil</li>
        <li>Gel textures are ideal for oily skin</li>
        <li>Avoid heavy, cream-based sunscreens</li>
      </ul>

      <h2 id="ingredients">Key Ingredients to Look For</h2>
      <ul>
        <li><strong>Zinc Oxide:</strong> Gentle, broad-spectrum protection</li>
        <li><strong>Niacinamide:</strong> Controls oil and reduces inflammation</li>
        <li><strong>Hyaluronic Acid:</strong> Hydrates without clogging pores</li>
        <li><strong>Aloe Vera:</strong> Soothes and calms irritation</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Whether you choose mineral or chemical sunscreen, the key is finding a formula that works for your unique skin type. For sensitive skin, mineral is usually best. For acne-prone skin, look for oil-free, non-comedogenic options.</p>
    `,
  },

  "how-long-does-sunscreen-last": {
    slug: "how-long-does-sunscreen-last",
    category: "Sunscreen",
    title: "How Long Does Sunscreen Last on Skin? When and How to Reapply It?",
    author: "Nishant Chaudhary",
    authorImage:
      "https://secure.gravatar.com/avatar/d4f074d5c25acb207d55ef980d5ad49bfb3e460ac98336c56ac5131e028373e8?s=50&d=mm&r=g",
    date: "3 days ago",
    views: "9234",
    featuredImage:
      "https://mamaearth.in/blog/wp-content/uploads/2025/11/sunscreen_reapply_1200x628.webp",
    content: `
      <p>Ever applied sunscreen once in the morning and called it a day? You're not alone. But here's the truth: that single application isn't enough to keep your skin protected all day long.</p>

      <div class="table-of-contents">
        <h3>📋 Contents</h3>
        <ul>
          <li><a href="#how-long">How Long Does Sunscreen Last?</a></li>
          <li><a href="#when-reapply">When to Reapply Sunscreen</a></li>
          <li><a href="#how-reapply">How to Reapply Sunscreen</a></li>
          <li><a href="#myths">Common Myths About Sunscreen</a></li>
        </ul>
      </div>

      <h2 id="how-long">How Long Does Sunscreen Last on Skin?</h2>
      <p>Most dermatologists agree: sunscreen lasts about <strong>2 hours</strong> on your skin. After that, its protective abilities start to diminish significantly.</p>

      <h3>Factors That Affect Sunscreen Duration:</h3>
      <ul>
        <li><strong>Sweating:</strong> Reduces effectiveness quickly</li>
        <li><strong>Swimming:</strong> Washes off even water-resistant formulas</li>
        <li><strong>Towel drying:</strong> Physically removes sunscreen</li>
        <li><strong>UV exposure:</strong> Breaks down active ingredients</li>
        <li><strong>Touching your face:</strong> Rubs off protection</li>
      </ul>

      <h2 id="when-reapply">When to Reapply Sunscreen</h2>
      <p>Here's when you absolutely need to reapply:</p>
      <ul>
        <li>Every 2 hours during sun exposure</li>
        <li>Immediately after swimming or heavy sweating</li>
        <li>After towel drying</li>
        <li>If you've been touching your face frequently</li>
        <li>Before peak sun hours (10 AM - 4 PM)</li>
      </ul>

      <div class="pro-tip">
        💡 <strong>Pro Tip:</strong> Set a phone reminder every 2 hours to reapply sunscreen. Your skin will thank you!
      </div>

      <h2 id="how-reapply">How to Reapply Sunscreen Over Makeup</h2>
      <p>Reapplying sunscreen over makeup can be tricky, but these methods make it easy:</p>
      <ol>
        <li><strong>Powder Sunscreen:</strong> Brush over makeup for quick touch-ups</li>
        <li><strong>Sunscreen Spray:</strong> Mist lightly and pat gently</li>
        <li><strong>Sunscreen Stick:</strong> Dab on high-exposure areas</li>
        <li><strong>Cushion Compact with SPF:</strong> Press gently over makeup</li>
      </ol>

      <h2 id="myths">Common Myths About Sunscreen</h2>
      <div class="mistakes-box">
        <p>❌ "I only need sunscreen at the beach" - UV rays damage skin daily</p>
        <p>❌ "My makeup has SPF, I'm protected" - Not enough coverage</p>
        <p>❌ "Higher SPF means I don't need to reapply" - Still needs reapplication</p>
        <p>❌ "I don't need sunscreen indoors" - Windows let UV rays through</p>
      </div>

      <h2>Conclusion</h2>
      <p>Remember the golden rule: reapply sunscreen every 2 hours for continuous protection. Don't let your morning application be your only defense against harmful UV rays.</p>
    `,
  },

  "reapply-sunscreen-over-makeup": {
    slug: "reapply-sunscreen-over-makeup",
    category: "Sunscreen",
    title: "How to Reapply Sunscreen Over Makeup Without Messing It Up?",
    author: "Nishant Chaudhary",
    authorImage:
      "https://secure.gravatar.com/avatar/d4f074d5c25acb207d55ef980d5ad49bfb3e460ac98336c56ac5131e028373e8?s=50&d=mm&r=g",
    date: "4 days ago",
    views: "8756",
    featuredImage:
      "https://mamaearth.in/blog/wp-content/uploads/2025/11/reapply_sunscreen.webp",
    content: `
      <p>If your makeup is good but the sun protection is not, it indicates an issue. You would need to note that reapplying sunscreen throughout the day is crucial, but when you're wearing makeup, it can feel impossible without ruining your look.</p>

      <div class="table-of-contents">
        <h3>📋 Contents</h3>
        <ul>
          <li><a href="#why-reapply">Why You Need to Reapply Sunscreen</a></li>
          <li><a href="#methods">5 Ways to Reapply Over Makeup</a></li>
          <li><a href="#products">Best Products for Reapplication</a></li>
          <li><a href="#tips">Pro Tips for Flawless Reapplication</a></li>
        </ul>
      </div>

      <h2 id="why-reapply">Why You Need to Reapply Sunscreen</h2>
      <p>Even if your foundation or BB cream has SPF, it's not enough. Here's why:</p>
      <ul>
        <li>Most people don't apply enough makeup for adequate SPF coverage</li>
        <li>Makeup rubs off throughout the day</li>
        <li>SPF degrades after 2 hours of sun exposure</li>
        <li>You need about 1/4 teaspoon for face - that's a lot of makeup!</li>
      </ul>

      <h2 id="methods">5 Ways to Reapply Sunscreen Over Makeup</h2>
      
      <h3>1. Powder Sunscreen</h3>
      <p>The easiest and most makeup-friendly option. Use a kabuki brush to apply powder sunscreen over your makeup. It won't disturb your base and adds a matte finish.</p>

      <h3>2. Sunscreen Setting Spray</h3>
      <p>Hold the spray 6-8 inches from your face and mist evenly. Let it dry naturally without rubbing. This method is quick and refreshing.</p>

      <h3>3. Cushion Compact with SPF</h3>
      <p>Pat gently over makeup using the cushion puff. This also helps touch up your makeup while adding sun protection.</p>

      <h3>4. Sunscreen Stick</h3>
      <p>Ideal for targeted areas like nose, forehead, and cheeks. Dab gently without dragging across makeup.</p>

      <h3>5. Blotting + Reapplication Method</h3>
      <p>Use blotting papers to remove excess oil, then gently pat on liquid sunscreen with clean fingers or a sponge.</p>

      <div class="pro-tip">
        💡 <strong>Pro Tip:</strong> Keep a powder sunscreen or SPF spray in your bag for on-the-go reapplication. Set a 2-hour reminder on your phone!
      </div>

      <h2 id="products">Best Products for Reapplication</h2>
      <ul>
        <li><strong>Powder Sunscreen:</strong> Colorescience, Supergoop Invincible Setting Powder</li>
        <li><strong>SPF Spray:</strong> Sun Bum SPF 50 Spray, Coola Organic Sunscreen Spray</li>
        <li><strong>Cushion Compact:</strong> Missha M Magic Cushion, IOPE Air Cushion</li>
        <li><strong>Sunscreen Stick:</strong> Neutrogena Ultra Sheer Face & Body Stick</li>
      </ul>

      <h2 id="tips">Pro Tips for Flawless Reapplication</h2>
      <ul>
        <li>Blot oil before reapplying to prevent patchiness</li>
        <li>Use patting motions, never rubbing</li>
        <li>Reapply more frequently if you're sweating or swimming</li>
        <li>Don't skip reapplication just because of makeup</li>
        <li>Choose a formula that works with your skin type</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Reapplying sunscreen over makeup doesn't have to ruin your look. With the right products and techniques, you can keep your skin protected and your makeup flawless all day long.</p>
    `,
  },

  "sunscreen-ingredients-explained": {
    slug: "sunscreen-ingredients-explained",
    category: "Sunscreen",
    title:
      "Sunscreen Ingredients Explained: What's Inside Your Bottle and Why It Matters?",
    author: "Nishant Chaudhary",
    authorImage:
      "https://secure.gravatar.com/avatar/d4f074d5c25acb207d55ef980d5ad49bfb3e460ac98336c56ac5131e028373e8?s=50&d=mm&r=g",
    date: "5 days ago",
    views: "7892",
    featuredImage:
      "https://mamaearth.in/blog/wp-content/uploads/2025/11/sunscreen_ingredients.webp",
    content: `
      <p>Ever looked at your sunscreen bottle and felt totally confused by the ingredients list? We often wonder why some products work better than others, why some feel greasy while others absorb quickly, or why certain sunscreens cause breakouts.</p>

      <div class="table-of-contents">
        <h3>📋 Contents</h3>
        <ul>
          <li><a href="#active-ingredients">Active Ingredients in Sunscreen</a></li>
          <li><a href="#mineral-ingredients">Mineral Sunscreen Ingredients</a></li>
          <li><a href="#chemical-ingredients">Chemical Sunscreen Ingredients</a></li>
          <li><a href="#additives">Important Additives and Why They Matter</a></li>
          <li><a href="#avoid">Ingredients to Avoid</a></li>
        </ul>
      </div>

      <h2 id="active-ingredients">Active Ingredients in Sunscreen</h2>
      <p>Active ingredients are what actually protect your skin from UV rays. All other ingredients are there to support, stabilize, or enhance the formula.</p>

      <h2 id="mineral-ingredients">Mineral (Physical) Sunscreen Ingredients</h2>
      
      <h3>Zinc Oxide</h3>
      <ul>
        <li>Provides broad-spectrum UVA and UVB protection</li>
        <li>Sits on top of skin and reflects UV rays</li>
        <li>Gentle and safe for sensitive skin</li>
        <li>Non-irritating and reef-safe</li>
        <li>Can leave a white cast on darker skin tones</li>
      </ul>

      <h3>Titanium Dioxide</h3>
      <ul>
        <li>Protects primarily against UVB rays</li>
        <li>Less effective against UVA than zinc oxide</li>
        <li>Also sits on skin surface</li>
        <li>Often combined with zinc oxide for full protection</li>
      </ul>

      <h2 id="chemical-ingredients">Chemical Sunscreen Ingredients</h2>
      
      <h3>Avobenzone</h3>
      <ul>
        <li>One of the few chemical filters that protects against UVA rays</li>
        <li>Breaks down in sunlight (photounstable)</li>
        <li>Often paired with stabilizers</li>
      </ul>

      <h3>Octinoxate (Octyl Methoxycinnamate)</h3>
      <ul>
        <li>Protects against UVB rays</li>
        <li>Lightweight and absorbs quickly</li>
        <li>Can cause hormonal disruption (controversial)</li>
        <li>Banned in Hawaii and other regions due to coral reef damage</li>
      </ul>

      <h3>Oxybenzone</h3>
      <ul>
        <li>Broad-spectrum protection</li>
        <li>Can cause allergic reactions</li>
        <li>Environmental concerns (coral bleaching)</li>
        <li>Many brands are phasing this out</li>
      </ul>

      <div class="pro-tip">
        💡 <strong>Pro Tip:</strong> If you have sensitive skin, stick with mineral sunscreens containing zinc oxide and titanium dioxide.
      </div>

      <h2 id="additives">Important Additives and Why They Matter</h2>
      
      <h3>Niacinamide (Vitamin B3)</h3>
      <p>Brightens skin, reduces inflammation, and controls oil production. Perfect for acne-prone skin.</p>

      <h3>Hyaluronic Acid</h3>
      <p>Hydrates skin without feeling heavy. Helps sunscreen glide on smoothly.</p>

      <h3>Aloe Vera</h3>
      <p>Soothes and calms irritation. Great for post-sun exposure or sensitive skin.</p>

      <h3>Vitamin E (Tocopherol)</h3>
      <p>Antioxidant that helps stabilize other ingredients and provides additional skin protection.</p>

      <h2 id="avoid">Ingredients to Avoid (If You're Concerned)</h2>
      <div class="mistakes-box">
        <p>⚠️ <strong>Oxybenzone:</strong> May cause hormone disruption</p>
        <p>⚠️ <strong>Octinoxate:</strong> Harmful to coral reefs</p>
        <p>⚠️ <strong>Retinyl Palmitate:</strong> May cause skin damage when exposed to sunlight</p>
        <p>⚠️ <strong>Fragrances:</strong> Can irritate sensitive skin</p>
        <p>⚠️ <strong>Alcohol (high concentration):</strong> Can dry out skin</p>
      </div>

      <h2>How to Read a Sunscreen Label</h2>
      <ol>
        <li>Check the SPF number (minimum SPF 30 recommended)</li>
        <li>Look for "broad-spectrum" protection</li>
        <li>Identify active ingredients (mineral vs chemical)</li>
        <li>Check for skin-beneficial additives</li>
        <li>Verify water resistance if needed</li>
      </ol>

      <h2>Conclusion</h2>
      <p>Understanding sunscreen ingredients helps you make informed choices for your skin type and concerns. Whether you choose mineral or chemical, look for broad-spectrum protection with skin-loving additives and avoid potentially harmful ingredients.</p>
    `,
  },
};

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug;

  // Get current blog post
  const blogPost = allBlogPosts[slug];

  // If blog not found
  if (!blogPost) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Blog Not Found
          </h1>
          <Link href="/">
            <button className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700">
              Go Back Home
            </button>
          </Link>
        </div>
      </div>
    );
  }

  // Get related posts (exclude current post)
  const relatedPosts = Object.values(allBlogPosts)
    .filter((post) => post.slug !== slug)
    .slice(0, 3);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <article className="lg:col-span-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Category Badge */}
              <div className="px-6 pt-6">
                <Link href={`/${blogPost.category.toLowerCase()}`}>
                  <span className="inline-block bg-teal-600 text-white px-4 py-1 rounded-full text-sm font-medium hover:bg-teal-700 transition">
                    {blogPost.category}
                  </span>
                </Link>
              </div>

              {/* Title */}
              <div className="px-6 pt-4">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                  {blogPost.title}
                </h1>
              </div>

              {/* Featured Image */}
              <div className="px-6 pt-6">
                <img
                  src={blogPost.featuredImage}
                  alt={blogPost.title}
                  className="w-full h-auto rounded-lg"
                />
              </div>

              {/* Meta Info */}
              <div className="px-6 py-4 flex flex-wrap items-center gap-4 border-b">
                <div className="flex items-center space-x-2">
                  <img
                    src={blogPost.authorImage}
                    alt={blogPost.author}
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="font-medium text-gray-700">
                    {blogPost.author}
                  </span>
                </div>
                <div className="flex items-center space-x-1 text-gray-600">
                  <FiClock className="w-4 h-4" />
                  <span className="text-sm">{blogPost.date}</span>
                </div>
                <div className="flex items-center space-x-1 text-gray-600">
                  <FiEye className="w-4 h-4" />
                  <span className="text-sm">{blogPost.views} views</span>
                </div>
              </div>

              {/* Social Share */}
              <div className="px-6 py-4 flex items-center justify-between border-b bg-gray-50">
                <span className="text-gray-600 font-medium">
                  Share this article
                </span>
                <div className="flex space-x-3">
                  <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition">
                    <FaFacebookF className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                    <FaLinkedinIn className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition">
                    <FaWhatsapp className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="px-6 py-8">
                <div
                  className="prose prose-lg max-w-none blog-content"
                  dangerouslySetInnerHTML={{ __html: blogPost.content }}
                />
              </div>

              {/* Comment Section */}
              <div className="px-6 py-8 border-t bg-gray-50">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Leave a Response
                </h3>
                <form className="space-y-4">
                  <div>
                    <textarea
                      placeholder="Write your comment here..."
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    ></textarea>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Name..."
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                    <input
                      type="email"
                      placeholder="Email..."
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="save-info" className="w-4 h-4" />
                    <label
                      htmlFor="save-info"
                      className="text-sm text-gray-600"
                    >
                      Save my name, email, and website in this browser for the
                      next time I comment.
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition"
                  >
                    Leave a comment
                  </button>
                </form>
              </div>
            </div>
          </article>

          {/* Sidebar - Sticky */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24">
              {/* Related Posts */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  You Might Also Like
                </h3>
                <div className="space-y-4">
                  {relatedPosts.map((post, index) => (
                    <Link key={index} href={`/blog/${post.slug}`}>
                      <div className="flex space-x-3 mt-2 mb-2 group cursor-pointer">
                        <img
                          src={post.featuredImage}
                          alt={post.title}
                          className="w-24 h-20 object-cover rounded-lg group-hover:opacity-80 transition"
                        />
                        <div className="flex-1">
                          <h4 className="text-sm font-semibold text-gray-800 line-clamp-2 group-hover:text-teal-600 transition">
                            {post.title}
                          </h4>
                          <span className="text-xs text-gray-500 mt-1 block">
                            {post.date}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Popular Tags */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Popular Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Sunscreen",
                    "Skincare",
                    "Hair Care",
                    "Face Care",
                    "Natural Beauty",
                    "Makeup",
                  ].map((tag, index) => (
                    <Link
                      key={index}
                      href={`/tag/${tag.toLowerCase().replace(" ", "-")}`}
                    >
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-teal-100 hover:text-teal-700 transition cursor-pointer">
                        {tag}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
