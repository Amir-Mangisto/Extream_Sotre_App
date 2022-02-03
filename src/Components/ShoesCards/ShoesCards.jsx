import { ShoesCard } from "../ShoesCard/ShoesCard";
import {  myContext } from "../../context/ShoesContext";
import { useContext } from "react";

export const ShoesCards = () => {
  const { array } = useContext(myContext);
  return (
    <div className="container" >
      {array.map((shoeItem) => { 
       return  <section className="cards">
          <ShoesCard item={shoeItem} />
        </section>;
      })}
    </div>
  );
};
