import logo from "./logo.svg";
import "./App.css";
import { GetInfo } from "./Service/shoes-service.service";
import { useState } from "react";
import { ShoesContextProvider } from "../src/context/ShoesContext";
import Shoes from "./Components/Shoes/Shoes";
import { PantsProvider } from "./context/PantsContext";
import { Pants } from "./Components/Pants/Pants";
import {EquipmentContextProvider} from "../src/context/SportEquipmentContext";
import {SportEquipment} from "./Components/SportEquipment/SportEquipment";
import {ShirtsContextProvider} from "../src/context/ShirtsContext";
import { Shirts } from "./Components/Shirts/Shirts";


function App() {
  // const [shoes,setShoes]=useState([]);

  // const getMyShoes =()=>{
  //   GetInfo()
  //   .then((info => setShoes(info)))
  // }

  return (
    <div className="App">
      {/* <div>
          {shoes.map((shoeItem) => {
            return <li>{shoeItem.Price}</li>;
          })}
        </div> */}


        <Shoes />
 

      {/* <PantsProvider>
        <Pants />
      </PantsProvider> */}

      {/* <EquipmentContextProvider>
        <SportEquipment/>
      </EquipmentContextProvider> */}

      {/* <ShirtsContextProvider>
        <Shirts/>
      </ShirtsContextProvider> */}
    </div>
  );
}

export default App;
