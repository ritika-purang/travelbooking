import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoSrc from "./logo.png";
import signinBG from "./sigininBG.jpg";

const googleIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const facebookIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const linkedinIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#0A66C2">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const userIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
  </svg>
);

const lockIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const eyeIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" />
  </svg>
);

const eyeOffIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" /><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" /><line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);

export default function SignIn() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ username?: string; password?: string }>({});
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const errs: { username?: string; password?: string } = {};
    if (!username.trim()) errs.username = "Username or email is required";
    if (!password) errs.password = "Password is required";
    else if (password.length < 6) errs.password = "Password must be at least 6 characters";
    return errs;
  };

  const handleLogin = () => {
    setLoginError("");
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setLoading(true);
    // Simulate login API call
    setTimeout(() => {
      setLoading(false);
      // Demo: accept any valid input
      if (username && password.length >= 6) {
        setSuccess(true);
        setTimeout(() => navigate("/"), 1800);
      } else {
        setLoginError("Invalid username or password. Please try again.");
      }
    }, 1200);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleLogin();
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#71bdfc",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Segoe UI', Arial, sans-serif",
      padding: "24px 16px",
      position: "relative",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }

        .si-input {
          width: 100%; padding: 12px 14px 12px 42px;
          border: 1.5px solid #e0e0e0; border-radius: 10px;
          font-size: 15px; color: #1a1a2e; background: #fafafa;
          transition: border-color 0.18s, box-shadow 0.18s; outline: none;
          font-family: inherit;
        }
        .si-input::placeholder { color: #b0b7c3; }
        .si-input:focus {
          border-color: #6c63ff; background: #fff;
          box-shadow: 0 0 0 3px rgba(108,99,255,0.10);
        }
        .si-input.err { border-color: #ef4444; }

        .si-label {
          display: block; font-size: 11px; font-weight: 700;
          color: #6b7280; margin-bottom: 6px;
          letter-spacing: 0.06em; text-transform: uppercase;
        }
        .err-msg { font-size: 11px; color: #ef4444; margin-top: 4px; }

        .login-btn {
          width: 100%; padding: 14px;
          background: linear-gradient(135deg, #1a1a2e 0%, #3a3070 100%);
          color: #fff; border: none; border-radius: 10px;
          font-size: 16px; font-weight: 700; cursor: pointer;
          font-family: 'Sora', sans-serif;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          transition: opacity 0.18s, transform 0.15s;
          letter-spacing: 0.02em;
        }
        .login-btn:hover:not(:disabled) { opacity: 0.9; transform: translateY(-1px); }
        .login-btn:active:not(:disabled) { transform: translateY(0); }
        .login-btn:disabled { opacity: 0.65; cursor: not-allowed; }

        .social-btn {
          flex: 1; display: flex; align-items: center; justify-content: center;
          gap: 7px; padding: 10px 8px;
          background: #ffffff; border: 1.5px solid #ffffff;
          border-radius: 9px; cursor: pointer; font-size: 13px;
          font-weight: 600; color: #374151; font-family: inherit;
          transition: background 0.15s, border-color 0.15s, transform 0.12s;
          white-space: nowrap;
        }
        .social-btn:hover { background: #f9fafb; border-color: #d1d5db; transform: translateY(-1px); }

        .divider {
          display: flex; align-items: center; gap: 12px;
          color: #9ca3af; font-size: 12px;
        }
        .divider::before, .divider::after {
          content: ''; flex: 1; height: 1px; background: #e5e7eb;
        }

        .back-btn {
          display: inline-flex; align-items: center; gap: 6px;
          color: rgba(255,255,255,0.85); background: none; border: none;
          cursor: pointer; font-size: 14px; font-weight: 500;
          font-family: inherit; transition: color 0.15s; padding: 0;
          margin-bottom: 20px;
        }
        .back-btn:hover { color: #fff; }

        .forgot-link {
          font-size: 13px; color: #0e1a3a; font-weight: 600;
          cursor: pointer; text-decoration: none; transition: opacity 0.15s;
        }
        .forgot-link:hover { opacity: 0.75; }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .spinner {
          width: 18px; height: 18px;
          border: 2.5px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }

        .success-overlay {
          position: fixed; inset: 0;
          background: rgba(26,26,46,0.65);
          display: flex; align-items: center; justify-content: center;
          z-index: 100; backdrop-filter: blur(4px);
        }
        .success-card {
          background: #fff; border-radius: 18px;
          padding: 44px 52px; text-align: center;
          box-shadow: 0 24px 64px rgba(0,0,0,0.2);
          animation: popIn 0.3s ease;
        }
        @keyframes popIn {
          from { transform: scale(0.85); opacity: 0; }
          to   { transform: scale(1);    opacity: 1; }
        }
      `}</style>

      {/* Success overlay */}
      {success && (
        <div className="success-overlay">
          <div className="success-card">
            <div style={{ fontSize: 52, marginBottom: 14 }}>✈️</div>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: 22, fontWeight: 800, color: "#1a1a2e", marginBottom: 8 }}>
              Welcome back!
            </h2>
            <p style={{ color: "#6b7280", fontSize: 14 }}>Redirecting you to the homepage…</p>
          </div>
        </div>
      )}

      {/* Back button */}
      <div style={{ width: "100%", maxWidth: 440 }}>
        <button className="back-btn" onClick={() => navigate("/")}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Voyaka
        </button>
      </div>

      {/* Card */}
      <div style={{
        background: "#fff", borderRadius: 20,
        width: "100%", maxWidth: 440,
        padding: "36px 36px 30px",
        boxShadow: "0 24px 64px rgba(0,0,0,0.22)",
      }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 30 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 10 }}>
            <img
              src={logoSrc}
              alt="Voyaka logo"
              style={{ width: 52, height: 52, borderRadius: 14, objectFit: "contain", filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.18))" }}
            />
            <span style={{ fontFamily: "'Sora', sans-serif", fontSize: 24, fontWeight: 800, color: "#1a1a2e" }}>Voyaka</span>
          </div>
          <h1 style={{ fontFamily: "'Sora', sans-serif", fontSize: 22, fontWeight: 800, color: "#1a1a2e", marginBottom: 6 }}>
            Welcome back
          </h1>
          <p style={{ fontSize: 14, color: "rgb(0,0,0)" }}>Sign in to continue your journey</p>
        </div>

        {/* Social buttons */}
        <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
          <button className="social-btn">{googleIcon} Google</button>
          <button className="social-btn">{facebookIcon} Facebook</button>
          <button className="social-btn">{linkedinIcon} LinkedIn</button>
        </div>

        <div className="divider" style={{ color: "rgb(0,0,0)", marginBottom: 20 }}>or sign in with credentials</div>

        {/* Global login error */}
        {loginError && (
          <div style={{
            background: "#fef2f2", border: "1px solid #fecaca",
            borderRadius: 8, padding: "10px 14px", marginBottom: 16,
            display: "flex", alignItems: "center", gap: 8,
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <span style={{ fontSize: 13, color: "#dc2626" }}>{loginError}</span>
          </div>
        )}

        {/* Username field */}
        <div style={{ marginBottom: 16 }}>
          <label className="si-label">Username or Email</label>
          <div style={{ position: "relative" }}>
            <span style={{
              position: "absolute", left: 13, top: "50%", transform: "translateY(-50%)",
              color: "rgb(0,0,0)", display: "flex", alignItems: "center", pointerEvents: "none"
            }}>
              {userIcon}
            </span>
            <input
              className={`si-input${errors.username ? " err" : ""}`}
              type="text"
              placeholder="Enter your username or email"
              value={username}
              onChange={e => { setUsername(e.target.value); setErrors(p => ({ ...p, username: "" })); setLoginError(""); }}
              onKeyDown={handleKeyDown}
              autoComplete="username"
            />
          </div>
          {errors.username && <p className="err-msg">{errors.username}</p>}
        </div>

        {/* Password field */}
        <div style={{ marginBottom: 8 }}>
          <label className="si-label">Password</label>
          <div style={{ position: "relative" }}>
            <span style={{
              position: "absolute", left: 13, top: "50%", transform: "translateY(-50%)",
              color: "rgb(0,0,0)", display: "flex", alignItems: "center", pointerEvents: "none"
            }}>
              {lockIcon}
            </span>
            <input
              className={`si-input${errors.password ? " err" : ""}`}
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={e => { setPassword(e.target.value); setErrors(p => ({ ...p, password: "" })); setLoginError(""); }}
              onKeyDown={handleKeyDown}
              autoComplete="current-password"
              style={{ paddingRight: 42 }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(p => !p)}
              style={{
                position: "absolute", right: 13, top: "50%", transform: "translateY(-50%)",
                background: "none", border: "none", cursor: "pointer",
                color: "#9ca3af", display: "flex", alignItems: "center",
              }}
            >
              {showPassword ? eyeOffIcon : eyeIcon}
            </button>
          </div>
          {errors.password && <p className="err-msg">{errors.password}</p>}
        </div>

        {/* Forgot password */}
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 22 }}>
          <span className="forgot-link">Forgot password?</span>
        </div>

        {/* Login button */}
        <button
          className="login-btn"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading
            ? <><div className="spinner" /> Signing in…</>
            : <>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" /><polyline points="10 17 15 12 10 7" /><line x1="15" y1="12" x2="3" y2="12" />
              </svg>
              Login
            </>
          }
        </button>

        {/* Divider */}
        <div className="divider" style={{ margin: "20px 0" }}>or</div>

        {/* Guest login */}
        <button
          onClick={() => navigate("/")}
          style={{
            width: "100%", padding: "12px",
            background: "#f3f4f6", color: "#374151",
            border: "1.5px solid #e5e7eb", borderRadius: 10,
            font: "600 14px 'Segoe UI', Arial, sans-serif",
            cursor: "pointer", display: "flex", alignItems: "center",
            justifyContent: "center", gap: 8,
            transition: "background 0.15s",
          }}
          onMouseEnter={e => (e.currentTarget.style.background = "#e5e7eb")}
          onMouseLeave={e => (e.currentTarget.style.background = "#f3f4f6")}
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
          </svg>
          Continue as Guest
        </button>

        {/* Sign up link */}
        <p style={{ textAlign: "center", fontSize: 13, color: "rgb(0, 0, 0)", marginTop: 20 }}>
          Don't have an account?{" "}
          <span
            style={{ color: "#0e1a3a", fontWeight: 700, cursor: "pointer" }}
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}
