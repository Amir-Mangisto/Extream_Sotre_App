import React, { useContext } from "react";
import {PantsContext} from '../../context/PantsContext';



export const Pants = ()=>{
let {pants,setPants}=useContext(PantsContext);
    return(
        <div>
            {pants.map((pantsItem)=> <li>{pantsItem.Price}</li>)}
        </div>
    )
}