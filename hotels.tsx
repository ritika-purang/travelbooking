import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoSrc from "./logo.png";

interface Hotel { name: string; dist: string; rating: string; label: string; reviews: string; price: string; emoji: string; }
interface City { name: string; country: string; price: string; color: string; }

const hotelData: Record<string, Hotel[]> = {
  Perth: [
    { name: "Great Southern Hotel Perth", dist: "0.78 km from city centre", rating: "4.3", label: "Very good", reviews: "4,604", price: "$157", emoji: "🏨" },
    { name: "Quality Hotel Ambassador Perth", dist: "1.49 km from city centre", rating: "3.9", label: "Good", reviews: "2,392", price: "$151", emoji: "🏩" },
    { name: "Ibis Perth", dist: "0.31 km from city centre", rating: "4.3", label: "Very good", reviews: "673", price: "$178", emoji: "🏢" },
    { name: "Metro Hotel Perth", dist: "3.71 km from city centre", rating: "3.9", label: "Good", reviews: "2,197", price: "$153", emoji: "🏬" },
    { name: "The Stirling Arms Hotel", dist: "12.02 km from city centre", rating: "4.3", label: "Very good", reviews: "468", price: "$160", emoji: "🏛️" },
    { name: "European Hotel", dist: "0.65 km from city centre", rating: "4.3", label: "Very good", reviews: "1,941", price: "$175", emoji: "🏰" },
  ],
  Brisbane: [
    { name: "Rydges South Bank Brisbane", dist: "1.2 km from city centre", rating: "4.2", label: "Very good", reviews: "3,102", price: "$169", emoji: "🏨" },
    { name: "Emporium Hotel South Bank", dist: "1.0 km from city centre", rating: "4.8", label: "Excellent", reviews: "2,890", price: "$349", emoji: "🌟" },
    { name: "ibis Brisbane", dist: "0.6 km from city centre", rating: "4.0", label: "Good", reviews: "1,544", price: "$142", emoji: "🏢" },
    { name: "Novotel Brisbane South Bank", dist: "1.4 km from city centre", rating: "4.3", label: "Very good", reviews: "2,210", price: "$198", emoji: "🏩" },
  ],
  Sydney: [
    { name: "Park Hyatt Sydney", dist: "0.4 km from Opera House", rating: "4.7", label: "Excellent", reviews: "5,420", price: "$680", emoji: "🌟" },
    { name: "Pullman Sydney Hyde Park", dist: "0.9 km from city centre", rating: "4.4", label: "Very good", reviews: "3,288", price: "$225", emoji: "🏨" },
    { name: "ibis Sydney Airport", dist: "0.3 km from airport", rating: "4.1", label: "Good", reviews: "4,100", price: "$135", emoji: "🏢" },
    { name: "The Langham Sydney", dist: "0.7 km from city centre", rating: "4.8", label: "Excellent", reviews: "1,980", price: "$520", emoji: "🏰" },
  ],
  Melbourne: [
    { name: "Crown Metropol Melbourne", dist: "1.1 km from city centre", rating: "4.5", label: "Excellent", reviews: "6,100", price: "$220", emoji: "🌟" },
    { name: "Citadines on Bourke Melbourne", dist: "0.6 km from city centre", rating: "4.2", label: "Very good", reviews: "2,340", price: "$165", emoji: "🏨" },
    { name: "Novotel Melbourne Central", dist: "0.3 km from city centre", rating: "4.3", label: "Very good", reviews: "1,870", price: "$189", emoji: "🏩" },
    { name: "Hotel Chadstone Melbourne", dist: "14 km from city centre", rating: "4.6", label: "Excellent", reviews: "3,500", price: "$310", emoji: "🏰" },
  ],
  "Gold Coast": [
    { name: "Vibe Hotel Gold Coast", dist: "0.5 km from Surfers Paradise", rating: "4.2", label: "Very good", reviews: "2,880", price: "$148", emoji: "🌊" },
    { name: "Sheraton Grand Mirage", dist: "1.2 km from city centre", rating: "4.5", label: "Excellent", reviews: "3,760", price: "$298", emoji: "🌟" },
    { name: "QT Gold Coast", dist: "0.3 km from beach", rating: "4.6", label: "Excellent", reviews: "4,210", price: "$335", emoji: "🏩" },
    { name: "Mantra on View Hotel", dist: "0.8 km from city centre", rating: "4.0", label: "Good", reviews: "1,650", price: "$129", emoji: "🏨" },
  ],
};

