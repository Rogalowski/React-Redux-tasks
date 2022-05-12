import React, { useState, useEffect } from "react";

export const DynamicLego = () => {
    const [numBlock, setNumBlock] = useState(0);

    const handleChange = (e) => {
        if (e.target.value > 0) {
            setNumBlock(e.target.value);
        } else {
            setNumBlock(0);
        }
    };

    return (
        <form>
            <input
                type="number"
                value={numBlock}
                onChange={handleChange}
            ></input>
            <ul>
                {[...Array(parseInt(numBlock))].map((num, index, array) => {
                    console.log(array);
                    return (
                        <li
                            key={index}
                            style={{
                                background: "red",
                                width: 50 * (index + 1),
                                height: 50,
                            }}
                        >
                            {index + 1}
                        </li>
                    );
                })}
            </ul>
        </form>
    );
};

// import React, { useState, useEffect } from "react";

// export const DynamicLego = () => {
//     const [numBlock, setNumBlock] = useState(0);
//     const [array, setArray] = useState([]);

//     const handleChange = (e) => {
//         setNumBlock(e.target.value);

//         let arrays = [];
//         for (let i = 0; i < e.target.value; i++) {
//             arrays.push(i + 1);
//         }
//         setArray(arrays);
//     };

//     return (
//         <form>
//             <input
//                 type="number"
//                 value={numBlock}
//                 onChange={handleChange}
//             ></input>
//             <ul>
//                 {array.map((num, index) => (
//                     <StyleLego key={index} num={num} />
//                 ))}
//             </ul>
//         </form>
//     );
// };

// const StyleLego = ({ index, num }) => {
//     return (
//         <li
//             style={{
//                 background: "red",
//                 width: 50 * num,
//                 height: 50,
//             }}
//             key={index}
//         >
//             {index}
//         </li>
//     );
// };
