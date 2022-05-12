import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const KEY = "e92601251-c0a2-4s63-v73f-54041195480f";
const URL = "https://fer-api.coderslab.pl/v1/holidays";

async function holidaysAPI(selectCountry) {
    console.log("Country: ", selectCountry);
    const response = await fetch(
        URL + "?key=" + KEY + "&country=" + selectCountry,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    return await response.json();
}

export function Holidays() {
    const [data, setData] = useState([]);
    const [selectCountry, setCountry] = useState("PL");
    useEffect(() => {
        holidaysAPI(selectCountry).then((data) => {
            console.log("Holid: ", selectCountry, " ", data.holidays);
            setData(data.holidays);
        });
    }, [selectCountry]);

    function handleCountry(e) {
        return setCountry(e.target.value);
    }
    if (data.length == 0) {
        return <h1>COLLECTING HOLIDAYS...</h1>;
    } else
        return (
            <div>
                <select onChange={handleCountry}>
                    <option>PL</option>
                    <option>US</option>
                    <option>GB</option>
                </select>
                <ul className={"list"}>
                    {data.map((el, index) => (
                        <li key={index} className={"holiday-date"}>
                            <h3 className={"holiday-name"}>{el.name}</h3>
                            {el.date}
                        </li>
                    ))}
                </ul>
            </div>
        );
}

// export function Holidays(props) {
//     const [selectCountry, setSelectCountry] = useState("PL");
//     const [data, setData] = useState(null);
//     const urlHolidayCountry = URL + "?key=" + KEY + "&country=" + selectCountry;

//     useEffect(() => {
//         const fetchData = async () => {
//             const response = await fetch(urlHolidayCountry);
//             return await response.json();
//         };
//         fetchData().then((data) => {
//             setData(data.holidays);
//         });
//     }, [selectCountry]);

//     if (!data) {
//         return <h1> COLLECTING HOLIDAYS...</h1>;
//     } else {
//         return (
//             <div>
//                 <select onChange={(e) => setSelectCountry(e.target.value)}>
//                     <option>PL</option>
//                     <option>US</option>
//                     <option>GB</option>
//                 </select>
//                 <ul className={"list"}>
//                     {data.map((el, index) => {
//                         return (
//                             <>
//                                 <li key={uuidv4} className={"holiday-date"}>
//                                     <h3 className={"holiday-name"}>
//                                         {el.name}
//                                     </h3>
//                                     {el.date}
//                                 </li>
//                             </>
//                         );
//                     })}
//                 </ul>
//             </div>
//         );
//     }
// }
