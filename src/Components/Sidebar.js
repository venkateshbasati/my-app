import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const isMenuOpen=useSelector(store=>store.app.isMenuOpen)
    //early return
    if(!isMenuOpen)  return null
    
  return (
    <div className="w-48 text-center  p-2 shadow-md">
      <ul className="pt-2 ">
        <Link to="/">
        <li className="py-1 rounded-md hover:bg-gray-100">Home</li></Link>
        <li className="py-1 rounded-md hover:bg-gray-100">Shorts</li>
        <li className="py-1 rounded-md hover:bg-gray-100">Library </li>
        <li className="py-1 rounded-md hover:bg-gray-100">History</li>
      </ul>
      <ul className="pt-2">
        <h2 className="font-bold">Subscriptions</h2>
        <li className="py-1 rounded-md hover:bg-gray-100">Music</li>
        <li className="py-1 rounded-md hover:bg-gray-100">Movies</li>
        <li className="py-1 rounded-md hover:bg-gray-100">Gaming </li>
        <li className="py-1 rounded-md hover:bg-gray-100">Sports</li>
      </ul>
      <ul className="pt-2">
        <h2 className="font-bold">Explore</h2>
        <li className="py-1 rounded-md hover:bg-gray-100">Music</li>
        <li className="py-1 rounded-md hover:bg-gray-100">Movies</li>
        <li className="py-1 rounded-md hover:bg-gray-100">Gaming </li>
        <li className="py-1 rounded-md hover:bg-gray-100">Sports</li>
      </ul>
    </div>
  );
};

export default Sidebar;
