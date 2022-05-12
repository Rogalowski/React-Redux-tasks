import React, { useState } from "react";

const Bulb = () => {
    const [isOn, setIsOn] = useState(false);

    const handleClick = () => {
        setIsOn((state) => !state);
    };

    const buttonStyle = {
        height: "100px",
        width: "100px",
        backgroundColor: isOn ? "yellow" : "black",
    };
    return (
        <div style={buttonStyle}>
            <button onClick={handleClick}>{isOn ? "Off" : "On"}</button>
        </div>
    );
};

export default Bulb;

// import React from "react";
// import ReactDOM from "react-dom";
// import {MathQuestionGame} from "./MathQuestionGame";

// const cars = [
//   {
//     id:1,
//     brand:"BMW"
//   },
//   {
//     id:2,
//     brand:"Tesla"
//   },
//   {
//     id:3,
//     brand:"Mercedes"
//   }
// ]

// const App = () => {

//   const handleClick = (id, brand, event) => {
//     console.log({id},{brand},{event});

//   };
//   const handleClick1 = (event)=>{
//     console.log(event);
//     handleClick(4,"JeszczeInnyButton",event)
//   }
//   return (
//     <>
//       {/*<button onClick={event => handleClick(1, "BMW", event)}>BMW</button>*/}
//       {/*<button onClick={event => handleClick(2, "Tesla", event)}>Tesla</button>*/}
//       {/*<button onClick={event => handleClick(3, "Mercedes", event)}>Mercedes</button>*/}
//       {/*{cars.map(car=><button key={car.id} onClick={e=>handleClick(car.id,car.brand,e)}>{car.brand}</button>)}*/}
//       {cars.map(({id,brand})=><button key={id} onClick={e=>handleClick(id,brand,e)}>{brand}</button>)}

//       <button onClick={handleClick1}>InnyButton</button>
//       <button onClick={(e)=>handleClick1(e)}>JeszczeInnyButton</button>
//     </>
//   );
// };

// ReactDOM.render(
//   <App/>,
//   document.getElementById("app")
// );
