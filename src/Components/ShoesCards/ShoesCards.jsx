import { ShoesCard } from "../ShoesCard/ShoesCard";
import { myContext } from "../../context/ShoesContext";
import { useContext } from "react";
import Loading from "../Loading/Loading";

export const ShoesCards = () => {
  const { array,isLoading } = useContext(myContext);
  return (
    <div className="main">
      <div className="container">
        
        {isLoading ? // condition if the loading is true then show Loading components else show shoes cards
          <Loading />
         : 
          array.map((shoeItem) => {
            return (
              <section className="cards">
                <ShoesCard item={shoeItem} />
              </section>
            );
          })
        }
      </div>
    </div>
  );
};


