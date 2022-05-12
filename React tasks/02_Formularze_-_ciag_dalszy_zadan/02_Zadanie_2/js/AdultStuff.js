import React, { useState } from "react";

export const AdultStuff = () => {
    const [age, setAge] = useState(0);

    const handleChangeAge = (e) => {
        setAge(e.target.value);
    };

    return (
        <form>
            <input type="number" value={age} onChange={handleChangeAge} />
            <AdultStuffBox age={age} />
        </form>
    );
};

const AdultStuffBox = ({ age }) => {
    if (age >= 18) {
        return <p> Lorem ipsum, treść dla pełnoletnich </p>;
    }
    return <></>;
};

// ---------------------------------------------------------------------

// import React, { useState } from "react";

// export const AdultStuff = () => {
//     const [age, setAge] = useState(0);

//     const handleChangeAge = (e) => {
//         setAge(e.target.value);
//     };

//     return (
//         <form>
//             <AdultStuffBox age={age} onChange={handleChangeAge} />
//         </form>
//     );
// };

// const AdultStuffBox = ({ age, onChange }) => {
//     if (age >= 18) {
//         return <p> Lorem ipsum, treść dla pełnoletnich </p>;
//     }
//     return <input type="number" value={age} onChange={onChange} />;
// };
