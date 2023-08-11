import React, { useContext, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";

import MicIcon from "../assets/mic.svg";
import ImageIcon from "../assets/image.svg";
import { Context } from "../utils/ContextApi";

const SearchInput = () => {

     const {arr}=useContext(Context);
    const { query } = useParams();
    const [showhistory,setShowhistory]=useState(true);
    const [searchQuery, setSearchQuery] = useState(query || "");
    const [history,sethistory]=useState([]);
    const navigate = useNavigate();

    const searchQueryHandler = (event) => {
       
        
        if (event?.key === "Enter" && searchQuery?.length > 0) {
            arr.push(searchQuery);
            
            navigate(`/${searchQuery}/${1}`);

        }
    };
//       ==========change Handle======
  const changehandle=(e)=>
  {
    
       setSearchQuery(e.target.value);

       const matcheddata=arr.filter((item=>{

        return item.includes(searchQuery);
        
       }))
      // console.log(matcheddata)
       sethistory(matcheddata);
       

       
  }

  const historysearchQueryHandler=(item)=>{
    setSearchQuery(item)
    navigate(`/${searchQuery}/${1}`);
    setShowhistory(false);
  }




    return (
        <div>
        <div className="w-80% m-auto">
        <div
            id="searchBox"
            className="h-[46px] w-80%  md:w-[584px] flex items-center gap-3 px-4 border border-[#dfe1e5] rounded-3xl hover:bg-white hover:shadow-c hover:border-0 focus-within:shadow-c focus-within:border-0"
        >
            <AiOutlineSearch size={18} color="#9aa0a6" />
            <input
                type="text"
                onChange={changehandle}
                onKeyUp={searchQueryHandler}
                value={searchQuery}
                autoFocus
                className="grow outline-0 text-black/[0.87] "
            />
            <div className="flex items-center gap-3">
                {searchQuery.trim() && (
                    <IoMdClose
                        size={24}
                        color="#70757a"
                        className="cursor-pointer"
                        onClick={() => setSearchQuery("")}
                    />
                )}
                <img className="h-6 w-6 cursor-pointer" src={MicIcon} alt="" />
                <img
                    className="h-6 w-6 cursor-pointer"
                    src={ImageIcon}
                    alt=""
                />

            </div>
            
           
        </div>
        {
            (searchQuery.length > 0 && showhistory )&& (
              <div  id="history"  className="flex w-full m-auto md:w-[584px]  absolute z-10 flex-col border border-[#dfe1e5] rounded-3xl bg-white hover:shadow-c hover:border-0 focus-within:shadow-c focus-within:border-0">
               
                
                {history.map((item, id) => (

                     
                     <div className=" flex gap-5   p-8 py-2"      onClick={()=>historysearchQueryHandler(item)}>
                    <AiOutlineSearch size={18} color="#9aa0a6" />
                    
                    <p key={id} >
                    {item}
                  </p>
                  </div>
                  
                ))}
              </div>
            )
          }
          

        
          </div>


        </div>
    );
};

export default SearchInput;