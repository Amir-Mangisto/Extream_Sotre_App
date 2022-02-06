import React, { useEffect, useState } from "react";
import {GetInfo} from "../Service/shoes-service.service"


export const myContext = React.createContext();
let namesArr =["name1","name2","name3"];

export const ShoesContextProvider = ({children})=>{
    const [array,setArray]=useState([])
    const [isLoading,setIsLoading]=useState(false)
    useEffect(()=>{
        setIsLoading(true)
        GetInfo()
        .then(res =>setArray(res))
        .catch((error)=>console.log(error))
        .finally(()=>{setIsLoading(false)})
    },[])
    
    return(
        <myContext.Provider value={{array,setArray,isLoading}}>
            {children}
        </myContext.Provider>
    )
}