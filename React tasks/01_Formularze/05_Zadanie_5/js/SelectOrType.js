import React, { useEffect, useState } from "react";

export const SelectOrType = ({ items }) => {
    const [options, setOptions] = useState([...items, "Inne"]);
    const [selectedOption, setSelectedOption] = useState(options[1]);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        if (selectedOption === options[options.length - 1]) {
            setShowForm(true);
        } else {
            setShowForm(false);
        }
    }, [selectedOption]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.dir(e.target.userInput.value);
        const newValue = e.target.userInput.value;
        setOptions([...items, newValue]);
        setSelectedOption(newValue);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <select
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    name="carBrands"
                    id="carBrands"
                >
                    {options.map((option) => (
                        <option key={option}>{option}</option>
                    ))}
                </select>
                {showForm && (
                    <>
                        <input type={"text"} id={"userInput"} />
                        <button>Zatwierdź</button>
                    </>
                )}
            </form>
        </div>
    );
};
