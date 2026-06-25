import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const HomePage = () => {
  const [roomCode, setRoomCode] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (roomCode.trim()) navigate(`/room/${roomCode.trim()}`);
  };

  const generateCode = () =>
    setRoomCode(Math.random().toString(36).substring(2, 8).toUpperCase());

  return (
    <div className="home">
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      <div className="home-content">
  

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
            Join or create a room in seconds. No downloads, no sign-up required.
          </p>

          <div className="join-card">
            <h2 className="join-title">Join a Room</h2>
            <form onSubmit={handleSubmit} className="join-form">
              <div className="input-group">
                <svg className="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <input
                  type="text"
                  value={roomCode}
                  onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
                  placeholder="Enter room code (e.g. ABC123)"
                  className="join-input"
                  autoComplete="off"
                  spellCheck="false"
                />
                <button type="button" onClick={generateCode} className="generate-btn" title="Generate code">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <button type="submit" className="join-btn" disabled={!roomCode.trim()}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M15 10l4.553-2.276A1 1 0 0121 8.723v6.554a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Join Meeting
              </button>
            </form>
            <p className="join-hint">
              No code?{" "}
              <button type="button" onClick={generateCode} className="hint-link">
                Generate one
              </button>
            </p>
          </div>
</main>
      </div>
    </div>
  );
};

export default HomePage;
