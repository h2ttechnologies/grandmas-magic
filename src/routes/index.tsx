import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/grandma-logo.png";
import heroJars from "@/assets/hero-jars.jpeg";
import pMango from "@/assets/product-mango.jpg";
import pLemon from "@/assets/product-lemon.jpg";
import pGarlic from "@/assets/product-garlic.jpeg";
import pDrumstick from "@/assets/product-drumstick.jpg";
import pGongura from "@/assets/product-gongura.jpeg";
import pTomato from "@/assets/product-tomato.jpg";
import pPuliyothare from "@/assets/product-puliyothare.jpeg";
import aboutImg from "@/assets/about-cooking.jpg";

export const Route = createFileRoute("/")({
  component: Landing,
});

const WA_URL =
  "https://wa.me/919176919919?text=Hi%20I%20want%20to%20order%20from%20Grandma's%20Magic";

const products = [
  { name: "Mango Pickle", img: pMango, tag: "Homemade traditional recipe" },
  { name: "Lemon Pickle", img: pLemon, tag: "Sun-cured & spice-laced" },
  { name: "Garlic Pickle", img: pGarlic, tag: "Bold flavour, paati's way" },
  { name: "Drumstick Pickle", img: pDrumstick, tag: "Rare, slow-cooked recipe" },
  { name: "Andhra Gongura", img: pGongura, tag: "Sorrel leaves, fiery & tangy" },
  { name: "Tomato Relish", img: pTomato, tag: "Tangy, comfort in a jar" },
  { name: "Temple Puliyothare", img: pPuliyothare, tag: "South Indian rice paste" },
  { name: "Mixed Veg Pickle", img: pMango, tag: "A jar of nostalgia" },
];

const trust = [
  { icon: "🌶️", title: "Freshly Prepared", desc: "Made only after you order" },
  { icon: "🚫", title: "No Preservatives", desc: "Pure, clean, paati-approved" },
  { icon: "🪔", title: "100% Gingelly Oil", desc: "Cold-pressed sesame oil" },
  { icon: "💛", title: "Homemade with Care", desc: "Small batches, big love" },
];

const testimonials = [
  {
    name: "Lakshmi R.",
    city: "Chennai",
    text: "Tastes exactly like my grandmother's mango pickle. I cried a little. 💛",
  },
  {
    name: "Arjun M.",
    city: "Bengaluru",
    text: "The garlic pickle is unreal. Finished a jar in 4 days. Ordering 3 more.",
  },
  {
    name: "Priya S.",
    city: "Hyderabad",
    text: "Authentic Andhra gongura, perfectly spiced. Worth every rupee.",
  },
];

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="Grandma's Magic logo" width={48} height={48} className="h-12 w-12 rounded-full bg-brand-cream ring-2 ring-brand-yellow shadow-[var(--shadow-soft)]" />
          <span className="font-display text-lg sm:text-xl font-bold text-brand-cream drop-shadow">
            Grandma's <span className="text-brand-yellow">Magic</span>
          </span>
        </a>
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener"
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-brand-yellow px-4 py-2 text-sm font-bold text-brand-brown shadow-[var(--shadow-soft)] hover:scale-105 transition"
        >
          <WhatsAppIcon className="h-4 w-4" /> Order Now
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      <img
        src={heroJars}
        alt="Grandma's Magic homemade pickle jars in warm candlelight"
        className="absolute inset-0 h-full w-full object-cover"
        width={1080}
        height={1080}
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero-overlay)" }} />
      <Header />
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 pt-32 sm:pt-40 pb-20 text-center">
        <img
          src={logo}
          alt="Grandma's Magic"
          width={120}
          height={120}
          className="mx-auto mb-6 h-24 w-24 sm:h-28 sm:w-28 rounded-full bg-brand-cream ring-4 ring-brand-yellow shadow-[var(--shadow-warm)]"
        />
        <p className="text-brand-yellow font-semibold tracking-widest uppercase text-xs sm:text-sm mb-4">
          ✨ Authentic · Handmade · Pan India ✨
        </p>
        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-brand-cream leading-[1.05] mb-5">
          Homemade Pickles &amp; Podis
          <span className="block text-brand-yellow italic font-medium text-3xl sm:text-5xl lg:text-6xl mt-2">
            — just like paati makes 💛
          </span>
        </h1>
        <p className="text-base sm:text-lg text-brand-cream/90 mb-8 max-w-2xl mx-auto">
          Freshly prepared on order &nbsp;·&nbsp; No preservatives &nbsp;·&nbsp; 100% gingelly oil
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-brand-yellow px-7 py-4 text-base font-bold text-brand-brown shadow-[var(--shadow-warm)] hover:scale-105 active:scale-100 transition"
          >
            <WhatsAppIcon className="h-5 w-5" /> Order on WhatsApp
          </a>
          <a
            href="#menu"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border-2 border-brand-cream/70 bg-transparent px-7 py-4 text-base font-bold text-brand-cream hover:bg-brand-cream hover:text-brand-brown transition"
          >
            View Menu
          </a>
        </div>
        <p className="mt-8 text-sm text-brand-cream/80">
          🚨 Fresh batch available today — limited stock
        </p>
      </div>
    </section>
  );
}

