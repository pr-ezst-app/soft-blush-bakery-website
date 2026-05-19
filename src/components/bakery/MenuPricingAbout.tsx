import { useState } from "react";

const HERO_IMG = "https://cdn.ezst.app/projects/ad30f719-bb2a-4901-88c3-ce52fd85a8df/files/5b06adf9-5800-4b68-a486-330dad213f44.jpg";
const CUPCAKE_IMG = "https://cdn.ezst.app/projects/ad30f719-bb2a-4901-88c3-ce52fd85a8df/files/a0f93e25-4605-4363-a83a-ab6ae9309baa.jpg";
const COOKIE_IMG = "https://cdn.ezst.app/projects/ad30f719-bb2a-4901-88c3-ce52fd85a8df/files/e50c5853-d406-4f39-80ca-70f5e3271ae8.jpg";

const menuItems = [
  {
    category: "Cake Parfaits",
    emoji: "🍓",
    items: [
      { name: "Strawberry Dream Parfait", description: "Layers of vanilla sponge, fresh strawberry compote, whipped cream, and pink sprinkles in a beautiful glass jar.", price: "$11", tag: "Best Seller" },
      { name: "Chocolate Rose Parfait", description: "Rich chocolate mousse layered with rose-infused cream and delicate edible petals.", price: "$12", tag: null },
      { name: "Lemon Bliss Parfait", description: "Zesty lemon curd, fluffy chiffon cake, and vanilla cream — bright, tangy, and utterly dreamy.", price: "$11", tag: null },
    ],
    image: HERO_IMG,
  },
  {
    category: "Cupcakes",
    emoji: "🧁",
    items: [
      { name: "Classic Blush Cupcake", description: "Vanilla sponge topped with a swirl of our signature pink buttercream and pearl sprinkles.", price: "$4", tag: "Fan Favourite" },
      { name: "Strawberry Shortcake Cupcake", description: "Soft strawberry cake filled with fresh jam and crowned with fluffy cream cheese frosting.", price: "$4.50", tag: null },
      { name: "Red Velvet Bliss", description: "Classic red velvet with velvety cream cheese frosting and a dusting of rose petal sugar.", price: "$5", tag: null },
    ],
    image: CUPCAKE_IMG,
  },
  {
    category: "Cookies",
    emoji: "🍪",
    items: [
      { name: "Sugar Heart Cookies", description: "Buttery soft sugar cookies hand-decorated with royal icing in pinks, whites, and gold.", price: "$3", tag: "Custom Available" },
      { name: "Pink Velvet Crinkle", description: "Chewy, fudgy crinkle cookies dusted with powdered sugar for that perfect snap.", price: "$2.50", tag: null },
      { name: "Matcha Rose Sablé", description: "Delicate French-style butter cookies with a hint of matcha and dried rose petals.", price: "$3.50", tag: null },
    ],
    image: COOKIE_IMG,
  },
];

interface MenuPricingAboutProps {
  scrollTo: (id: string) => void;
}

