import React,{useContext} from "react";
import {ShirtsContext} from "../../context/ShirtsContext";


export const Shirts = ()=>{
    let {shirt,setShirt} = useContext(ShirtsContext);
    return(
        <div>
            {shirt.map((shirtItem )=> <li>{shirtItem.Brand}</li>)}
        </div>
    )
}