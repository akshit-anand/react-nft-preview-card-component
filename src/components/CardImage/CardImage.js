import React from "react";
import EquiImage from "../../images/image-equilibrium.jpg";
import "./CardImage.css";

const Image = () => {
  return (
    <div>
      <img src={EquiImage} alt="equilibrium" className="card-image" />
    </div>
  );
};

export default Image;
