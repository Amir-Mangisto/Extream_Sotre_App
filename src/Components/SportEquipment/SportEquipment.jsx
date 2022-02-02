import { useContext } from "react";
import { EquipmentContext } from "../../context/SportEquipmentContext";

export const SportEquipment = () => {
  let { equipment, setEquipment } = useContext(EquipmentContext);
  return (
    <div>
      {equipment.map((eq) => (
        <li>{eq.ProductName}</li>
      ))}
    </div>
  );
};
