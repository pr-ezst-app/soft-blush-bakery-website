import { useState } from "react";

declare const emailjs: {
  send: (serviceId: string, templateId: string, params: Record<string, string>, publicKey: string) => Promise<void>;
};

const navLinks = ["Home", "Menu", "Pricing", "About", "Order"];

interface OrderContactFooterProps {
  scrollTo: (id: string) => void;
}

const EMAILJS_SERVICE_ID = "service_softblush";
const EMAILJS_TEMPLATE_ID = "template_order";
const EMAILJS_PUBLIC_KEY = "REPLACE_WITH_PUBLIC_KEY";

export default function OrderContactFooter({ scrollTo }: OrderContactFooterProps) {
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
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleOrderChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setOrderForm({ ...orderForm, [e.target.name]: e.target.value });
  };

  const handleOrderSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: orderForm.name,
          from_email: orderForm.email,
          phone: orderForm.phone,
          product: orderForm.product,
          quantity: orderForm.quantity,
          date: orderForm.date,
          message: orderForm.message,
          to_email: "isiomanwac@gmail.com",
        },
        EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email me directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
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

              {error && (
                <p className="text-sm text-center" style={{ color: "#e8829a" }}>{error}</p>
              )}

              <button
                type="submit"
                disabled={sending}
                className="w-full py-4 rounded-full font-medium text-base transition-all hover:shadow-xl hover:scale-[1.02] active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ backgroundColor: "var(--blush-deep)", color: "#fff" }}
              >
                {sending ? "Sending... 🌸" : "Send My Order Request 🌸"}
              </button>

              <p className="text-center text-xs" style={{ color: "var(--text-soft)" }}>
                I'll confirm via email within 24 hours. Payment details will be shared on confirmation.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* CONTACT */}
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
          <p className="font-serif text-xl" style={{ color: "var(--text-main)" }}>isiomanwac@gmail.com</p>
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
    </>
  );
}
