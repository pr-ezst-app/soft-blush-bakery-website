import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.ezst.app/projects/ad30f719-bb2a-4901-88c3-ce52fd85a8df/files/5b06adf9-5800-4b68-a486-330dad213f44.jpg";
const CUPCAKE_IMG = "https://cdn.ezst.app/projects/ad30f719-bb2a-4901-88c3-ce52fd85a8df/files/a0f93e25-4605-4363-a83a-ab6ae9309baa.jpg";
const COOKIE_IMG = "https://cdn.ezst.app/projects/ad30f719-bb2a-4901-88c3-ce52fd85a8df/files/e50c5853-d406-4f39-80ca-70f5e3271ae8.jpg";

const menuItems = [
  {
    category: "Cake Parfaits",
    emoji: "🍓",
    items: [
      {
        name: "Strawberry Dream Parfait",
        description: "Layers of vanilla sponge, fresh strawberry compote, whipped cream, and pink sprinkles in a beautiful glass jar.",
        price: "$11",
        tag: "Best Seller",
      },
      {
        name: "Chocolate Rose Parfait",
        description: "Rich chocolate mousse layered with rose-infused cream and delicate edible petals.",
        price: "$12",
        tag: null,
      },
      {
        name: "Lemon Bliss Parfait",
        description: "Zesty lemon curd, fluffy chiffon cake, and vanilla cream — bright, tangy, and utterly dreamy.",
        price: "$11",
        tag: null,
      },
    ],
    image: HERO_IMG,
  },
  {
    category: "Cupcakes",
    emoji: "🧁",
    items: [
      {
        name: "Classic Blush Cupcake",
        description: "Vanilla sponge topped with a swirl of our signature pink buttercream and pearl sprinkles.",
        price: "$4",
        tag: "Fan Favourite",
      },
      {
        name: "Strawberry Shortcake Cupcake",
        description: "Soft strawberry cake filled with fresh jam and crowned with fluffy cream cheese frosting.",
        price: "$4.50",
        tag: null,
      },
      {
        name: "Red Velvet Bliss",
        description: "Classic red velvet with velvety cream cheese frosting and a dusting of rose petal sugar.",
        price: "$5",
        tag: null,
      },
    ],
    image: CUPCAKE_IMG,
  },
  {
    category: "Cookies",
    emoji: "🍪",
    items: [
      {
        name: "Sugar Heart Cookies",
        description: "Buttery soft sugar cookies hand-decorated with royal icing in pinks, whites, and gold.",
        price: "$3",
        tag: "Custom Available",
      },
      {
        name: "Pink Velvet Crinkle",
        description: "Chewy, fudgy crinkle cookies dusted with powdered sugar for that perfect snap.",
        price: "$2.50",
        tag: null,
      },
      {
        name: "Matcha Rose Sablé",
        description: "Delicate French-style butter cookies with a hint of matcha and dried rose petals.",
        price: "$3.50",
        tag: null,
      },
    ],
    image: COOKIE_IMG,
  },
];