function Trust() {
  return (
    <section className="bg-brand-cream py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {trust.map((t) => (
            <div
              key={t.title}
              className="rounded-3xl bg-white p-6 text-center shadow-[var(--shadow-soft)] border border-border/60"
            >
              <div className="text-4xl mb-3">{t.icon}</div>
              <h3 className="font-display font-bold text-brand-brown text-base sm:text-lg">{t.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="products" className="bg-brand-cream pb-20 sm:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-brand-pink font-semibold tracking-widest uppercase text-xs mb-3">Our Jars of Joy</p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-brand-brown">
            Handcrafted in <span className="italic text-brand-pink">small batches</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Each jar is stirred slow, sealed fresh, and shipped with a little bit of paati's love.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((p) => (
            <article
              key={p.name}
              className="group rounded-3xl bg-white overflow-hidden shadow-[var(--shadow-soft)] border border-border/60 flex flex-col hover:-translate-y-1 transition"
            >
              <div className="aspect-square overflow-hidden bg-brand-cream">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={500}
                  height={500}
                  className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-4 sm:p-5 flex flex-col flex-1">
                <h3 className="font-display font-bold text-brand-brown text-base sm:text-lg leading-tight">
                  {p.name}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1 flex-1">{p.tag}</p>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener"
                  className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-full bg-brand-brown px-4 py-2 text-xs sm:text-sm font-bold text-brand-cream hover:bg-brand-deep transition"
                >
                  <WhatsAppIcon className="h-3.5 w-3.5" /> Order Now
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Menu() {
  const cats = [
    {
      title: "Pickles",
      items: ["Mango", "Lemon", "Garlic", "Drumstick", "Andhra Gongura", "Tomato Relish", "Mixed Vegetable", "Inji (Ginger)"],
    },
    {
      title: "Rice Mixes & Pastes",
      items: ["Temple Puliyothare", "Vangi Bath Powder", "Bisi Bele Mix", "Coconut Podi", "Curry Leaf Podi", "Idli Milagai Podi"],
    },
  ];
  return (
    <section id="menu" className="bg-brand-brown text-brand-cream py-20 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, var(--brand-yellow) 0, transparent 40%), radial-gradient(circle at 80% 80%, var(--brand-pink) 0, transparent 40%)" }} />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-brand-yellow font-semibold tracking-widest uppercase text-xs mb-3">The Menu</p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold">
            Paati's <span className="italic text-brand-yellow">special</span> menu
          </h2>
        </div>
        <div className="rounded-[2rem] bg-brand-cream text-brand-brown p-8 sm:p-12 shadow-[var(--shadow-warm)] border-4 border-brand-yellow/40">
          <div className="grid sm:grid-cols-2 gap-10">
            {cats.map((c) => (
              <div key={c.title}>
                <div className="flex items-center gap-3 mb-5 pb-3 border-b-2 border-dashed border-brand-pink/40">
                  <span className="text-2xl">🪔</span>
                  <h3 className="font-display text-2xl font-bold">{c.title}</h3>
                </div>
                <ul className="space-y-3">
                  {c.items.map((it) => (
                    <li key={it} className="flex items-start justify-between gap-3 text-base">
                      <span className="font-semibold">{it}</span>
                      <span className="text-brand-pink text-sm flex-1 border-b border-dotted border-brand-brown/30 mx-2 mb-1.5" />
                      <span className="text-sm text-muted-foreground">Fresh</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center mt-10 text-sm text-muted-foreground italic">
            Prices on WhatsApp · Custom orders welcome · Bulk discounts available
          </p>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-brand-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img
            src={aboutImg}
            alt="Paati hands stirring homemade pickle in a brass pot"
            loading="lazy"
            width={1280}
            height={896}
            className="rounded-[2rem] shadow-[var(--shadow-warm)] w-full object-cover aspect-[5/4]"
          />
          <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-brand-yellow text-brand-brown rounded-2xl px-5 py-4 shadow-[var(--shadow-warm)] rotate-3">
            <p className="font-display text-2xl font-black leading-none">40+</p>
            <p className="text-xs font-semibold">years of recipes</p>
          </div>
        </div>
        <div>
          <p className="text-brand-pink font-semibold tracking-widest uppercase text-xs mb-3">Our Story</p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-brand-brown leading-tight">
            Recipes that smell like <span className="italic text-brand-pink">home</span>.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Grandma's Magic brings you authentic homemade recipes prepared with love and tradition —
            just like our paati used to make. Every jar is hand-stirred in small batches, sun-cured
            with care, and finished in pure gingelly oil. No shortcuts. No machines. No preservatives.
          </p>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Just slow, soulful food — the way it's meant to be.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {["Hand-stirred", "Small batches", "Sun-cured", "Gingelly oil", "Veg ✓"].map((t) => (
              <span key={t} className="rounded-full border border-brand-brown/15 bg-white px-4 py-1.5 text-sm font-semibold text-brand-brown">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="bg-[oklch(0.95_0.04_70)] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-brand-pink font-semibold tracking-widest uppercase text-xs mb-3">Loved Across India</p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-brand-brown">
            What our family says <span className="text-brand-pink">💌</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-3xl bg-white p-6 sm:p-7 shadow-[var(--shadow-soft)] border border-border/60 relative"
            >
              <div className="text-brand-yellow text-2xl mb-2">★★★★★</div>
              <blockquote className="text-brand-brown text-base leading-relaxed">"{t.text}"</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-brand-yellow/30 flex items-center justify-center font-display font-bold text-brand-brown">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-brand-brown text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.city}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function UrgentCTA() {
  return (
    <section className="relative py-20 sm:py-24 overflow-hidden" style={{ background: "var(--gradient-warm)" }}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center text-brand-brown">
        <p className="inline-block bg-brand-brown text-brand-yellow text-xs font-bold tracking-widest uppercase rounded-full px-4 py-1.5 mb-5">
          🚨 Limited Stock
        </p>
        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black leading-tight">
          Fresh batch available <span className="italic">today</span>.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-brand-brown/85 max-w-xl mx-auto">
          We cook only what's ordered. Once today's batch is gone, it's gone. Reserve your jar now.
        </p>
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener"
          className="mt-8 inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-brown px-8 py-4 text-base sm:text-lg font-bold text-brand-cream shadow-[var(--shadow-warm)] hover:scale-105 active:scale-100 transition"
        >
          <WhatsAppIcon className="h-5 w-5" /> Reserve on WhatsApp
        </a>
        <p className="mt-4 text-sm text-brand-brown/80">+91 9176919919 · Pan India delivery</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-deep text-brand-cream pt-16 pb-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="" width={44} height={44} className="h-11 w-11 rounded-full bg-brand-cream ring-2 ring-brand-yellow" />
              <span className="font-display text-lg font-bold">
                Grandma's <span className="text-brand-yellow">Magic</span>
              </span>
            </div>
            <p className="text-sm text-brand-cream/75 leading-relaxed">
              Homemade with love 💛 Authentic pickles &amp; podis made fresh with gingelly oil.
            </p>
          </div>
          <div>
            <h4 className="font-display text-brand-yellow font-bold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#menu" className="hover:text-brand-yellow">Menu</a></li>
              <li><a href="#products" className="hover:text-brand-yellow">Products</a></li>
              <li><a href="#reviews" className="hover:text-brand-yellow">Reviews</a></li>
              <li><a href="#about" className="hover:text-brand-yellow">Why Choose Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-brand-yellow font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-yellow">Terms &amp; Conditions</a></li>
              <li><a href="#" className="hover:text-brand-yellow">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-brand-yellow font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>🇮🇳 Pan India Delivery Available</li>
              <li><a href="tel:+919176919919" className="hover:text-brand-yellow">+91 9176919919</a></li>
              <li><a href={WA_URL} target="_blank" rel="noopener" className="hover:text-brand-yellow">Order via WhatsApp</a></li>
              <li className="text-brand-cream/70">Bulk &amp; Resellers Welcome</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-brand-cream/15 text-center text-xs text-brand-cream/60">
          © 2026 Grandma's Magic. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener"
      aria-label="Order on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center justify-center h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-[#25D366] text-white shadow-[var(--shadow-warm)] hover:scale-110 transition animate-pulse"
    >
      <WhatsAppIcon className="h-7 w-7 sm:h-8 sm:w-8" />
    </a>
  );
}

function Landing() {
  return (
    <main className="bg-brand-cream text-brand-brown">
      <Hero />
      <Trust />
      <Products />
      <Menu />
      <About />
      <Reviews />
      <UrgentCTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
