import React, { useState } from "react";

export const ToDoList = () => {
    const [state, setState] = useState([]);

    const handleClickAddTask = () => {
        const numberTask = "Some Task";
        console.log(state);
        setState((previousState) => [...previousState, numberTask]);
        // setState((previousState) => [...previousState, state]);
    };
    return (
        <>
            <ul>
                {state.map((numTask, index, array) => {
                    return (
                        <RenderTaskList
                            key={index}
                            numTask={numTask}
                            index={index}
                        />
                    );
                })}
            </ul>
            <button onClick={handleClickAddTask}>Dodaj zadanie</button>
        </>
    );
};

const RenderTaskList = ({ numTask, index }) => {
    return (
        <li>
            Zadanie nr {index + 1}: {numTask}
        </li>
    );
};

// import React, { useState } from "react";
// import { v4 as uuidv4 } from "uuid";

// export const ToDoList = () => {
//     const [todoList, setTodoList] = useState([]);

//     const handleClick = () =>
//         setTodoList((state) => [...state, `Task ${state.length + 1}`]);

//     return (
//         <>
//             <button onClick={handleClick}>Add task</button>
//             <ul>
//                 {todoList.map((listElement) => {
//                     return (
//                         <RenderListElement
//                             key={uuidv4()}
//                             listElement={listElement}
//                         />
//                     );
//                 })}
//             </ul>
//         </>
//     );
// };

// const RenderListElement = ({ listElement }) => {
//     return <li>{listElement}</li>;
// };
