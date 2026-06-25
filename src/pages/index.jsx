import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [roomCode, setRoomCode] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (roomCode.trim()) {
      navigate(`/room/${roomCode}`);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="roomCode">Enter Room Code</label>
        <input
          id="roomCode"
          type="text"
          value={roomCode}
          onChange={(e) => setRoomCode(e.target.value)}
          placeholder="Enter room code"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default HomePage;
