import { useState } from "react";

export const useInput = (initialValue = 100) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return [
        value,
        {
            value,
            onChange: handleChange,
        },
    ];
};
