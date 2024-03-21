import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StarRating maxRating={10} />
    <StarRating
      size={24}
      color="red"
      className="test"
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      maxRating={5}
    />
  </React.StrictMode>
);
