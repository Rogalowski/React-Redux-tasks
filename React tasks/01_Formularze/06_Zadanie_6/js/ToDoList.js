import React, { useState, useEffect } from "react";

export const ToDoList = () => {
    const [task, setTask] = useState({});
    const [doList, setDoList] = useState([
        {
            id: 1,
            name: "Rzecz do zrobienia",
            done: false,
        },
    ]);

    const handleAddTask = (e) => {
        e.preventDefault();
        if (e.target.userInput.value !== "") {
            console.log("Numer id: ", doList[doList.length - 1].id);
            setDoList((prev) => [...prev, task]);
            e.target.userInput.value = ""; //czyszczenie inputo po id z onsubmit
        }
    };
    const handleChangeInput = (e) => {
        setTask({
            id: doList[doList.length - 1].id + 1,
            name: e.target.value,
            done: false,
        });
    };
    const handleToggleTask = ({ e, el, index }) => {
        // if (e.target.className === "done") {
        //     e.target.className = "";
        // } else {
        //     e.target.className = "done";
        // }
        // console.log("PRZED:  ", doList);
        // let arrayDoListCopy = doList;
        // let item = {
        //     ...doList[{ index }],
        //     id: el.id,
        //     name: el.name,
        //     done: !el.done,
        // };
        // arrayDoListCopy[index] = item;
        // setDoList(arrayDoListCopy);
        // ?--------------------------------------------
        const arrayDoListCopy = [
            ...doList.slice(0, index),
            { id: el.id, name: el.name, done: !el.done },
            ...doList.slice(index + 1),
        ];
        setDoList(arrayDoListCopy);
        // ?--------------------------------------------
        // setDoList(item);
        // setDoList((prev) => [prev, item]);

        console.log("PO:  ", doList);
        console.log("Kliknałem task: ", { index });
        console.log("Kliknałem również na task id: ", el.id);
        // console.log("Kliknałem task: ", e.target.className);
        // console.dir(e.target);
    };
    return (
        <div className="toDoList">
            <form onSubmit={handleAddTask} className="header">
                <h2>Twoja lista zadań</h2>
                <input
                    id={"userInput"}
                    type="text"
                    placeholder="np. Zrobić zakupy"
                    onChange={handleChangeInput}
                />
                <button className="btn-add">Dodaj</button>
            </form>

            <ul>
                {/* <li className="done">Zrobić prezentację</li> */}
                {doList.map((el, index) => {
                    return (
                        <li
                            key={el.id}
                            className={el.done ? "done" : ""}
                            onClick={(e) => handleToggleTask({ e, el, index })}
                            // onClick={handleToggleTask}
                        >
                            {el.name}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
