import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const APP_ID = Number(import.meta.env.VITE_ZEGOCLOUD_APP_ID);
const SERVER_SECRET = import.meta.env.VITE_ZEGOCLOUD_SERVER_SECRET;

const RoomPage = () => {
  const { roomCode } = useParams();
  const containerRef = useRef(null);

  useEffect(() => {
    const userID = Math.floor(Math.random() * 10000).toString();
    const userName = "User_" + userID;

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      APP_ID,
      SERVER_SECRET,
      roomCode,
      userID,
      userName
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: containerRef.current,
      sharedLinks: [
        {
          name: "Copy Link",
          url: window.location.href,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
    });
  }, [roomCode]);

  return <div ref={containerRef} style={{ width: "100vw", height: "100vh" }} />;
};

export default RoomPage;
