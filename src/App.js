import logo from "./logo.svg";
import "./App.css";
import { GetInfo } from "./Service/shoes-service.service";
import { useReducer, useState } from "react";
import { ShoesContextProvider } from "../src/context/ShoesContext";
import Shoes from "./Components/Shoes/Shoes";
import { PantsProvider } from "./context/PantsContext";
import { Pants } from "./Components/Pants/Pants";
import {EquipmentContextProvider} from "../src/context/SportEquipmentContext";
import {SportEquipment} from "./Components/SportEquipment/SportEquipment";
import {ShirtsContextProvider} from "../src/context/ShirtsContext";
import { Shirts } from "./Components/Shirts/Shirts";


const CountReducer = (state,action)=>{
  switch (action.type) {
    case "UP":
      return state + 1;
      case "DOWN":
        return state -1;
        case "RESET":
          return 0; 
          case "PLUS":
          return state + action.payload; 
    default:
      return state

  }
}


function App() {

  //using useReducer hook
  const [countInput,setCountInput]=useState(0);
  const [count,dispatch]=useReducer(CountReducer,0);

  const UpClick=()=>{
    dispatch({type:"UP"})
  }
  const DownClick=()=>{
    dispatch({type:"DOWN"})
  }
  const ResetClick=()=>{
    dispatch({type:"RESET"})
  }
  const PlusClick=()=>{
    dispatch({type:"PLUS",payload:countInput})
  }



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

        {/* <Shoes /> */}

      {/* <PantsProvider>
        <Pants />
      </PantsProvider> */}

      {/* <EquipmentContextProvider>
        <SportEquipment/>
      </EquipmentContextProvider> */}

      {/* <ShirtsContextProvider>
        <Shirts/>
      </ShirtsContextProvider> */}



      {/* useReducer Button */}
      <h1>{count}</h1>
      <button onClick={UpClick}>UP</button>
      <button onClick={DownClick}>DOWN</button>
      <input onChange={(e)=>{setCountInput(e.target.value)}} type="number" />
      <button onClick={PlusClick}>PLUS</button>
      <button onClick={ResetClick}>RESET</button>

    </div>
  );
}

export default App;
