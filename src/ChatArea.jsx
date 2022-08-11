import React, { useEffect, useState, useRef } from "react";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import FriendMessage from "./FriendMessage";
import MyMessage from "./MyMessage";

const ChatArea = ({ userName, room, socket }) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sendMessage = async () => {
    if (currentMessage.length > 0) {
      const messageData = {
        user: userName,
        room: room,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      await socket.emit("send_message", messageData);
      setChatMessages((prev) => [...prev, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      if (data.room === room) {
        setChatMessages((prev) => [...prev, data]);
      }
    });
  }, [socket]);

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);
  return (
    <>
      {console.log(chatMessages, "render msg")}
      <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen  ">
        <ChatHeader userName={userName} />
        <div className="h-full flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
          <div
            className="flex flex-col justify-end"
            style={{ height: "calc(100vh - 100px)" }}
          >
            {" "}
            {chatMessages &&
              chatMessages.length > 0 &&
              chatMessages.map((msg) =>
                msg.user === userName ? (
                  <MyMessage message={msg} />
                ) : (
                  <FriendMessage message={msg} />
                )
              )}
            <div ref={messagesEndRef} />
          </div>
        </div>
        <ChatInput
          sendMessage={sendMessage}
          setCurrentMessage={setCurrentMessage}
          currentMessage={currentMessage}
        />
      </div>
    </>
  );
};

export default ChatArea;

//  if (msg.user === userName) {
//    return <MyMessage message={msg} />;
//  } else {
//    return <FriendMessage message={msg} />;
//  }
