const JoinRoom = ({ userName, setUserName, joinRoom, setRoom, room }) => {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="max-w-lg mx-auto p-4">
          <h3 className="my-4 text-3xl font-bold">Join A Chat</h3>
          <input
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            type="text"
            placeholder="Hey Muskan!"
            className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 px-4 bg-gray-200 rounded-md py-3"
          />
          <input
            onChange={(e) => setRoom(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                joinRoom(userName, room);
              }
            }}
            value={room}
            type="text"
            placeholder="Enter Room ID"
            className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 px-4 bg-gray-200 rounded-md py-3 mt-4"
          />

          <button
            disabled={!userName || !room}
            onClick={joinRoom}
            type="button"
            className="my-4 inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none"
          >
            Join Room
          </button>
        </div>
      </div>
    </>
  );
};

export default JoinRoom;
