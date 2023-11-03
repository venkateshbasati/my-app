import React from "react";



const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center my-2">
      <img
        className="h-5  "
        alt="user-icon"
        src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
      ></img>
      <span className="font-medium px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
