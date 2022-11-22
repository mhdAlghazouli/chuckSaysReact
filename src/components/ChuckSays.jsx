import "./chuckSays.css";
import { useState, useEffect } from "react";

const ChuckSays = (props) => {

  return ( 
    <div>
      {props.quoteData}
    </div>
  );
}

export default ChuckSays;