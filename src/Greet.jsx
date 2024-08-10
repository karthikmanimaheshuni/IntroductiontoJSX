import React from "react";

function Greet() {
  const date = new Date();
  const currTime = date.getHours();
  let greeting;

  const customStyle = {
    color: " ",
  };

  if (currTime < 12) {
    greeting = "good morning ";
    customStyle.color = "red";
  } else if (currTime < 18) {
    greeting = "good afternoon";
    customStyle.color = "green";
  } else {
    greeting = "good night";
    customStyle.color = "blue";
  }

  return (
    <h1 className="heading" style={customStyle}>
      {greeting}{" "}
    </h1>
  );
}

export default Greet;
