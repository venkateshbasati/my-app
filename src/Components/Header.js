import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "./utils/appSlice";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { YOUTUBE_SEARCH_API } from "./utils/constants";
import { cacheSearchResults, cacheSearchWords } from "./utils/searchSlice";

const Header = () => {
  const [searchQuery, SetSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions]=useState(false);

 const searchCache=useSelector(store=>store.search);

 const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() =>{

    if(searchCache[searchQuery]){
      setSearchSuggestions(searchCache[searchQuery])
    }else{
      getSearchSuggestions()
    }
  }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
  
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const searchresult = await data.json();
    setSearchSuggestions(searchresult[1]);
   
    dispatch(cacheSearchResults({
  [searchQuery]:searchSuggestions
 }))
    
   
    
  };

 

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col py-2 px-1 shadow-sm m-1  items-center">
      <div className="flex gap-2 col-span-1 items-center">
       
        <img
          onClick={() => handleToggleMenu()}
          className="h-8 cursor-pointer "
          alt="hamburger-icon"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0MAAUOBQikpKQpJSadnZ309PUAAAAIAADZ2Nj8/Pyop6cYExXBwMAtKSpta2xpZ2draWpfXV7BwcGvrq77CGWbAAABG0lEQVR4nO3cwXKCMBQFUApFTQAVtf3/Ty3tsKhLZpKSxnP+4M57JCwyt2kAAAAAAAAAAAAAAADgFQ1TX4ZpyJJvvIXYlSGGecyQcI5v5Yi39AGHsHeqJyH9ovYljXAZ4qeEm9W/pc29pCHmOGma8R7iexky3RbLovbHMvR5bnwAAAAAAAAAANhkPJUhV77hcT2U4frI8mToI5zbUpzDJX3A06Hd+7neL22X/mHbpbDXl+mHeOz2DvUk9skT1j/D+r/DZYiVn6UvcB9+2/tnZpUrHgAAAAAAAAAAbDBMe5ftrXK17M619yZq2f1bGfpLp5JGmKWDtv6E9W9p/SfNz22xdxn7Kl/LbuW9+gAAAAAAAAAAAAAAAPCffAHLSDTi5JU+gwAAAABJRU5ErkJggg=="
        ></img>
        {
          // we can use anchor tag wrapped img tag of  youtube-logo
        }
        <img
          className="h-12  cursor-pointer"
          alt="youtube-logo"
          src="https://i.insider.com/59a59a8d79bbfd1d008b601a?width=1200&format=jpeg"
        ></img>
      </div>
      <div className="col-span-10  pl-15 ">
        <div>
          <input
            className=" w-1/2  py-1 px-2   border border-gray-200  shadow-sm rounded-l-full font-normal text-black bg-white"
            placeholder="Search"
            type="text"
            value={searchQuery}
            onChange={(e) => SetSearchQuery(e.target.value)}
            onFocus={()=>setShowSuggestions(true)}
            onBlur={()=>setShowSuggestions(false)}
          ></input>
          <button className=" border border-gray-200 shadow-sm  bg-gray-200 rounded-r-full py-1 px-2 ">
            Search
          </button>
        </div>
        { showSuggestions && <div className=" absolute  bg-white  w-[32em]  shadow-md border border-gray-100 rounded-lg border-">
          <ul className="">
             {searchSuggestions.map((suggestions) => (
              <li className=" text-lg rounded-md font-normal px-3 py-1 shadow-sm  hover:bg-gray-100">
                {suggestions}
              </li>
            ))}
          </ul>
        </div>}
      </div>
      <div className="col-span-1 -mr-12">
        <img
          className="h-7 "
          alt="user-icon"
          src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
        ></img>
      </div>
    </div>
  );
};

export default Header;