const cities: City[] = [
  { name: "Denpasar", country: "Indonesia", price: "$8", color: "#1a5c4a" },
  { name: "London", country: "United Kingdom", price: "$45", color: "#1c3a6b" },
  { name: "Tokyo", country: "Japan", price: "$84", color: "#7a2828" },
  { name: "Bangkok", country: "Thailand", price: "$9", color: "#7a5020" },
  { name: "Singapore", country: "Singapore", price: "$38", color: "#1a5070" },
  { name: "Seoul", country: "South Korea", price: "$23", color: "#5a2060" },
  { name: "Auckland", country: "New Zealand", price: "$33", color: "#1a5038" },
  { name: "Ho Chi Minh City", country: "Vietnam", price: "$8", color: "#7a3020" },
];

const providers = ["Booking.com", "Wotif", "Expedia", "Hotels.com", "Agoda", "Trip.com"];
const auCities = ["Perth", "Brisbane", "Sydney", "Melbourne", "Gold Coast"];

// ── Sub-components ────────────────────────────────────────────────────────
function HotelCard({ hotel }: { hotel: Hotel }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff", borderRadius: 14,
        border: `1px solid ${hovered ? "#0778e9" : "#e5e7eb"}`,
        overflow: "hidden", cursor: "pointer",
        transform: hovered ? "translateY(-3px)" : "none",
        boxShadow: hovered ? "0 8px 24px rgba(7,120,233,0.10)" : "0 2px 8px rgba(0,0,0,0.05)",
        transition: "all 0.18s",
      }}
    >
      <div style={{ width: "100%", height: 112, background: "#f4f6fb", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 34 }}>
        {hotel.emoji}
      </div>
      <div style={{ padding: "12px 14px" }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: "#1a1a2e", marginBottom: 4, fontFamily: "'Sora',sans-serif" }}>{hotel.name}</div>
        <div style={{ fontSize: 12, color: "#6b7280", marginBottom: 10, fontFamily: "'DM Sans',sans-serif" }}>{hotel.dist}</div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
            <span style={{ background: "#1a1a2e", color: "#fff", fontSize: 12, fontWeight: 700, borderRadius: "6px 6px 6px 0", padding: "3px 7px" }}>
              {hotel.rating}
            </span>
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, color: "#1a1a2e", fontFamily: "'DM Sans',sans-serif" }}>{hotel.label}</div>
              <div style={{ fontSize: 11, color: "#9ca3af", fontFamily: "'DM Sans',sans-serif" }}>{hotel.reviews} reviews</div>
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 11, color: "#9ca3af", fontFamily: "'DM Sans',sans-serif" }}>Per night</div>
            <div style={{ fontSize: 19, fontWeight: 800, color: "#1a1a2e", fontFamily: "'Sora',sans-serif" }}>{hotel.price}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CityCard({ city }: { city: City }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 14, overflow: "hidden", cursor: "pointer", height: 148,
        border: "1px solid #e5e7eb",
        transform: hovered ? "translateY(-3px) scale(1.01)" : "none",
        boxShadow: hovered ? "0 8px 24px rgba(0,0,0,0.12)" : "0 2px 8px rgba(0,0,0,0.05)",
        transition: "all 0.18s",
      }}
    >
      <div style={{ width: "100%", height: "100%", background: city.color, display: "flex", alignItems: "flex-end", padding: 14, position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.05) 30%, rgba(0,0,0,0.60) 100%)" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: "#fff", fontFamily: "'Sora',sans-serif" }}>{city.name}</div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.8)", fontFamily: "'DM Sans',sans-serif" }}>{city.country}</div>
          <div style={{ fontSize: 13, color: "#60d0ff", fontWeight: 600, marginTop: 2, fontFamily: "'DM Sans',sans-serif" }}>From {city.price} a night</div>
        </div>
      </div>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────