const navLinks = ["Home", "Menu", "Pricing", "About", "Order"];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const [orderForm, setOrderForm] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    quantity: "",
    date: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleOrderChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setOrderForm({ ...orderForm, [e.target.name]: e.target.value });
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--cream)", color: "var(--text-main)" }}>

      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
        style={{ backgroundColor: "rgba(255,247,249,0.92)", borderColor: "var(--blush-light)" }}
      >
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
          <button onClick={() => scrollTo("home")} className="flex flex-col items-start leading-none">
            <span className="font-script text-3xl" style={{ color: "var(--blush-deep)" }}>Soft Blush</span>
            <span className="text-xs tracking-[0.25em] uppercase font-sans" style={{ color: "var(--text-soft)", marginTop: "-2px" }}>Bakery</span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link.toLowerCase())}
                className="text-sm tracking-wide font-medium transition-colors hover:opacity-70"
                style={{ color: "var(--text-soft)" }}
              >
                {link}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollTo("order")}
            className="hidden md:block px-5 py-2 rounded-full text-sm font-medium transition-all hover:shadow-lg hover:scale-105"
            style={{ backgroundColor: "var(--blush)", color: "#fff" }}
          >
            Order Now
          </button>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t px-5 py-6 flex flex-col gap-4" style={{ backgroundColor: "var(--cream)", borderColor: "var(--blush-light)" }}>
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link.toLowerCase())}
                className="text-left text-base font-medium py-1"
                style={{ color: "var(--text-main)" }}
              >
                {link}
              </button>
            ))}
            <button
              onClick={() => scrollTo("order")}
              className="mt-2 px-5 py-3 rounded-full text-sm font-medium w-full"
              style={{ backgroundColor: "var(--blush)", color: "#fff" }}
            >
              Order Now
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 60% 40%, #fde8ef 0%, #fff7f9 50%, #fdf0f4 100%)",
          }}
        />
        <div
          className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, #f4a7b9, transparent)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #e8829a, transparent)" }}
        />

        <div className="relative max-w-6xl mx-auto px-5 py-20 grid md:grid-cols-2 gap-12 items-center w-full">
          <div className="text-center md:text-left space-y-6">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs tracking-widest uppercase font-medium"
              style={{ backgroundColor: "var(--blush-light)", color: "var(--rose)" }}
            >
              🌸 Handcrafted with love
            </div>

            <h1 className="font-serif text-5xl md:text-7xl leading-tight" style={{ color: "var(--text-main)" }}>
              Made to make<br />
              <span className="font-script text-6xl md:text-8xl" style={{ color: "var(--blush-deep)" }}>
                you smile
              </span>
            </h1>

            <p className="text-base md:text-lg leading-relaxed font-sans max-w-md mx-auto md:mx-0" style={{ color: "var(--text-soft)" }}>
              Soft, dreamy desserts crafted from scratch — cake parfaits, cupcakes, and cookies that look as beautiful as they taste.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <button
                onClick={() => scrollTo("order")}
                className="px-8 py-4 rounded-full font-medium text-base transition-all hover:shadow-xl hover:scale-105 active:scale-95"
                style={{ backgroundColor: "var(--blush-deep)", color: "#fff" }}
              >
                Place an Order ✨
              </button>
              <button
                onClick={() => scrollTo("menu")}
                className="px-8 py-4 rounded-full font-medium text-base border-2 transition-all hover:shadow-md"
                style={{ borderColor: "var(--blush)", color: "var(--rose)", backgroundColor: "transparent" }}
              >
                See Our Menu
              </button>
            </div>

            <div className="flex items-center gap-6 justify-center md:justify-start pt-2">
              {[["🎂", "100+", "Happy Customers"], ["⭐", "5.0", "Star Rating"], ["🌸", "3+", "Years Baking"]].map(([emoji, num, label]) => (
                <div key={label} className="text-center">
                  <div className="text-lg">{emoji}</div>
                  <div className="font-serif text-xl font-semibold" style={{ color: "var(--rose)" }}>{num}</div>
                  <div className="text-xs" style={{ color: "var(--text-soft)" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="animate-float relative" style={{ width: "min(420px, 90vw)", height: "min(420px, 90vw)" }}>
              <div
                className="absolute inset-0 rounded-[40%_60%_60%_40%/50%_40%_60%_50%]"
                style={{ backgroundColor: "var(--blush-light)", transform: "rotate(-6deg) scale(1.05)" }}
              />
              <img
                src={HERO_IMG}
                alt="Soft Blush Bakery"
                className="relative w-full h-full object-cover rounded-[40%_60%_60%_40%/50%_40%_60%_50%]"
                style={{ boxShadow: "0 20px 60px rgba(244,167,185,0.4)" }}
              />
              <div
                className="absolute -top-3 -right-3 px-4 py-2 rounded-full text-xs font-medium shadow-lg"
                style={{ backgroundColor: "#fff", color: "var(--rose)", border: "1px solid var(--blush-light)" }}
              >
                🧁 Fresh Daily
              </div>
              <div
                className="absolute -bottom-3 -left-3 px-4 py-2 rounded-full text-xs font-medium shadow-lg"
                style={{ backgroundColor: "var(--blush-deep)", color: "#fff" }}
              >
                ✨ Made to Order
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-xs tracking-widest uppercase" style={{ color: "var(--text-soft)" }}>Scroll</span>
          <div className="w-px h-8 animate-bounce" style={{ backgroundColor: "var(--blush)" }} />
        </div>
      </section>

      {/* MARQUEE STRIP */}
      <div
        className="overflow-hidden py-4 border-y"
        style={{ backgroundColor: "var(--blush)", borderColor: "var(--blush-deep)" }}
      >
        <div className="flex gap-8 whitespace-nowrap" style={{ width: "max-content", animation: "marquee 20s linear infinite" }}>
          {Array(4).fill(["🌸 Cake Parfaits", "✨ Cupcakes", "🍪 Cookies", "💝 Made with Love", "🎀 Custom Orders", "🌺 Fresh Daily"]).flat().map((item, i) => (
            <span key={i} className="text-sm font-medium tracking-wider uppercase text-white px-4">{item}</span>
          ))}
        </div>
      </div>

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

      {/* ORDER FORM */}
      <section id="order" className="py-24 px-5" style={{ backgroundColor: "var(--blush-light)" }}>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <div className="font-script text-5xl" style={{ color: "var(--blush-deep)" }}>Place an Order</div>
            <h2 className="font-serif text-3xl md:text-4xl" style={{ color: "var(--text-main)" }}>
              Let's Create Something Sweet
            </h2>
            <div className="petal-divider"><span style={{ color: "var(--blush)" }}>🌸</span></div>
            <p className="text-base" style={{ color: "var(--text-soft)" }}>
              Fill in the form below and I'll get back to you within 24 hours to confirm your order. 🎀
            </p>
          </div>

          {submitted ? (
            <div
              className="rounded-3xl p-12 text-center space-y-4"
              style={{ backgroundColor: "#fff", border: "1px solid var(--blush-light)" }}
            >
              <div className="text-6xl">🎉</div>
              <h3 className="font-serif text-2xl" style={{ color: "var(--text-main)" }}>Order Received!</h3>
              <p style={{ color: "var(--text-soft)" }}>
                Thank you so much, {orderForm.name}! I'll reach out to {orderForm.email} within 24 hours to confirm your order and share payment details. Can't wait to bake for you! 🌸
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setOrderForm({ name: "", email: "", phone: "", product: "", quantity: "", date: "", message: "" });
                }}
                className="mt-4 px-8 py-3 rounded-full font-medium"
                style={{ backgroundColor: "var(--blush)", color: "#fff" }}
              >
                Place Another Order
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleOrderSubmit}
              className="rounded-3xl p-8 md:p-10 space-y-5"
              style={{ backgroundColor: "#fff", border: "1px solid var(--blush-light)" }}
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--text-main)" }}>
                    Your Name *
                  </label>
                  <input
                    name="name"
                    value={orderForm.name}
                    onChange={handleOrderChange}
                    required
                    placeholder="e.g. Emma Johnson"
                    className="w-full px-4 py-3 rounded-2xl text-sm outline-none"
                    style={{ backgroundColor: "var(--blush-light)", border: "1px solid var(--blush-light)", color: "var(--text-main)" }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--text-main)" }}>
                    Email Address *
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={orderForm.email}
                    onChange={handleOrderChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-2xl text-sm outline-none"
                    style={{ backgroundColor: "var(--blush-light)", border: "1px solid var(--blush-light)", color: "var(--text-main)" }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--text-main)" }}>
                  Phone Number
                </label>
                <input
                  name="phone"
                  type="tel"
                  value={orderForm.phone}
                  onChange={handleOrderChange}
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-3 rounded-2xl text-sm outline-none"
                  style={{ backgroundColor: "var(--blush-light)", border: "1px solid var(--blush-light)", color: "var(--text-main)" }}
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--text-main)" }}>
                    What would you like? *
                  </label>
                  <select
                    name="product"
                    value={orderForm.product}
                    onChange={handleOrderChange}
                    required
                    className="w-full px-4 py-3 rounded-2xl text-sm outline-none"
                    style={{ backgroundColor: "var(--blush-light)", border: "1px solid var(--blush-light)", color: "var(--text-main)" }}
                  >
                    <option value="">Choose a product...</option>
                    <option value="cake-parfaits">🍓 Cake Parfaits</option>
                    <option value="cupcakes">🧁 Cupcakes</option>
                    <option value="cookies">🍪 Cookies</option>
                    <option value="mixed">🎀 Mixed Order</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--text-main)" }}>
                    Quantity *
                  </label>
                  <input
                    name="quantity"
                    value={orderForm.quantity}
                    onChange={handleOrderChange}
                    required
                    placeholder="e.g. 12 cupcakes"
                    className="w-full px-4 py-3 rounded-2xl text-sm outline-none"
                    style={{ backgroundColor: "var(--blush-light)", border: "1px solid var(--blush-light)", color: "var(--text-main)" }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--text-main)" }}>
                  Needed By Date *
                </label>
                <input
                  name="date"
                  type="date"
                  value={orderForm.date}
                  onChange={handleOrderChange}
                  required
                  className="w-full px-4 py-3 rounded-2xl text-sm outline-none"
                  style={{ backgroundColor: "var(--blush-light)", border: "1px solid var(--blush-light)", color: "var(--text-main)" }}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--text-main)" }}>
                  Special Requests / Message
                </label>
                <textarea
                  name="message"
                  value={orderForm.message}
                  onChange={handleOrderChange}
                  rows={4}
                  placeholder="Tell me your flavour preferences, custom designs, allergies, or any special details..."
                  className="w-full px-4 py-3 rounded-2xl text-sm outline-none resize-none"
                  style={{ backgroundColor: "var(--blush-light)", border: "1px solid var(--blush-light)", color: "var(--text-main)" }}
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full font-medium text-base transition-all hover:shadow-xl hover:scale-[1.02] active:scale-95"
                style={{ backgroundColor: "var(--blush-deep)", color: "#fff" }}
              >
                Send My Order Request 🌸
              </button>

              <p className="text-center text-xs" style={{ color: "var(--text-soft)" }}>
                I'll confirm via email within 24 hours. Payment details will be shared on confirmation.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* SOCIAL */}
      <section className="py-24 px-5 max-w-4xl mx-auto text-center space-y-8">
        <div className="font-script text-5xl" style={{ color: "var(--blush-deep)" }}>Get in Touch</div>
        <h2 className="font-serif text-3xl" style={{ color: "var(--text-main)" }}>
          Have a Question? Say Hello!
        </h2>
        <div className="petal-divider"><span style={{ color: "var(--blush)" }}>🌸</span></div>
        <p className="max-w-md mx-auto" style={{ color: "var(--text-soft)" }}>
          For enquiries, custom orders, or just to say hi — drop me an email and I'll get back to you soon.
        </p>

        <div
          className="mt-8 rounded-3xl p-8 inline-block"
          style={{ backgroundColor: "var(--blush-light)", border: "1px solid var(--blush)" }}
        >
          <p className="text-sm font-medium mb-1" style={{ color: "var(--rose)" }}>📩 Want to chat directly?</p>
          <p className="font-serif text-xl" style={{ color: "var(--text-main)" }}>hello@softblushbakery.com</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="py-10 px-5 text-center border-t"
        style={{ borderColor: "var(--blush-light)", backgroundColor: "#fff" }}
      >
        <div className="font-script text-4xl mb-1" style={{ color: "var(--blush-deep)" }}>Soft Blush Bakery</div>
        <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "var(--text-soft)" }}>
          Made with love & a lot of butter 🧈
        </p>
        <div className="flex justify-center gap-6 text-xs mb-4" style={{ color: "var(--text-soft)" }}>
          {navLinks.map((link) => (
            <button key={link} onClick={() => scrollTo(link.toLowerCase())} className="hover:opacity-70 transition-opacity">
              {link}
            </button>
          ))}
        </div>
        <p className="text-xs" style={{ color: "var(--text-soft)" }}>
          © 2024 Soft Blush Bakery · All rights reserved
        </p>
      </footer>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}