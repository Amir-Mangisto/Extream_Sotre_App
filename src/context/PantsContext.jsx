import React, { useEffect, useState } from "react";
import { GetInfo } from "../Service/pants-service.service";


export const PantsContext = React.createContext();


export const PantsProvider =({children})=>{
    const [pants,setPants]=useState([]);
    useEffect(()=>{
        GetInfo().then(res=>setPants(res))
    },[])
    return(
        <PantsContext.Provider value={{pants,setPants}}>
            {children}
        </PantsContext.Provider>
    )
}