import React from "react";

export default function CustomModel({
  mainText = "main text",  // Default text for the mainText prop
  Image = "image",         // Default src for the Image prop
  onRegisterOrder,         // Function to handle the register order action
}) {
  // Function to handle the Register Order button click
  const handleRegisterOrderBtn = () => {
    onRegisterOrder(mainText);  // Calls the onRegisterOrder function with mainText as an argument
  };

  return (
    <div class="frame2">
      {/* Displays the main text */}
      <h5 id="modelName">{mainText}</h5>
      {/* Displays the image */}
      <img id="modelImage" src={Image} alt="Image" />
      {/* Register Order button */}
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
          flexDirection: "row",
          textAlign: "center",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        onClick={handleRegisterOrderBtn}  // Attach the click handler
      >
        Register Order
      </button>
    </div>
  );
}
