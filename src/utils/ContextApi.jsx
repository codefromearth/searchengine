import { createContext, useState } from "react";

export const Context = createContext();

export const AppContext = (props) => {
     const arr=[]
     
    const [imageSearch ,setImageSearch]=useState(false);
    return(
        <>
 <Context.Provider
 value={{
    imageSearch,
    setImageSearch,
    arr
 }}
 >
{props.children}

 </Context.Provider>

        </>
    );
};
