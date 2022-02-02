import React, { useEffect, useState } from "react";
import {GetInfo} from "../Service/shoes-service.service"


export const myContext = React.createContext();
let namesArr =["name1","name2","name3"];

export const ShoesContextProvider = ({children})=>{
    const [array,setArray]=useState([])
    useEffect(()=>{
        GetInfo().then(res =>setArray(res))
    },[])
    
    return(
        <myContext.Provider value={{array,setArray}}>
            {children}
        </myContext.Provider>
    )
}