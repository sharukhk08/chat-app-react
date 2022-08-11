import React, { useState } from "react";
import "./App.css";
import io from "socket.io-client";
import ChatArea from "./ChatArea";
import JoinRoom from "./JoinRoom";
const socket = io("http://localhost:3001");

function App() {
  const [isRoomJoined, setRoomJoined] = useState(false);
  const [userName, setUserName] = useState("");
  const [room, setRoom] = useState("");

  const joinRoom = () => {
    if (userName !== "" && room !== "") {
      socket.emit("join_room", room);
      setRoomJoined(true);
    }
  };

  return (
    <>
      {isRoomJoined ? (
        <ChatArea userName={userName} room={room} socket={socket} />
      ) : (
        <JoinRoom
          setUserName={setUserName}
          userName={userName}
          joinRoom={joinRoom}
          setRoom={setRoom}
          room={room}
        />
      )}
    </>
  );
}

export default App;
/* 
<script>
	const el = document.getElementById('messages')
	el.scrollTop = el.scrollHeight
</script> */
