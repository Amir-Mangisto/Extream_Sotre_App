import { useContext } from "react";
import {myContext} from "../../context/ShoesContext"

const Shoes = ()=>{
let {array,setArray}=useContext(myContext)
    return(
        <div>
            {
                array.map((item)=> <li>{item.Price}</li>)
            }
        </div>           
    )
}
export default Shoes;