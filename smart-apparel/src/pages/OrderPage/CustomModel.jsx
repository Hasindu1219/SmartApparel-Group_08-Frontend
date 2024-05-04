import React from "react";
import { useNavigate } from "react-router-dom";

export default function CustomModel({
  mainText = "main text",
  Image = "image",
  })

  {
  const navigate = useNavigate();

  const handleRegisterOrderBtn = () => {
    navigate("/orderregister");
  };

  return (
    <div class="frame2">
      <h5 id="modelName">{mainText}</h5>
      <img id="modelImage" src={Image} alt="Image" />
      <button
        style={{
          backgroundColor: "#1658E8",
          padding: "10px",
          border: "none",
          borderRadius: "5px",
          color: "white",
          fontWeight: "bold",
          width: "10rem",
          height: "3rem",
          fontSize: "18px",
          display: "flex",
          flexdirection: "row",
          textalign: "center",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        onClick={handleRegisterOrderBtn}
      >
        Register Order
      </button>
    </div>
  );
}
