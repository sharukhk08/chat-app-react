import React, { useEffect, useState, useRef } from "react";
import Peer from "simple-peer";
import io from "socket.io-client";
import { CopyToClipboard } from "react-copy-to-clipboard";

const socket = io("https://carn-app.herokuapp.com");
// const socket = io("http://localhost:4000");

const VideoCallArea = () => {
  const [me, setMe] = useState("");
  const [stream, setStream] = useState();
  const [receivingCall, setReceivingCall] = useState(false);
  const [caller, setCaller] = useState("");
  const [callerSignal, setCallerSignal] = useState();
  const [callAccepted, setCallAccepted] = useState(false);
  const [idToCall, setIdToCall] = useState("");
  const [callEnded, setCallEnded] = useState(false);
  const [name, setName] = useState("");

  const [refreshVideo, setRefreshVideo] = useState(false);

  const myVideoRef = useRef(null);
  const userVideoRef = useRef(null);
  const connectionRef = useRef(null);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setStream(stream);
        if (myVideoRef && stream) {
          myVideoRef.current.srcObject = stream;
        }
      });

    console.log(myVideoRef, "myVideoRef");
    console.log(stream, "stream");

    socket.on("me", (id) => {
      setMe(id);
    });
    socket.on("callUser", (data) => {
      setReceivingCall(true);
      setCaller(data.from);
      setName(data.name);
      setCallerSignal(data.signal);
    });
  }, [myVideoRef, refreshVideo]);

  const callUser = () => {
    const peer = new Peer({
      initiator: true,
      tricle: false,
      stream: stream,
    });

    peer.on("signal", (data) => {
      socket.emit("callUser", {
        userToCall: data.id,
        signalData: data,
        from: me,
        name: name,
      });
    });

    peer.on("stream", (stream) => {
      userVideoRef.current.srcObject = stream;
    });

    peer.on("callAccepted", (signal) => {
      setCallAccepted(true);
      peer.signal(signal);
    });

    connectionRef.current = peer;
  };

  const answerCall = () => {
    setCallAccepted(true);
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: stream,
    });
    peer.on("signal", (data) => {
      socket.emit("answerCall", { signal: data, to: caller });
    });
    peer.on("stream", (stream) => {
      userVideoRef.current.srcObject = stream;
    });

    peer.signal(callerSignal);
    connectionRef.current = peer;
  };

  const leaveCall = () => {
    setCallEnded(true);
    connectionRef.current.destroy();
  };

  return (
    <>
      <div className="lg:p-6 justify-between flex flex-col lg:flex-row h-screen">
        <div className="w-full lg:w-1/2 bg-black rounded-md h-[400px] lg:mx-4">
          {stream && (
            <video
              playsInline
              muted
              ref={myVideoRef}
              autoPlay
              className="w-full bg-black rounded-md h-full"
            ></video>
          )}
          <button
            className="px-6 py-3 bg-orange-500 text-white text-xl rounded-md mt-4"
            onClick={() => setRefreshVideo()}
          >
            Refresh
          </button>
        </div>

        {callAccepted && !callEnded ? (
          <div className="w-full lg:w-1/2 bg-black rounded-md ">
            <video
              playsInline
              muted
              ref={userVideoRef}
              autoPlay
              className="w-[400px] h-[400px]"
            ></video>
          </div>
        ) : null}

        <div className="bg-sky-200 p-10 w-full lg:w-1/2 lg:mx-4">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Full Name"
            className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 px-4 bg-gray-200 rounded-md py-3"
          />

          <CopyToClipboard text={me}>
            <button
              type="button"
              className="my-4 inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-orange-500 hover:bg-blue-400 focus:outline-none"
            >
              Copy Id
            </button>
          </CopyToClipboard>

          <input
            value={idToCall}
            onChange={(e) => setIdToCall(e.target.value)}
            type="text"
            placeholder="ID to Call"
            className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 px-4 bg-gray-200 rounded-md py-3"
          />

          <div className="call-button">
            {callAccepted && !callEnded ? (
              <button
                onClick={leaveCall}
                type="button"
                className="my-4 inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-orange-500 hover:bg-blue-400 focus:outline-none"
              >
                Copy Id
              </button>
            ) : (
              <button
                className="my-4 inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-orange-500 hover:bg-blue-400 focus:outline-none"
                onClick={() => callUser(idToCall)}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.987 2.066C7.42458 1.93407 7.89415 1.95599 8.31754 2.12811C8.74093 2.30023 9.0926 2.61217 9.314 3.012L9.388 3.161L10.05 4.632C10.2509 5.07848 10.3161 5.57418 10.2375 6.05744C10.159 6.54069 9.94003 6.99018 9.608 7.35L9.475 7.482L8.432 8.455C8.244 8.633 8.385 9.322 9.065 10.5C9.677 11.56 10.175 12.055 10.42 12.082H10.463L10.516 12.072L12.566 11.445C12.8415 11.3605 13.1355 11.3572 13.4129 11.4354C13.6903 11.5136 13.9392 11.67 14.13 11.886L14.221 12.001L15.578 13.881C15.8439 14.2495 15.9765 14.6976 15.9538 15.1514C15.931 15.6053 15.7544 16.0379 15.453 16.378L15.331 16.504L14.789 17.018C14.3023 17.4789 13.6935 17.7904 13.0349 17.9154C12.3763 18.0403 11.6957 17.9736 11.074 17.723C9.139 16.943 7.381 15.161 5.784 12.395C4.184 9.622 3.519 7.205 3.816 5.135C3.90587 4.50927 4.16354 3.91956 4.56164 3.4285C4.95973 2.93744 5.48339 2.56336 6.077 2.346L6.27 2.282L6.987 2.066V2.066Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            )}
          </div>
          <h4> {idToCall}</h4>

          <div>
            {receivingCall && !callAccepted ? (
              <div className="caller">
                <h1>{name} is calling...</h1>
                <button
                  className="my-4 inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-orange-500 hover:bg-blue-400 focus:outline-none"
                  onClick={answerCall}
                >
                  Answer
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoCallArea;
