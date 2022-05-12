import React from "react";
import { useInput } from "./hooks/useInput";

export const InteractiveDiv = () => {
    const [width, withWidth] = useInput(10);
    const [height, withHeight] = useInput(10);

    let innerDivStyle = {
        height: Number(height) + "px",
        width: Number(width) + "px",
        backgroundColor: "tomato",
    };

    return (
        <div>
            {/* <input type="number" onChange={(e)=>setWidth(e.target.value)} value={width}/> */}
            <input type="number" {...withWidth} />
            <input type="number" {...withHeight} />
            <div style={innerDivStyle} />
        </div>
    );
};

export default InteractiveDiv;

// ---------------------------------------------------PRZED CUSTOM HOOK:
// import React, {useState} from 'react';

// export const InteractiveDiv = () => {
//   const [width, setWidth] = useState(10);

//   let innerDivStyle = {
//     height: '100px',
//     width:Number(width) + 'px',
//     backgroundColor:"tomato",
//   };

//   return (
//     <div>
//       <input type="number" onChange={(e)=>setWidth(e.target.value)} value={width}/>
//       <div style={innerDivStyle}/>
//     </div>
//   );
// };

// export default InteractiveDiv;
