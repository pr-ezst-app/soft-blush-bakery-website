const HERO_IMG = "https://cdn.ezst.app/projects/ad30f719-bb2a-4901-88c3-ce52fd85a8df/files/5b06adf9-5800-4b68-a486-330dad213f44.jpg";

interface HeroSectionProps {
  scrollTo: (id: string) => void;
}

export default function HeroSection({ scrollTo }: HeroSectionProps) {
  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 80% 60% at 60% 40%, #fde8ef 0%, #fff7f9 50%, #fdf0f4 100%)" }}
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
    </>
  );
}
