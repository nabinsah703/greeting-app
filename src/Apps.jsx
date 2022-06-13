import React from "react";


let currentDate = new Date();
currentDate = currentDate.getHours();

let greeting = "";
const cssstyle = {};


if (currentDate >= 1 && currentDate < 12) {
  greeting = "Good Morning";
  cssstyle.color = "green";
} else if (currentDate >= 12 && currentDate < 20) {
  greeting = "Good Afternoon";
  cssstyle.color = "purple";
} else {
  greeting = "Good Night";
  cssstyle.color = "red";

}

function Apps() {
  return (
    <div>
      <h1>Hello Sir,<span style={cssstyle}> {greeting}</span></h1>

    </div>
  );

}

export default Apps;