import React, { useState } from "react";
import { updateTasks } from "../../../api";

const Form = (props) => {
    const [task, setTask] = useState('');
    const [deadline, setDeadline] = useState('')

    const addTask = async function () {
        if (task && deadline && props.currUser) {
            const currentUser = props.currUser;
            const updatedTasks = props.tasks.concat([{ task, deadline }])
            updateTasks(currentUser, updatedTasks)
                .then((res) => {
                    if (res.data?.updateTasks) {
                        updatedTasks[updatedTasks.length - 1]._id = res.data.newId;
                        props.setTasks(updatedTasks)
                    }
                })
                .catch((err) => console.log(err.message));
        }
        else {
            alert('You must log in to add tasks');
        }
        setTask('');
        setDeadline('');
    }

    return (
        <div className="form">
            <h1>Tasks</h1>
            <input type="text" value={task} placeholder="New Task" onChange={(e) => setTask(e.target.value)}></input>
            <input type="text" value={deadline} placeholder="Deadline" onChange={(e) => setDeadline(e.target.value)}></input>
            <button className="addTask" onClick={addTask}>Add Task</button>
        </div>
    );
}

export default Form;