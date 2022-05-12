import React, { useState } from "react";
import { postNewTask } from "./api/tasks";
import { v4 as uuidv4 } from "uuid";

export const AddFormNewTask = ({ fetchedTasks, setFetchedTasks }) => {
    const [titleState, setTitleState] = useState();
    const [descriptionState, setDescriptionState] = useState();
    // const [form, setForm] = useState({
    //     title: { titleState },
    //     description: { descriptionState },
    //     status: "open",
    // });

    // const [postError, setPostError] = useState(error);
    // const [postMessage, setPostMessage] = useState();
    async function handleAddNewTaskSubmit(e) {
        e.preventDefault();
        console.log("Tit, Des:", titleState, descriptionState);
        const dataToPost = {
            id: uuidv4(), // https://stackoverflow.com/questions/61161511/why-is-my-unique-id-posts-after-refresh-browser-react-mongodb-express-node
            title: titleState,
            description: descriptionState,
            status: "open",
        };
        console.log(`New Task prepared:  ${dataToPost}`);
        postNewTask(dataToPost);
        const tempArray = fetchedTasks;
        tempArray.unshift(dataToPost);
        setFetchedTasks([...tempArray]);
        // setFetchedTasks([...fetchedTasks, dataToPost]);

        // postNewTask(dataToPost);
        // .then(() => {
        //     setPostMessage(`New Task added:  ${dataToPost}`);
        // })
        // .catch((err) => {
        //     console.log("Error, Can not add Task: ", err.message);
        //     setPostError(err.message);
        // });
    }

    return (
        <>
            <div className="card shadow">
                <div className="card-body">
                    <h1 className="card-title">New task </h1>
                    {/* {postMessage}
                    {postError} */}
                    <form onSubmit={handleAddNewTaskSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                name="title"
                                placeholder="Title"
                                onChange={(e) => setTitleState(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                name="description"
                                placeholder="Description"
                                onChange={(e) =>
                                    setDescriptionState(e.target.value)
                                }
                            />
                        </div>

                        <button className="btn btn-info">
                            Add task
                            <i className="fas fa-plus-circle ml-1"></i>
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};
