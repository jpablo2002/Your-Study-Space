import React, { useState } from "react";
import { updateTasks } from "../../../api";

const Form = (props) => {
    const [task, setTask] = useState('');
    const [deadline, setDeadline] = useState('')

    const addTask = async function (e) {
        if (task && deadline) {
            const currentUser = props.currUser;
            const updatedTasks = props.tasks.concat([{ task, deadline }])
            updateTasks(currentUser, updatedTasks)
                .then((res) => {
                    if (res.data.updateTasks) {
                        props.setTasks(prevTasks => updatedTasks)
                    }
                })
                .catch((err) => console.log(err.message));
            setTask((prevValue) => '');
            setDeadline((prevValue) => '');
        }
    }

    return (
        <div className="form">
            <h1>New Task</h1>
            <input type="text" value={task} placeholder="New Task" onChange={(e) => setTask(e.target.value)}></input>
            <input type="text" value={deadline} placeholder="Deadline" onChange={(e) => setDeadline(e.target.value)}></input>
            <button className="addTask" onClick={addTask}>Add Task</button>
        </div>
    );
}

export default Form;