import React, { useState } from "react";
import { GetInfo } from "../Service/shoes-service.service";

export const EquipmentContext=React.createContext();


export const EquipmentContextProvider = ({children})=>{

    const [equipment,setEquipment]=useState([]);
    return(
        <EquipmentContext.Provider value={{equipment,setEquipment}}>
            {children}
        </EquipmentContext.Provider>
    )
}