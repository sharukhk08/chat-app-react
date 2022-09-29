import React from "react";

const ChatHeader = ({ userName }) => {
  return (
    <>
      {" "}
      <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
        <div className="relative flex items-center space-x-4">
          <div className="relative">
            <span className="absolute text-green-500 right-0 bottom-0">
              <svg width="20" height="20">
                <circle cx="8" cy="8" r="8" fill="currentColor"></circle>
              </svg>
            </span>
            <img
              src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
              alt=""
              className="w-10 sm:w-16 h-10 sm:h-16 rounded-full"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <div className="text-2xl mt-1 flex items-center capitalize">
              <span className="text-gray-700 mr-3">{userName}</span>
            </div>
            <span className="text-lg text-gray-600">Senior Developer</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 5C0 4.46957 0.210714 3.96086 0.585786 3.58579C0.960859 3.21071 1.46957 3 2 3H9.5C9.98509 2.99994 10.4537 3.17619 10.8185 3.49593C11.1833 3.81566 11.4195 4.25709 11.483 4.738L14.593 3.356C14.7452 3.28817 14.912 3.25946 15.0781 3.27249C15.2443 3.28551 15.4045 3.33985 15.5443 3.43056C15.6841 3.52128 15.7991 3.6455 15.8786 3.79192C15.9582 3.93835 15.9999 4.10235 16 4.269V11.731C15.9999 11.8975 15.9581 12.0614 15.8786 12.2077C15.7991 12.354 15.6843 12.4781 15.5446 12.5688C15.4049 12.6595 15.2448 12.7139 15.0788 12.727C14.9128 12.7401 14.7462 12.7116 14.594 12.644L11.483 11.262C11.4195 11.7429 11.1833 12.1843 10.8185 12.5041C10.4537 12.8238 9.98509 13.0001 9.5 13H2C1.46957 13 0.960859 12.7893 0.585786 12.4142C0.210714 12.0391 0 11.5304 0 11V5Z"
                fill="currentColor"
              />
            </svg>
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
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
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatHeader;
