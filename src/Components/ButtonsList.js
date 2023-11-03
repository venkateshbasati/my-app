import React from "react";
import Buttons from "./Buttons";

const ButtonsList = () => {
  const list = [
    "All",
    "Movies",
    "Cricket",
    "Gaming",
    "Sports",
    "Music",
    "Live",
    "Mixes",
    "News",
    "Tollywood",
    "Debates",
    "Cooking",
   
   
  ];
  return (
    <div className="flex ">
      {list.map((item) => {
        return <Buttons name={item} />;
      })}
    </div>
  );
};

export default ButtonsList;
