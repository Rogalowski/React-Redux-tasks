import React, { useState, useEffect } from "react";

export const WhoIsPresent = () => {
    const [listChoosen, setListChoosen] = useState([]);
    const [listPresent, setListPresent] = useState([
        "Anna Kowalska",
        "Jan Kowalski",
        "Maciej von Handerburg",
        "Jurand ze Spychowa",
    ]);
    const [actualOption, setActualOption] = useState({
        value: "Anna Kowalska",
    });
    // const [selectedOption, setSelectedOption] = useState("");
    const handlePersonPresent = (e, actualOption) => {
        const selectedOption = e.target.value;
        setActualOption(selectedOption);
        console.log("e.target.value: ", e.target.value);
        console.log("selectedOption: ", selectedOption);
        console.log("actualOption: ", actualOption);
        setListChoosen([...listChoosen, selectedOption]);
        // let arrayDoListCopy = listPresent.filter((item) => item !== e.target.value);
        // setListPresent([...arrayDoListCopy]);
        // --------------------------LUB-------------------------------
        const arrayDoListCopy = [
            ...listPresent.slice(0, listPresent.indexOf(selectedOption)),
            ...listPresent.slice(listPresent.indexOf(selectedOption) + 1),
        ];
        setListPresent(arrayDoListCopy);
    };

    return (
        <>
            <form>
                <select
                    defaultValue={actualOption}
                    // onChange={handlePersonPresent}
                    // onClick={handlePersonPresent}
                >
                    {listPresent.map((per, index) => (
                        <option onClick={handlePersonPresent} key={index}>
                            {per}
                        </option>
                    ))}
                </select>
            </form>
            <ul>
                {listChoosen.map((per, index) => (
                    <li key={index}>{per}</li>
                ))}
            </ul>
        </>
    );
};

// import React, { useState, useEffect } from "react";

// export const WhoIsPresent = () => {
//     // const [actualOption, setActualOption] = useState("");
//     const [listChoosen, setListChoosen] = useState([]);
//     const [listPresent, setListPresent] = useState([
//         "Choose person",
//         "Anna Kowalska",
//         "Jan Kowalski",
//         "Maciej von Handerburg",
//         "Jurand ze Spychowa",
//     ]);
//     // const [selectedOption, setSelectedOption] = useState("");
//     const handlePersonPresent = (e) => {
//         setListChoosen([...listChoosen, e.target.value]);
//         // let arrayDoListCopy = listPresent.filter((item) => item !== e.target.value);
//         // setListPresent([...arrayDoListCopy]);
//         // --------------------------LUB-------------------------------
//         const arrayDoListCopy = [
//             ...listPresent.slice(0, listPresent.indexOf(e.target.value)),
//             ...listPresent.slice(listPresent.indexOf(e.target.value) + 1),
//         ];
//         setListPresent(arrayDoListCopy);
//     };

//     return (
//         <>
//             <form>
//                 <select value={listPresent[0]} onChange={handlePersonPresent}>
//                     {listPresent.map((per, index) => (
//                         <option value={per} key={index}>
//                             {per}
//                         </option>
//                     ))}
//                 </select>
//             </form>
//             <ul>
//                 {listChoosen.map((per, index) => (
//                     <li key={index}>{per}</li>
//                 ))}
//             </ul>
//         </>
//     );
// };

// import React, { useState, useEffect } from "react";

// export const WhoIsPresent = () => {
//     // const [actualOption, setActualOption] = useState("");

//     const [listPresent, setListPresent] = useState([
//         "Anna Kowalska",
//         "Jan Kowalski",
//         "Maciej von Handerburg",
//         "Jurand ze Spychowa",
//     ]);
//     const [listChoosen, setListChoosen] = useState([]);

//     // const [selectedOption, setSelectedOption] = useState("");
//     const handlePersonPresent = (e) => {
//         console.log(e.target.value, listPresent);
//         const choosen = e.target.value;
//         setListPresent((prev) => [
//             ...prev.filter((el) => {
//                 return el !== choosen;
//             }),
//         ]);
//         // let arrayDoListCopy = listPresent.filter((item) => item !== e.target.value);
//         // setListPresent([...arrayDoListCopy]);
//         // --------------------------LUB-------------------------------
//         // const arrayDoListCopy = [
//         //     ...listPresent.slice(0, listPresent.indexOf(e.target.value)),
//         //     ...listPresent.slice(listPresent.indexOf(e.target.value) + 1),
//         // ];
//         // setListPresent(arrayDoListCopy);
//         setListChoosen((prev) => [...prev, choosen]);
//     };

//     return (
//         <>
//             <form>
//                 {/* */}
//                 <select>
//                     {listPresent.map((per, index) => {
//                         return (
//                             <option
//                                 onChange={handlePersonPresent}
//                                 value={per}
//                                 key={index}
//                             >
//                                 {per}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </form>
//             <ul>
//                 {listChoosen.map((per, index) => {
//                     return <li key={index}>{per}</li>;
//                 })}
//             </ul>
//         </>
//     );
// };
