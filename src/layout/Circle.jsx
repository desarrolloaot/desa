import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const CircleFC =  ({ className }) => {
  const circleStyle = {
    width: "23px",
    height: "23px",
    padding: "10px",
    backgroundColor: "white",
    color: "rgb(52,152,219)",
    fontWeight: "bold",
    fontSize: "14px",
    borderRadius: "50%",
    border: "2px solid ",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };

  return <div style={circleStyle} className={className}>FC</div>;
};

export default CircleFC;