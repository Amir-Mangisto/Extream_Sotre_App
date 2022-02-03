
import {ShoesContextProvider} from "../../context/ShoesContext"
import { ShoesCards } from "../ShoesCards/ShoesCards";

const Shoes = ()=>{

    return(
        <ShoesContextProvider>
            <ShoesCards/>
        </ShoesContextProvider>        
    )
}
export default Shoes;