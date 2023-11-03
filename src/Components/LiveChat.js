import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "./utils/liveChatSlice";
import store from "./utils/Store";
import { generateRandomMessage, generateRandomName } from "./utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const liveChatMessages = useSelector((store) => store.chat.messages);
  const [livemessage, setLiveMessage] = useState("");

  useEffect(() => {
    //API polling
    const timer = setInterval(() => {
      // generateRandomName & generateRandomMessage are taken stackoverflow
      dispatch(
        addMessages({
          name: generateRandomName(),
          message: generateRandomMessage(20),
        })
      );
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return liveChatMessages ? (
    <>
      <div className="m-1 p-3 border border-black  w-1/11 h-[450px] rounded-md bg-gray-100  overflow-y-scroll flex flex-col-reverse">
        {liveChatMessages.map((chat, index) => (
          <ChatMessage key={index} name={chat.name} message={chat.message} />
        ))}
      </div>
      <form
        className="w-1/11 mx-1 border border-black flex rounded-sm"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessages({
              name: "Venkatesh Basati",
              message: livemessage,
            })
          );

          setLiveMessage("")
        }}
      >
        <input 
          className="p-2 w-full"
          type="text"
          placeholder="Write Comment..."
          value={livemessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-1 bg-yellow-500 w-16">Send</button>
      </form>
    </>
  ) : (
    <div>"Live Chat"</div>
  );
};

export default LiveChat;
