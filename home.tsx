import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoSrc from "./logo.png";

const planeIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21 4 19 4c-1 0-1.5.5-3.5 2.5L11 8 4.8 6.2c-.5-.2-1 .1-1.1.6l-.1.5c-.1.5.2 1 .7 1.2l4.6 1.9L7 13H4l-1 1 3 2 2 3 1-1v-3l2.8-1.9 1.9 4.6c.2.5.7.8 1.2.7l.5-.1c.5-.1.8-.6.6-1.1z" />
  </svg>
);
const hotelIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /><path d="M6 10h4" /><path d="M14 10h4" />
  </svg>
);
const carIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 17H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2" /><rect x="9" y="11" width="6" height="10" rx="1" /><circle cx="7.5" cy="17" r="1.5" /><circle cx="16.5" cy="17" r="1.5" />
  </svg>
);
const searchIcon = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
  </svg>
);
const locationIcon = (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
  </svg>
);
const calendarIcon = (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);
const usersIcon = (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const globeIcon = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" />
  </svg>
);

type Tab = "flights" | "hotels" | "cars";

export default function VoyakaHomepage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<Tab>("flights");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departure, setDeparture] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [pickupLocation, setPickupLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");

  // Four checkbox options
  const [directFlights, setDirectFlights] = useState(false);
  const [nearbyAirport, setNearbyAirport] = useState(false);
  const [addHotel, setAddHotel] = useState(false);
  const [addCar, setAddCar] = useState(false);

  const [regionalSettings] = useState({
    language: "English (AU)",
    country: "Australia",
    currency: "$ AUD",
  });

  const inspirationTabs = ["Flights", "Hotels", "Car hire"];
  const [activeInspirationTab, setActiveInspirationTab] = useState("Flights");

  const inspirationCards = [
    {
      title: "Flights to Europe",
      subtitle: "Explore Europe",
      image:
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Flights to Asia",
      subtitle: "Explore cultures and cuisines",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Flights to North America",
      subtitle: "Explore American cities and nature",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const planningLinks = [
    ["Flights to Europe", "Flights to Orlando"],
    ["Flights to Asia", "Flights to Florida"],
    ["Flights to North America", "Flights to New York"],
    ["Flights to the Caribbean", "Flights to Portugal"],
  ];

  return (
    <div style={{
      fontFamily: "'Sora', 'DM Sans', sans-serif",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      background: "#71bdfc",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }

        .page-container {
          width: 100%;
          padding-left: clamp(16px, 4vw, 80px);
          padding-right: clamp(16px, 4vw, 80px);
        }

        .search-card {
          background: #fff;
          border-radius: 18px;
          padding: 8px 8px 14px;
          width: 100%;
          max-width: min(960px, 100%);
          box-shadow: 0 4px 30px rgba(0,0,0,0.10);
          border: 1px solid #e5e5e5;
        }

        .stats-row {
          display: flex;
          gap: 12px;
          width: 100%;
          max-width: min(960px, 100%);
          flex-wrap: wrap;
        }

        .tab-btn {
          flex: 1; display: flex; align-items: center; justify-content: center;
          gap: 6px; padding: 8px 12px; border: none; background: transparent;
          cursor: pointer; font-family: 'Sora', sans-serif; font-size: 13px;
          font-weight: 500; color: #6b7280; border-radius: 8px;
          transition: all 0.18s ease; white-space: nowrap;
        }
        .tab-btn:hover { color: #1a1a2e; background: #f3f4f6; }
        .tab-btn.active { background: #1a1a2e; color: #fff; box-shadow: 0 2px 10px rgba(26,26,46,0.2); }

        .search-input {
          width: 100%; padding: 9px 10px 9px 32px;
          border: 1.5px solid #e5e7eb; border-radius: 8px;
          font-family: 'DM Sans', sans-serif; font-size: 13px;
          color: #1a1a2e; background: #fafafa;
          transition: all 0.18s; outline: none;
        }
        .search-input::placeholder { color: #b0b7c3; }
        .search-input:focus {
          border-color: #0778e9; background: #fff;
          box-shadow: 0 0 0 3px rgba(7,120,233,0.08);
        }

        .search-btn {
          width: 100%; padding: 11px; background: #1a1a2e; color: white;
          border: none; border-radius: 9px; font-family: 'Sora', sans-serif;
          font-size: 13px; font-weight: 600; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          gap: 8px; transition: all 0.18s; letter-spacing: 0.01em;
        }
        .search-btn:hover {
          background: #d1c452; transform: translateY(-1px);
          box-shadow: 0 4px 18px #d1c452;
        }

        .nav-link {
          color: #ffffff; text-decoration: none;
          font-size: clamp(13px, 1.4vw, 20px);
          font-family: Arial, sans-serif; font-weight: 500;
          transition: color 0.18s; cursor: pointer;
          border: 2px solid rgba(0,0,0,0.2);
          border-radius: 6px; padding: 4px 10px;
        }
        .nav-link:hover { color: #000; border-color: rgba(0,0,0,0.5); }

        .input-wrapper { position: relative; }
        .input-icon {
          position: absolute; left: 10px; top: 50%; transform: translateY(-50%);
          color: #9ca3af; pointer-events: none; display: flex; align-items: center;
        }

        .form-label {
          display: block; font-size: 10px; font-weight: 600; color: #6b7280;
          margin-bottom: 4px; letter-spacing: 0.05em; text-transform: uppercase;
        }

        /* ── Checkbox option pills ── */
        .checkboxes-row {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 12px;
          padding: 8px 10px;
          background: #f8faff;
          border: 1.5px solid #e8eef8;
          border-radius: 10px;
        }

        .check-option {
          display: flex; align-items: center; gap: 6px;
          padding: 6px 12px;
          border: 1.5px solid #e5e7eb;
          border-radius: 20px;
          background: #fff;
          cursor: pointer;
          transition: border-color 0.18s, background 0.18s, box-shadow 0.18s;
          user-select: none;
          white-space: nowrap;
        }
        .check-option:hover { border-color: #0778e9; background: #f0f7ff; box-shadow: 0 0 0 2px rgba(7,120,233,0.08); }
        .check-option.checked { border-color: #0778e9; background: #eef5ff; box-shadow: 0 0 0 2px rgba(7,120,233,0.12); }

        .check-option input[type="checkbox"] {
          width: 14px; height: 14px; accent-color: #0778e9; cursor: pointer; flex-shrink: 0;
        }
        .check-option-emoji { font-size: 13px; line-height: 1; }
        .check-option-label {
          font-family: 'DM Sans', sans-serif; font-size: 12px;
          font-weight: 600; color: #4b5563; line-height: 1;
        }
        .check-option.checked .check-option-label { color: #0778e9; }

        .stat-card {
          background: #f8f8f8; border: 1px solid #e5e5e5;
          border-radius: 12px; padding: 12px 10px; text-align: center;
          flex: 1; min-width: 110px;
          transition: transform 0.2s, background 0.2s;
        }
        .stat-card:hover { transform: translateY(-2px); background: #f0f0f0; }

        .regional-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 8px 18px; background: #f0f0f0;
          border: 1px solid #d0d0d0; border-radius: 24px;
          color: #333; font-family: Arial, sans-serif; font-size: 13px;
          font-weight: 600; cursor: pointer; letter-spacing: 0.01em;
          transition: background 0.2s, border-color 0.2s, transform 0.15s; white-space: nowrap;
        }
        .regional-btn:hover { background: #e0e0e0; border-color: #bbb; transform: translateY(-1px); }
        .regional-btn:active { transform: translateY(0); }
        .regional-divider { color: #aaa; font-size: 13px; }

        /* Responsive grids */
        .flights-row-1 { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 10px; }
        .flights-row-2 { display: grid; grid-template-columns: 1fr 1fr 150px; gap: 10px; margin-bottom: 10px; }
        .hotels-row   { display: grid; grid-template-columns: 1fr 1fr 150px; gap: 10px; margin-bottom: 12px; }
        .cars-row     { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 12px; }

        @media (max-width: 600px) {
          .flights-row-1, .flights-row-2, .hotels-row, .cars-row { grid-template-columns: 1fr; }
          .nav-links-wrap { display: none !important; }
          .hero-title { font-size: clamp(26px, 7vw, 52px) !important; }
          .hero-brand { font-size: clamp(22px, 6vw, 44px) !important; }
        }
          
        .section-inner {
          max-width: 1280px;
          margin: 0 auto;
        }

        .section-title {
          font-family: 'Sora', sans-serif;
          font-size: clamp(26px, 3vw, 42px);
          font-weight: 800;
          color: #0e1a3a;
          margin-bottom: 18px;
        }

        .mini-tabs {
          display: flex;
          gap: 18px;
          margin-bottom: 22px;
          border-bottom: 1px solid #d1d5db;
        }

        .mini-tab {
          background: transparent;
          border: none;
          padding: 0 0 10px;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 600;
          color: #6b7280;
          cursor: pointer;
          border-bottom: 2px solid transparent;
        }

        .mini-tab.active {
          color: #0e1a3a;
          border-bottom-color: #0e1a3a;
        }

        .inspiration-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .inspiration-card {
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid #e5e7eb;
          box-shadow: 0 2px 10px rgba(0,0,0,0.06);
          transition: transform 0.18s ease, box-shadow 0.18s ease;
        }

        .inspiration-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 22px rgba(0,0,0,0.10);
        }

        .inspiration-card img {
          width: 100%;
          height: 190px;
          object-fit: cover;
          display: block;
        }

        .inspiration-card-content {
          padding: 14px 14px 16px;
        }

        .inspiration-card-title {
          font-family: 'Sora', sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: #111827;
          margin-bottom: 6px;
        }

        .inspiration-card-subtitle {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          color: #6b7280;
        }

        .planning-section {
          width: 100%;
          background: #71bdfc;
          padding: 56px clamp(16px, 4vw, 80px) 72px;
        }

        .planning-subtitle {
          font-family: 'DM Sans', sans-serif;
          font-size: 16px;
          color: #6b7280;
          margin-bottom: 26px;
        }

        .planning-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
        }

        .planning-col {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .planning-link {
          text-decoration: none;
          color: #0e1a3a;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 500;
        }

        .planning-link:hover {
          text-decoration: underline;
        }

        .site-footer {
          width: 100%;
          background: #71bdfc;
          color: rgb(0,0,0);
          padding: 36px clamp(16px, 4vw, 80px) 18px;
        }

        .site-footer-inner {
          max-width: 1280px;
          margin: 0 auto;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1fr 1fr;
          gap: 28px;
          padding-bottom: 24px;
          border-bottom: 1px solid rgba(255,255,255,0.12);
        }

        .footer-brand-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
        }

        .footer-brand-name {
          font-family: 'Sora', sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: rgb(0,0,0);
        }

        .footer-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          line-height: 1.7;
          color: rgb(0,0,0);
          max-width: 280px;
        }

        .footer-heading {
          font-family: 'Sora', sans-serif;
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-links a {
          color: rgb(0,0,0 );
          text-decoration: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
        }

        .footer-links a:hover {
          color: rgb(0,0,0);
        }

        .footer-bottom {
          text-align: center;
          padding-top: 18px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          color: rgb(0,0,0);
        }

        @media (max-width: 1100px) {
          .inspiration-grid { grid-template-columns: 1fr; }
          .planning-grid { grid-template-columns: repeat(2, 1fr); }
          .footer-top { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .planning-grid { grid-template-columns: 1fr; }
          .footer-top { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "14px clamp(16px, 4vw, 80px)",
        flexShrink: 0, zIndex: 10,
        borderBottom: "1px solid #ffffff", background: "#141e3a", width: "100%",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img src={logoSrc} alt="Voyaka logo"
            style={{ width: 62, height: 62, borderRadius: 20, objectFit: "contain", filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.15))" }}
          />
          <span style={{ fontFamily: "Arial", fontSize: "28px", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.02em" }}>
            Voyaka
          </span>
        </div>

        <div
          className="nav-links-wrap"
          style={{ display: "flex", gap: 4, flexWrap: "wrap", color: "#ffffff" }}
        >
          {["Destinations", "Package", "Hotels", "About", "Contact"].map((l) => (
            <a
              key={l}
              className="nav-link"
              onClick={() => {
                if (l === "Destinations") navigate("/destinations");
                if (l === "Package") navigate("/package"); // 👉 change to "/deals" if needed
                if (l === "Hotels") navigate("/hotels");
                if (l === "About") navigate("/about");
                if (l === "Contact") navigate("/contact");
              }}
              style={{ cursor: "pointer" }}
            >
              {l}
            </a>
          ))}
        </div>
        <button onClick={() => navigate("/signin")} style={{
          padding: "8px 18px", background: "#0e1a3a", border: "none", borderRadius: 7,
          color: "#ffffff", fontFamily: "'Arial', sans-serif", fontSize: "18px",
          fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap",
        }}>Sign In</button>
      </nav>

      {/* MAIN */}
      <div className="page-container" style={{
        flex: 1, display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", paddingTop: 24, paddingBottom: 24, gap: 18,
      }}>
        {/* Hero */}
        <div style={{ textAlign: "center", width: "100%" }}>
          <p className="hero-brand" style={{ fontFamily: "'Arial', sans-serif", fontSize: 52, fontWeight: 800, color: "#1a1a2e", lineHeight: 1, marginBottom: 8 }}>Voyaka</p>
          <h1 className="hero-title" style={{ fontFamily: "'Arial', sans-serif", fontSize: 52, fontWeight: 800, color: "#1a1a2e", lineHeight: 1.1, marginBottom: 40 }}>
            Best place for booking<br />
            <span style={{ color: "rgb(0,0,0)" }}>trips &amp; adventures</span>
          </h1>
        </div>

        {/* Search Card */}
        <div className="search-card">
          {/* Tabs */}
          <div style={{ display: "flex", gap: 3, marginBottom: 12, background: "#f4f6fb", borderRadius: 11, padding: 3 }}>
            {[
              { id: "flights", label: "Flights", icon: planeIcon, route: "/flights" },
              { id: "hotels", label: "Hotels", icon: hotelIcon, route: "/hotels" },
              { id: "cars", label: "Cars", icon: carIcon, route: "/cars" },
            ].map(({ id, label, icon }) => (
              <button key={id} className={`tab-btn ${activeTab === id ? "active" : ""}`} onClick={() => setActiveTab(id as Tab)}>
                {icon} {label}
              </button>
            ))}
          </div>

          <div style={{ padding: "0 8px" }}>
            {activeTab === "flights" && (
              <>
                {/* Row 1: From / To */}
                <div className="flights-row-1">
                  <div>
                    <label className="form-label">From</label>
                    <div className="input-wrapper">
                      <span className="input-icon">{locationIcon}</span>
                      <input className="search-input" placeholder="Departure city" value={from} onChange={e => setFrom(e.target.value)} />
                    </div>
                  </div>
                  <div>
                    <label className="form-label">To</label>
                    <div className="input-wrapper">
                      <span className="input-icon">{locationIcon}</span>
                      <input className="search-input" placeholder="Arrival city" value={to} onChange={e => setTo(e.target.value)} />
                    </div>
                  </div>
                </div>

                {/* Row 2: Departure / Return / Passengers */}
                <div className="flights-row-2">
                  <div>
                    <label className="form-label">Departure</label>
                    <div className="input-wrapper">
                      <span className="input-icon">{calendarIcon}</span>
                      <input type="date" className="search-input" value={departure} onChange={e => setDeparture(e.target.value)} />
                    </div>
                  </div>
                  <div>
                    <label className="form-label">Return</label>
                    <div className="input-wrapper">
                      <span className="input-icon">{calendarIcon}</span>
                      <input type="date" className="search-input" value={returnDate} onChange={e => setReturnDate(e.target.value)} />
                    </div>
                  </div>
                  <div>
                    <label className="form-label">Passengers</label>
                    <div className="input-wrapper">
                      <span className="input-icon">{usersIcon}</span>
                      <input type="number" min={1} max={20} className="search-input" value={passengers} onChange={e => setPassengers(Number(e.target.value))} />
                    </div>
                  </div>
                </div>

                {/* Row 3: 4 checkbox option pills */}
                <div className="checkboxes-row">
                  <label className={`check-option ${directFlights ? "checked" : ""}`}>
                    <input type="checkbox" checked={directFlights} onChange={e => setDirectFlights(e.target.checked)} />
                    <span className="check-option-emoji">✈️</span>
                    <span className="check-option-label">Direct Flights</span>
                  </label>
                  <label className={`check-option ${nearbyAirport ? "checked" : ""}`}>
                    <input type="checkbox" checked={nearbyAirport} onChange={e => setNearbyAirport(e.target.checked)} />
                    <span className="check-option-emoji">📍</span>
                    <span className="check-option-label">Nearby Airports</span>
                  </label>
                  <label className={`check-option ${addHotel ? "checked" : ""}`}>
                    <input type="checkbox" checked={addHotel} onChange={e => setAddHotel(e.target.checked)} />
                    <span className="check-option-emoji">🏨</span>
                    <span className="check-option-label">Add Hotel</span>
                  </label>
                  <label className={`check-option ${addCar ? "checked" : ""}`}>
                    <input type="checkbox" checked={addCar} onChange={e => setAddCar(e.target.checked)} />
                    <span className="check-option-emoji">🚗</span>
                    <span className="check-option-label">Add Car</span>
                  </label>
                </div>
              </>
            )}

            {activeTab === "hotels" && (
              <>
                <div style={{ marginBottom: 10 }}>
                  <label className="form-label">Destination</label>
                  <div className="input-wrapper">
                    <span className="input-icon">{locationIcon}</span>
                    <input className="search-input" placeholder="City, hotel, or area" />
                  </div>
                </div>
                <div className="hotels-row">
                  <div>
                    <label className="form-label">Check-in</label>
                    <div className="input-wrapper">
                      <span className="input-icon">{calendarIcon}</span>
                      <input type="date" className="search-input" value={checkIn} onChange={e => setCheckIn(e.target.value)} />
                    </div>
                  </div>
                  <div>
                    <label className="form-label">Check-out</label>
                    <div className="input-wrapper">
                      <span className="input-icon">{calendarIcon}</span>
                      <input type="date" className="search-input" value={checkOut} onChange={e => setCheckOut(e.target.value)} />
                    </div>
                  </div>
                  <div>
                    <label className="form-label">Guests</label>
                    <div className="input-wrapper">
                      <span className="input-icon">{usersIcon}</span>
                      <input type="number" min={1} max={20} className="search-input" value={guests} onChange={e => setGuests(Number(e.target.value))} />
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === "cars" && (
              <>
                <div style={{ marginBottom: 10 }}>
                  <label className="form-label">Pick-up Location</label>
                  <div className="input-wrapper">
                    <span className="input-icon">{locationIcon}</span>
                    <input className="search-input" placeholder="City or airport" value={pickupLocation} onChange={e => setPickupLocation(e.target.value)} />
                  </div>
                </div>
                <div className="cars-row">
                  <div>
                    <label className="form-label">Pick-up Date</label>
                    <div className="input-wrapper">
                      <span className="input-icon">{calendarIcon}</span>
                      <input type="date" className="search-input" value={pickupDate} onChange={e => setPickupDate(e.target.value)} />
                    </div>
                  </div>
                  <div>
                    <label className="form-label">Drop-off Date</label>
                    <div className="input-wrapper">
                      <span className="input-icon">{calendarIcon}</span>
                      <input type="date" className="search-input" value={dropoffDate} onChange={e => setDropoffDate(e.target.value)} />
                    </div>
                  </div>
                </div>
              </>
            )}

            <button className="search-btn" onClick={() => { }}>
              {searchIcon}
              Search {activeTab === "flights" ? "Flights" : activeTab === "hotels" ? "Hotels" : "Cars"}
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="stats-row">
          {[
            { num: "2M+", label: "Travelers", icon: "✈" },
            { num: "500+", label: "Destinations", icon: "🌍" },
            { num: "120+", label: "Airlines", icon: "🛫" },
            { num: "4.9★", label: "Rating", icon: "⭐" },
          ].map(({ num, label, icon }) => (
            <div key={label} className="stat-card">
              <div style={{ fontSize: 28, marginBottom: 3 }}>{icon}</div>
              <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 30, fontWeight: 800, color: "#1a1a2e", lineHeight: 1 }}>{num}</div>
              <div style={{ fontSize: 16, color: "#555", marginTop: 3 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Inspiration Section */}
      <section className="inspiration-section">
        <div className="section-inner">
          <h2 className="section-title">Plan your next trip</h2>

          <div className="mini-tabs">
            {inspirationTabs.map((tab) => (
              <button
                key={tab}
                className={`mini-tab ${activeInspirationTab === tab ? "active" : ""}`}
                onClick={() => setActiveInspirationTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="inspiration-grid">
            {inspirationCards.map((card) => (
              <div key={card.title} className="inspiration-card">
                <img src={card.image} alt={card.title} />
                <div className="inspiration-card-content">
                  <div className="inspiration-card-title">{card.title}</div>
                  <div className="inspiration-card-subtitle">{card.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planning Section */}
      <section className="planning-section">
        <div className="section-inner">
          <h2 className="section-title">Ready for next adventure</h2>
          <p className="planning-subtitle">Plan next trip with Us</p>

          <div className="planning-grid">
            {planningLinks.map((group, index) => (
              <div key={index} className="planning-col">
                {group.map((link) => (
                  <a key={link} href="#" className="planning-link">
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="site-footer-inner">
          <div className="footer-top">
            <div>
              <div className="footer-brand-row">
                <img
                  src={logoSrc}
                  alt="Voyaka logo"
                  style={{ width: 34, height: 34, borderRadius: 10, objectFit: "contain", background: "#fff" }}
                />
                <span className="footer-brand-name">Voyaka</span>
              </div>
            </div>

            <div>
              <div className="footer-heading">Travellers</div>
              <div className="footer-links">
                <a href="#">Mobile</a>
                <a href="#">Features</a>
                <a href="#">Pricing</a>
              </div>
            </div>

            <div>
              <div className="footer-heading">About</div>
              <div className="footer-links">
                <a href="#" onClick={(e) => { e.preventDefault(); navigate("/about"); }}>About us</a>
                <a href="#">How we work</a>
                <a href="#">Careers</a>
              </div>
            </div>

            <div>
              <div className="footer-heading">Privacy</div>
              <div className="footer-links">
                <a href="#" onClick={(e) => { e.preventDefault(); navigate("/privacy"); }}>Privacy Policy</a>
                <a href="#">Terms of service</a>
                <a href="#">Cookie Policy</a>
              </div>
            </div>

            <div>
              <div className="footer-heading">Contact</div>
              <div className="footer-links">
                <a href="#" onClick={(e) => { e.preventDefault(); navigate("/help"); }}>Help</a>
                <a href="#" onClick={(e) => { e.preventDefault(); navigate("/help"); }}>FAQ</a>
                <a href="#">Feedback</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "12px 40px 16px", borderTop: "1px solid #e5e5e5",
            background: "#f8f8f8",
            position: "relative", zIndex: 1
          }}>
            <button className="regional-btn-a" onClick={() => navigate("/countrypreference")}>
              {globeIcon}
              <span>Australia</span>
              <span style={{ color: "#aaa" }}>·</span>
              <span>English (AU)</span>
              <span style={{ color: "#aaa" }}>·</span>
              <span>$ AUD</span>
            </button>
            <p style={{ color: "#aaa", fontSize: 11 }}>© 2026 Voyaka · All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
