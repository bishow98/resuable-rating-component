import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import StarRating from "./App.js";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <>
      <StarRating maxRating={10} color="blue" onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating}</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {
      <>
        <StarRating
          maxRating={5}
          messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
          onSetRating={() => {}}
        />

        {/* <StarRating
      maxRating={10}
      size={20}
      color="red"
      className="text"
      defaultRating={3}
      onSetRating={() => {}}
      /> */}
        <Test />
      </>
    }
  </React.StrictMode>
);
