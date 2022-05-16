import React from "react";
import Circle from "./Circle";
import './App.css';

const Circles = ({col,cambiaColore, setSelected}) => {
    

    return(
        <div style={{height: 'auto', display: "inline-block",padding: "5px"}}>
        {col.map((c) => (
            <Circle key={c.id} col={c} setSelected={setSelected} />
            )) 
        } 
   </div>
    )
}

export default Circles