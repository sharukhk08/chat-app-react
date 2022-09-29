import React, { useState } from "react";
import "./App.css";
import io from "socket.io-client";
import ChatArea from "./ChatArea";
import JoinRoom from "./JoinRoom";
import { Routes, Route, useNavigate } from "react-router-dom";
import VideoCallArea from "./VideoCallArea";
const socket = io("https://carn-app.herokuapp.com");
// const socket = io("http://localhost:4000");

function App() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [room, setRoom] = useState("");

  const joinRoom = () => {
    if (userName !== "" && room !== "") {
      socket.emit("join_room", room);
      navigate(`chat/room?${room}&username=${userName}`);
    }
  };

  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <JoinRoom
              setUserName={setUserName}
              userName={userName}
              joinRoom={joinRoom}
              setRoom={setRoom}
              room={room}
            />
          }
        />
        <Route
          exact
          path="/video-call"
          element={
            <VideoCallArea
              setUserName={setUserName}
              userName={userName}
              joinRoom={joinRoom}
              setRoom={setRoom}
              room={room}
            />
          }
        />
        <Route
          exact
          path="/chat/:id"
          element={<ChatArea userName={userName} room={room} socket={socket} />}
        />
      </Routes>
    </>
  );
}

export default App;
/* 
<script>
	const el = document.getElementById('messages')
	el.scrollTop = el.scrollHeight
</script> */
