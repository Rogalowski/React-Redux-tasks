import React, { useState, useEffect } from "react";
import { deleteTask } from "./api/tasks";
import { getOperations } from "./api/operations";
export const ListTask = ({
    fetchedTasks,
    setFetchedTasks,
    error,
    fetchedOperations,
    setFetchedOperations,
}) => {
    if (!fetchedTasks) {
        return <h1> LOADING TASKS... {error}</h1>;
    } else {
        return fetchedTasks.map((task, index) => {
            // getOperations(task.id, setFetchedOperations, fetchedOperations);
            // useEffect(() => {
            getOperations(task.id, setFetchedOperations, fetchedOperations);
            // }, [getOperations]);
            // console.log("LLLLLLLLLLL", [fetchedOperations]);
            console.log(fetchedOperations, "dupa");
            return (
                <Task
                    key={task.id}
                    task={task}
                    fetchedTasks={fetchedTasks}
                    setFetchedTasks={setFetchedTasks}
                    fetchedOperations={fetchedOperations?.[index]}
                    setFetchedOperations={setFetchedOperations}
                />
            );
        });
    }
};

const Task = ({
    task,
    fetchedTasks,
    setFetchedTasks,
    fetchedOperations,
    setFetchedOperations,
}) => {
    const handleDeleteTask = (e) => {
        // const taskDeletePoint = e.target.value;
        const taskDeletePoint = e.currentTarget.value; //ignoruje ikone na buttonie
        console.log("taskDeletePoint clicked: ", taskDeletePoint);
        // DZIAŁA Z ID NA BUTTONIE:
        const arrayCopyOfTasks = fetchedTasks.filter((taskEle) => {
            if (taskEle.id !== taskDeletePoint) {
                return taskEle;
            }
            deleteTask(taskDeletePoint);
        });
        setFetchedTasks(arrayCopyOfTasks);
        // DZIAŁA Z INDEXEM NA BUTTONIE:
        // let arrayCopyOfTasks = [...fetchedTasks];
        // arrayCopyOfTasks.splice(taskDeletePoint, 1);
        // setFetchedTasks(arrayCopyOfTasks);
    };

    const formatDate = new Date(task.addedDate);

    return (
        <>
            <section className="card mt-5 shadow-sm">
                <div
                    key={task.id}
                    className="card-header d-flex justify-content-between align-items-center"
                >
                    <div>
                        <p
                            style={{ fontSize: 11 }}
                            className="card-subtitle text-muted"
                        >
                            <b>Added: </b>
                            {formatDate.toLocaleString()}
                        </p>
                        <h5>{task.title}</h5>

                        <h6 className="card-subtitle text-muted">
                            {task.description}
                        </h6>
                    </div>

                    <div>
                        {/*
  <!--
    Przyciski "Add operation" i "Finish" mają być widoczne
    tylko jeżeli status zadania jest "open"
  --> */}
                        <button
                            disabled={task.status == "open" ? false : true}
                            className="btn btn-info btn-sm mr-2"
                        >
                            Add operation
                            <i className="fas fa-plus-circle ml-1"></i>
                        </button>
                        <button
                            disabled={task.status == "open" ? false : true}
                            className="btn btn-dark btn-sm"
                        >
                            Finish
                            <i className="fas fa-archive ml-1"></i>
                        </button>

                        {/* <!--
    Przycisk usuwania ma być widoczny tylko
    jeżeli nie ma żadnych operacji w zadaniu
  --> */}
                        <button
                            value={task.id}
                            onClick={handleDeleteTask}
                            className="btn btn-outline-danger btn-sm ml-2"
                        >
                            <i className="fas fa-trash false"></i>
                        </button>
                    </div>
                </div>

                {/* <!-- Komponent Operations --> */}
                <TaskOperatoins
                    task={task}
                    fetchedOperations={fetchedOperations}
                />
            </section>
        </>
    );
};

const TaskOperatoins = ({ fetchedOperations, task }) => {
    // useEffect(() => {
    //     getOperations(task, setFetchedOperations, fetchedOperations);
    // }, [getOperations]);

    if (!fetchedOperations) {
        return <h1> LOADING OPERATIONS... </h1>;
    }
    // return
    else {
        console.log("FFFFFF ", fetchedOperations[0][4]);
        return fetchedOperations.map((oper, index) => {
            if (oper != undefined) {
                return <Operation key={index} index={index} oper={oper} />;
            }
        });
    }
};

const Operation = ({ oper, index }) => {
    return (
        <>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                    Opis operacji {index}
                    {/* <!-- Czas wyświetlany tylko jeżeli większy od 0    --> */}
                    <span className="badge badge-success badge-pill ml-2">
                        2h 15m
                    </span>
                </div>

                {/* <!-- Formularz wyświetlany po naciśnięciu "Add time", po zapisie czasu znika --> */}
                <form>
                    <div className="input-group input-group-sm">
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Spent time in minutes"
                            style={{ width: 12 + "rem" }}
                        />
                        <div className="input-group-append">
                            <button className="btn btn-outline-success">
                                <i className="fas fa-save"></i>
                            </button>
                            <button className="btn btn-outline-dark">
                                <i className="fas fa-times false"></i>
                            </button>
                        </div>
                    </div>
                </form>

                {/* <!-- div wyświetlany domyślnie, znika po wciśnięciu "Add time" --> */}
                <div>
                    {/* <!-- Przycisk widoczny tylko jeżeli status zadania jest "open" --> */}
                    <button className="btn btn-outline-success btn-sm mr-2">
                        Add time
                        <i className="fas fa-clock ml-1"></i>
                    </button>

                    <button className="btn btn-outline-danger btn-sm">
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
            </li>
        </>
    );
};
