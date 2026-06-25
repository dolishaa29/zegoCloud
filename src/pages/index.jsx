import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const HomePage = () => {
  const [roomCode, setRoomCode] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (roomCode.trim()) {
      navigate(`/room/${roomCode.trim()}`);
    }
  };

  const generateCode = () => {
    const code = Math.random().toString(36).substring(2, 8).toUpperCase();
    setRoomCode(code);
  };

  return (
    <div className="home">
      {/* Animated background orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <div className="home-content">
        {/* Header */}
        <header className="home-header">
          <div className="logo">
            <div className="logo-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M15 10l4.553-2.276A1 1 0 0121 8.723v6.554a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="logo-text">ConnectNow</span>
          </div>
          <nav className="home-nav">
            <a href="#features" className="nav-link">Features</a>
            <a href="#" className="nav-link">Pricing</a>
            <a href="#" className="nav-btn">Sign up free</a>
          </nav>
        </header>

        {/* Hero */}
        <main className="hero">
          <div className="hero-badge">
            <span className="badge-dot" />
            HD Video &amp; Audio — Always Free
          </div>

          <h1 className="hero-title">
            Meet anyone,<br />
            <span className="gradient-text">anywhere, instantly.</span>
          </h1>

          <p className="hero-subtitle">
            Join or create a room in seconds. No downloads, no sign-up required.<br />
            Crystal-clear video conferencing for teams of any size.
          </p>

          {/* Join Card */}
          <div className="join-card">
            <h2 className="join-title">Join a Room</h2>
            <form onSubmit={handleSubmit} className="join-form">
              <div className="input-group">
                <svg className="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <input
                  id="roomCode"
                  type="text"
                  value={roomCode}
                  onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
                  placeholder="Enter room code (e.g. ABC123)"
                  className="join-input"
                  autoComplete="off"
                  spellCheck="false"
                />
                <button
                  type="button"
                  onClick={generateCode}
                  className="generate-btn"
                  title="Generate a random code"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <button
                type="submit"
                className={`join-btn ${isHovered ? "join-btn-hovered" : ""}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                disabled={!roomCode.trim()}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M15 10l4.553-2.276A1 1 0 0121 8.723v6.554a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Join Meeting
              </button>
            </form>
            <p className="join-hint">
              Don't have a code? Hit the{" "}
              <button type="button" onClick={generateCode} className="hint-link">
                shuffle icon
              </button>{" "}
              to create a new room.
            </p>
          </div>

          {/* Stats */}
          <div className="stats">
            <div className="stat">
              <span className="stat-value">10M+</span>
              <span className="stat-label">Meetings hosted</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-value">150+</span>
              <span className="stat-label">Countries</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-value">99.9%</span>
              <span className="stat-label">Uptime SLA</span>
            </div>
          </div>
        </main>

        {/* Features */}
        <section id="features" className="features">
          {[
            {
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M15 10l4.553-2.276A1 1 0 0121 8.723v6.554a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
              title: "HD Video",
              desc: "Crystal-clear 1080p video with adaptive bitrate for smooth calls.",
            },
            {
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              ),
              title: "Noise Cancellation",
              desc: "AI-powered background noise removal keeps every word clear.",
            },
            {
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              ),
              title: "Screen Share",
              desc: "Share your screen, a window, or a tab with one click.",
            },
            {
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                  <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              ),
              title: "Up to 1000 Participants",
              desc: "Host webinars, town halls, or team standups at any scale.",
            },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="feature-card">
              <div className="feature-icon">{icon}</div>
              <h3 className="feature-title">{title}</h3>
              <p className="feature-desc">{desc}</p>
            </div>
          ))}
        </section>

        <footer className="home-footer">
          <p>© 2026 ConnectNow. Built with ZEGOCLOUD.</p>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