export default function VoyakaHotel() {
  const navigate = useNavigate();
  const [activeCity, setActiveCity] = useState("Perth");

  return (
    <div style={{ fontFamily: "'Sora','DM Sans',sans-serif", background: "#ffffff", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* Nav links — same style as VoyakaHomepage */
        .h-nav-link {
          color: #1a1a2e; font-size: 15px; font-family: 'DM Sans',sans-serif; font-weight: 500;
          border: 1.5px solid #d1d5db; border-radius: 7px; padding: 5px 14px;
          transition: all 0.15s; cursor: pointer; white-space: nowrap; background: #fff;
          user-select: none;
        }
        .h-nav-link:hover { border-color: #0778e9; color: #0778e9; background: #f0f7ff; }
        .h-nav-link.active { border-color: #0778e9; color: #0778e9; font-weight: 700; background: #eef5ff; }

        /* Hero — matches homepage hero style but teal accent for hotels */
        .h-hero {
          background: "#71bdfc";
          padding: 52px clamp(16px,4vw,80px) 40px;
          text-align: center;
        }

        /* Search box */
        .h-search-box {
          background: #fff; border-radius: 14px; padding: 8px;
          display: flex; align-items: center; gap: 4px;
          max-width: 900px; margin: 0 auto;
          box-shadow: 0 6px 28px rgba(0,0,0,0.16);
          border: 1px solid #e5e7eb;
        }
        .h-search-field { flex: 1; display: flex; flex-direction: column; padding: 6px 14px; border-right: 1px solid #e5e7eb; }
        .h-search-field:last-of-type { border-right: none; }
        .h-search-field label { font-size: 10px; color: #9ca3af; font-weight: 700; margin-bottom: 2px; text-transform: uppercase; letter-spacing: 0.06em; font-family: 'DM Sans',sans-serif; }
        .h-search-field span  { font-size: 14px; font-weight: 600; color: #1a1a2e; font-family: 'DM Sans',sans-serif; }
        .h-search-field input { border: none; outline: none; font-size: 14px; font-weight: 600; color: #1a1a2e; font-family: 'DM Sans',sans-serif; background: transparent; width: 100%; }
        .h-search-field input::placeholder { color: #c4c9d4; font-weight: 400; }

        .h-search-btn {
          background: #1a1a2e; color: #fff; border: none; border-radius: 10px;
          padding: 0 28px; height: 52px; font-size: 15px; font-weight: 700;
          cursor: pointer; white-space: nowrap; font-family: 'Sora',sans-serif;
          transition: all 0.15s;
        }
        .h-search-btn:hover { background: #0778e9; transform: translateY(-1px); box-shadow: 0 4px 14px rgba(7,120,233,0.3); }

        /* Pills */
        .h-pills { display: flex; justify-content: center; gap: 10px; margin-top: 16px; }
        .h-pill { background: rgba(255,255,255,0.15); color: #fff; border: 1px solid rgba(255,255,255,0.4); border-radius: 20px; padding: 5px 16px; font-size: 13px; cursor: pointer; font-family: 'DM Sans',sans-serif; transition: background 0.15s; }
        .h-pill:hover { background: rgba(255,255,255,0.28); }

        /* Body */
        .h-body { padding: 36px clamp(16px,4vw,48px); max-width: 1100px; margin: 0 auto; }
        .h-sec-title { font-size: 22px; font-weight: 800; color: #1a1a2e; margin-bottom: 20px; font-family: 'Sora',sans-serif; }

        /* Provider badges — same gray as screenshot */
        .h-providers { background: #fff; border-radius: 14px; border: 1px solid #e5e7eb; padding: 20px 28px; display: flex; align-items: center; gap: 12px; flex-wrap: wrap; margin-bottom: 36px; }
        .h-provider { background: #f4f6fb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 7px 16px; font-size: 13px; font-weight: 600; color: #4b5563; font-family: 'DM Sans',sans-serif; }

        /* City tabs — blue underline like screenshot mini-tabs */
        .h-city-tabs { display: flex; border-bottom: 1.5px solid #e5e7eb; margin-bottom: 20px; }
        .h-city-tab { padding: 10px 18px; font-size: 14px; font-weight: 600; color: #6b7280; cursor: pointer; border-bottom: 2.5px solid transparent; margin-bottom: -1.5px; transition: color 0.14s; font-family: 'DM Sans',sans-serif; user-select: none; }
        .h-city-tab:hover { color: #1a1a2e; }
        .h-city-tab.on { color: #0778e9; border-bottom-color: #0778e9; }

        /* Hotel grid */
        .h-hotel-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px,1fr)); gap: 16px; margin-bottom: 36px; }

        /* City grid */
        .h-city-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(185px,1fr)); gap: 14px; margin-bottom: 36px; }

        /* Why cards — white bg, border */
        .h-why-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; margin-bottom: 36px; }
        .h-why-card { background: #fff; border-radius: 14px; border: 1px solid #e5e7eb; padding: 22px; }
        .h-why-icon  { font-size: 26px; margin-bottom: 10px; }
        .h-why-title { font-size: 15px; font-weight: 700; color: #1a1a2e; margin-bottom: 6px; font-family: 'Sora',sans-serif; }
        .h-why-desc  { font-size: 13px; color: #6b7280; line-height: 1.55; font-family: 'DM Sans',sans-serif; }

        /* Deals banner */
        .h-deals { background: #fff; border-radius: 14px; border: 1px solid #e5e7eb; padding: 24px 28px; display: flex; align-items: center; justify-content: space-between; gap: 20px; flex-wrap: wrap; margin-bottom: 36px; }
        .h-deals-btn { background: #1a1a2e; color: #fff; border: none; border-radius: 10px; padding: 10px 24px; font-size: 14px; font-weight: 700; cursor: pointer; font-family: 'Sora',sans-serif; transition: all 0.15s; }
        .h-deals-btn:hover { background: #0778e9; }

        /* Footer — matches VoyakaHomepage footer exactly */
        .h-footer { background: #0b1b52; color: #fff; padding: 40px clamp(16px,4vw,80px) 20px; }
        .h-ft-inner { max-width: 1100px; margin: 0 auto; }
        .h-ft-grid { display: grid; grid-template-columns: 1.4fr 1fr 1fr 1fr; gap: 28px; padding-bottom: 28px; border-bottom: 1px solid rgba(255,255,255,0.12); }
        .h-ft-head { font-family: 'Sora',sans-serif; font-size: 15px; font-weight: 700; margin-bottom: 14px; color: #fff; }
        .h-ft-links { display: flex; flex-direction: column; gap: 10px; }
        .h-ft-links a { color: rgba(255,255,255,0.65); text-decoration: none; font-family: 'DM Sans',sans-serif; font-size: 14px; }
        .h-ft-links a:hover { color: #fff; }
        .h-ft-bottom { text-align: center; padding-top: 18px; font-family: 'DM Sans',sans-serif; font-size: 13px; color: rgba(255,255,255,0.5); }

        @media (max-width: 640px) {
          .h-search-box { flex-direction: column; }
          .h-search-field { border-right: none; border-bottom: 1px solid #e5e7eb; }
          .h-search-field:last-of-type { border-bottom: none; }
          .h-search-btn { width: 100%; }
          .h-why-grid { grid-template-columns: 1fr; }
          .h-ft-grid  { grid-template-columns: 1fr; }
          .h-nav-links { display: none !important; }
        }
        @media (min-width: 641px) and (max-width: 900px) {
          .h-why-grid { grid-template-columns: 1fr 1fr; }
          .h-ft-grid  { grid-template-columns: repeat(2,1fr); }
        }
      `}</style>

      {/* ── NAV ── */}
      <nav style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "12px clamp(16px,4vw,48px)", borderBottom: "1px solid #e5e7eb",
        background: "#fff", position: "sticky", top: 0, zIndex: 100,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }} onClick={() => navigate("/")}>
          <img src={logoSrc} alt="Voyaka" style={{ width: 48, height: 48, borderRadius: 14, objectFit: "contain" }} />
          <span style={{ fontFamily: "'Sora',sans-serif", fontSize: "clamp(18px,2.5vw,28px)", fontWeight: 800, color: "#0778e9", letterSpacing: "-0.02em" }}>
            Voyaka
          </span>
        </div>

        <div className="h-nav-links" style={{ display: "flex", gap: 6 }}>
          {[
            { label: "Flights", route: "/" },
            { label: "Hotels", route: "/hotels" },
            { label: "Cars" },
          ].map(({ label, route }) => (
            <span
              key={label}
              className={`h-nav-link${label === "Hotels" ? " active" : ""}`}
              onClick={() => route && navigate(route)}
              style={{ cursor: route ? "pointer" : "default" }}
            >{label}</span>
          ))}
        </div>

        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <span style={{ color: "#6b7280", fontSize: 14, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }}>Help</span>
          <span style={{ color: "#6b7280", fontSize: 14, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }}>EN · AUD ($)</span>
        </div>
      </nav>

      {/* ── HERO ── */}
      <div className="h-hero">
        <h1 style={{ color: "#fff", fontSize: "clamp(24px,3.5vw,36px)", fontWeight: 800, marginBottom: 28, fontFamily: "'Sora',sans-serif" }}>
          Find the right hotel today
        </h1>
        <div className="h-search-box">
          <div className="h-search-field" style={{ flex: 2 }}>
            <label>Where do you want to go?</label>
            <input type="text" placeholder="City, hotel, or landmark" />
          </div>
          <div className="h-search-field">
            <label>Check-in</label>
            <span>13/4/26</span>
          </div>
          <div className="h-search-field">
            <label>Check-out</label>
            <span>14/4/26</span>
          </div>
          <div className="h-search-field">
            <label>Guests &amp; rooms</label>
            <span>2 adults, 1 room</span>
          </div>
          <button className="h-search-btn">Search</button>
        </div>
        <div className="h-pills">
          <div className="h-pill">Free cancellation</div>
          <div className="h-pill">4 stars +</div>
        </div>
      </div>

      {/* ── BODY ── */}
      <div className="h-body">

        {/* Deals banner */}
        <h2 className="h-sec-title">Save on your next hotel booking</h2>
        <div className="h-deals">
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, color: "#1a1a2e", marginBottom: 6, fontFamily: "'Sora',sans-serif" }}>Top hotel deals, handpicked for you</div>
            <div style={{ fontSize: 13, color: "#6b7280", fontFamily: "'DM Sans',sans-serif" }}>We've pulled together top deals so you can find an amazing room at an even better price.</div>
          </div>
          <button className="h-deals-btn">See hotel deals</button>
        </div>

        {/* Providers */}
        <h2 className="h-sec-title">Compare hotels across your favourite brands</h2>
        <div className="h-providers">
          {providers.map((p) => <div key={p} className="h-provider">{p}</div>)}
          <div style={{ marginLeft: "auto", fontSize: 13, color: "#9ca3af", fontFamily: "'DM Sans',sans-serif" }}>+ hundreds more</div>
        </div>

        {/* Australian Hotels */}
        <h2 className="h-sec-title">Hotels in your home country</h2>
        <div className="h-city-tabs">
          {auCities.map((city) => (
            <div
              key={city}
              className={`h-city-tab${activeCity === city ? " on" : ""}`}
              onClick={() => setActiveCity(city)}
            >{city}</div>
          ))}
        </div>
        <div className="h-hotel-grid">
          {(hotelData[activeCity] || []).map((hotel) => (
            <HotelCard key={hotel.name} hotel={hotel} />
          ))}
        </div>

        {/* City Breaks */}
        <h2 className="h-sec-title">Hotels for fab city breaks</h2>
        <div className="h-city-grid">
          {cities.map((city) => <CityCard key={city.name} city={city} />)}
        </div>

        {/* Why Voyaka */}
        <div className="h-why-grid">
          {[
            { icon: "🔍", title: "Find the best-value hotel for your dates", desc: "Search by price or preferences to find the right hotel for your dates and needs." },
            { icon: "⚖️", title: "Compare deals across hundreds of providers", desc: "All the top booking sites in one place — no need to check each one individually." },
            { icon: "✓", title: "Look out for free cancellation", desc: "Find hotels with free cancellation or excellent ratings so you can book with confidence." },
          ].map((item) => (
            <div key={item.title} className="h-why-card">
              <div className="h-why-icon">{item.icon}</div>
              <div className="h-why-title">{item.title}</div>
              <div className="h-why-desc">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer className="h-footer">
        <div className="h-ft-inner">
          <div className="h-ft-grid">
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <img src={logoSrc} alt="Voyaka" style={{ width: 36, height: 36, borderRadius: 10, objectFit: "contain", background: "#fff", padding: 2 }} />
                <span style={{ fontFamily: "'Sora',sans-serif", fontSize: 22, fontWeight: 700, color: "#fff" }}>Voyaka</span>
              </div>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.65)", maxWidth: 260 }}>
                Your trusted travel companion for finding the best flight and hotel deals worldwide.
              </p>
            </div>
            {[
              { title: "Explore", links: ["Hotels in Australia", "Cheap hotels", "5-star hotels", "Last-minute deals"] },
              { title: "Company", links: ["About Voyaka", "Careers", "Press", "Partners"] },
              { title: "Support", links: ["FAQs", "Contact us", "Privacy policy", "Terms of service"] },
            ].map(({ title, links }) => (
              <div key={title}>
                <div className="h-ft-head">{title}</div>
                <div className="h-ft-links">
                  {links.map((l) => <a key={l} href="#">{l}</a>)}
                </div>
              </div>
            ))}
          </div>
          <div className="h-ft-bottom">© 2026 Voyaka Limited. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
