import React, { useEffect, useState } from "react";
import { GetInfo } from "../Service/shirts-service.service";
export const ShirtsContext=React.createContext();

export const ShirtsContextProvider =({children})=>{
    const [shirt,setShirt]=useState([]);
    useEffect(()=>{
        GetInfo().then(res=> setShirt(res))
    },[])
    
        return(
        <ShirtsContext.Provider value={{shirt,setShirt}}>
            {children}
        </ShirtsContext.Provider>
    )
}