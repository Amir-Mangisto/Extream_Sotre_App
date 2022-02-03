
import {ShoesContextProvider} from "../../context/ShoesContext"
import { ShoesCards } from "../ShoesCards/ShoesCards";

const Shoes = ()=>{

    return(
        <ShoesContextProvider>
            <h1 className="title"> All Shoes :</h1>
            <ShoesCards/>
        </ShoesContextProvider>        
    )
}
export default Shoes;