export default function MenuPricingAbout({ scrollTo }: MenuPricingAboutProps) {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <>
      {/* MENU */}
      <section id="menu" className="py-24 px-5 max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="font-script text-5xl" style={{ color: "var(--blush-deep)" }}>Our Menu</div>
          <h2 className="font-serif text-3xl md:text-4xl" style={{ color: "var(--text-main)" }}>
            Treats Made to Delight
          </h2>
          <div className="petal-divider">
            <span style={{ color: "var(--blush)" }}>🌸</span>
          </div>
          <p className="max-w-md mx-auto text-base" style={{ color: "var(--text-soft)" }}>
            Every item is handcrafted in small batches using only the finest ingredients.
          </p>
        </div>

        <div className="flex gap-3 justify-center flex-wrap mb-12">
          {menuItems.map((cat, i) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(i)}
              className="px-6 py-2.5 rounded-full text-sm font-medium transition-all"
              style={{
                backgroundColor: activeCategory === i ? "var(--blush-deep)" : "var(--blush-light)",
                color: activeCategory === i ? "#fff" : "var(--rose)",
                transform: activeCategory === i ? "scale(1.05)" : "scale(1)",
              }}
            >
              {cat.emoji} {cat.category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-4">
            {menuItems[activeCategory].items.map((item) => (
              <div
                key={item.name}
                className="p-6 rounded-3xl border transition-all hover:shadow-md"
                style={{ backgroundColor: "#fff", borderColor: "var(--blush-light)" }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="font-serif text-lg" style={{ color: "var(--text-main)" }}>{item.name}</h3>
                      {item.tag && (
                        <span
                          className="text-xs px-2 py-0.5 rounded-full font-medium"
                          style={{ backgroundColor: "var(--blush-light)", color: "var(--rose)" }}
                        >
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-soft)" }}>{item.description}</p>
                  </div>
                  <div className="font-serif text-xl font-semibold shrink-0" style={{ color: "var(--blush-deep)" }}>
                    {item.price}
                  </div>
                </div>
              </div>
            ))}
            <button
              onClick={() => scrollTo("order")}
              className="w-full py-4 rounded-full font-medium transition-all hover:shadow-lg mt-4"
              style={{ backgroundColor: "var(--blush)", color: "#fff" }}
            >
              Order This Category →
            </button>
          </div>

          <div className="relative rounded-3xl overflow-hidden aspect-square">
            <img
              src={menuItems[activeCategory].image}
              alt={menuItems[activeCategory].category}
              className="w-full h-full object-cover transition-all duration-500"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(201,107,136,0.3) 0%, transparent 60%)" }}
            />
            <div className="absolute bottom-6 left-6">
              <div className="font-script text-4xl text-white drop-shadow-lg">
                {menuItems[activeCategory].category}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 px-5" style={{ backgroundColor: "var(--blush-light)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="font-script text-5xl" style={{ color: "var(--blush-deep)" }}>Pricing</div>
            <h2 className="font-serif text-3xl md:text-4xl" style={{ color: "var(--text-main)" }}>
              Sweet Treats, Sweet Prices
            </h2>
            <div className="petal-divider"><span style={{ color: "var(--blush)" }}>🌸</span></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Cake Parfaits",
                emoji: "🍓",
                options: [
                  { label: "Individual (1 jar)", price: "$11–$12" },
                  { label: "Set of 4", price: "$43" },
                  { label: "Set of 6", price: "$63" },
                  { label: "Party Pack (12)", price: "$119" },
                ],
                highlight: false,
                note: "Custom flavours available",
              },
              {
                name: "Cupcakes",
                emoji: "🧁",
                options: [
                  { label: "Single cupcake", price: "$4–$5" },
                  { label: "Box of 6", price: "$27" },
                  { label: "Box of 12", price: "$53" },
                  { label: "Box of 24", price: "$99" },
                ],
                highlight: true,
                note: "Most popular option!",
              },
              {
                name: "Cookies",
                emoji: "🍪",
                options: [
                  { label: "Single cookie", price: "$2.50–$3.50" },
                  { label: "Bag of 6", price: "$21" },
                  { label: "Bag of 12", price: "$39" },
                  { label: "Custom decorated set", price: "from $49" },
                ],
                highlight: false,
                note: "Custom icing designs available",
              },
            ].map((tier) => (
              <div
                key={tier.name}
                className="rounded-3xl p-8 transition-all hover:shadow-xl"
                style={{
                  backgroundColor: tier.highlight ? "var(--blush-deep)" : "#fff",
                  color: tier.highlight ? "#fff" : "var(--text-main)",
                  transform: tier.highlight ? "scale(1.03)" : "scale(1)",
                  border: tier.highlight ? "none" : "1px solid var(--blush-light)",
                }}
              >
                <div className="text-4xl mb-3">{tier.emoji}</div>
                <h3 className="font-serif text-2xl mb-2">{tier.name}</h3>
                <p
                  className="text-xs mb-6 italic"
                  style={{ color: tier.highlight ? "rgba(255,255,255,0.8)" : "var(--text-soft)" }}
                >
                  {tier.note}
                </p>
                <div className="space-y-3">
                  {tier.options.map((opt) => (
                    <div
                      key={opt.label}
                      className="flex justify-between items-center py-2 border-b last:border-0"
                      style={{ borderColor: tier.highlight ? "rgba(255,255,255,0.2)" : "var(--blush-light)" }}
                    >
                      <span className="text-sm" style={{ color: tier.highlight ? "rgba(255,255,255,0.9)" : "var(--text-soft)" }}>
                        {opt.label}
                      </span>
                      <span
                        className="font-serif font-semibold text-base"
                        style={{ color: tier.highlight ? "#fff" : "var(--blush-deep)" }}
                      >
                        {opt.price}
                      </span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => scrollTo("order")}
                  className="mt-6 w-full py-3 rounded-full text-sm font-medium transition-all hover:opacity-90"
                  style={{
                    backgroundColor: tier.highlight ? "#fff" : "var(--blush)",
                    color: tier.highlight ? "var(--blush-deep)" : "#fff",
                  }}
                >
                  Order Now
                </button>
              </div>
            ))}
          </div>

          <p className="text-center mt-8 text-sm" style={{ color: "var(--text-soft)" }}>
            💌 Minimum order for delivery: $30. Custom orders welcome — message us!
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-5 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div
              className="absolute -top-6 -left-6 w-full h-full rounded-3xl"
              style={{ backgroundColor: "var(--blush-light)", zIndex: 0 }}
            />
            <img
              src={CUPCAKE_IMG}
              alt="About Soft Blush Bakery"
              className="relative rounded-3xl w-full aspect-square object-cover"
              style={{ zIndex: 1, boxShadow: "0 20px 60px rgba(244,167,185,0.35)" }}
            />
            <div
              className="absolute -bottom-4 -right-4 w-28 h-28 rounded-full flex items-center justify-center text-center shadow-lg"
              style={{ backgroundColor: "var(--blush-deep)", color: "#fff", zIndex: 2 }}
            >
              <div>
                <div className="font-script text-2xl">Made</div>
                <div className="font-serif text-lg font-bold leading-tight">with Love</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="font-script text-5xl" style={{ color: "var(--blush-deep)" }}>Our Story</div>
            <h2 className="font-serif text-3xl md:text-4xl leading-snug" style={{ color: "var(--text-main)" }}>
              Baked from the heart,<br />one sweet treat at a time.
            </h2>
            <div className="petal-divider justify-start">
              <span style={{ color: "var(--blush)" }}>🌸</span>
            </div>
            <p className="text-base leading-relaxed" style={{ color: "var(--text-soft)" }}>
              Hi, I'm Anna James — the founder, baker, and biggest dessert lover behind Soft Blush Bakery! 🌸
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--text-soft)" }}>
              I'm a Grade 11 student with a big passion for beautiful desserts and an even bigger sweet tooth. What started as baking for fun grew into something I never expected — a small business built on love, butter, and a lot of pink sprinkles. Every single order still feels like a little celebration.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--text-soft)" }}>
              I believe food should be as beautiful as it is delicious. Every parfait, cupcake, and cookie that leaves my kitchen is made with care, creativity, and the best quality ingredients I can find. No shortcuts, no mass production — just small-batch magic made to order.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {["✨ Small batch", "🌸 Made to order", "💝 Local & homemade", "🎀 Custom designs"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full text-sm font-medium"
                  style={{ backgroundColor: "var(--blush-light)", color: "var(--rose)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
