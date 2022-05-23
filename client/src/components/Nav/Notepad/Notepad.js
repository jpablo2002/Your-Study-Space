import React, { useEffect } from "react";
import { fetchUserTasks } from "../../../api";

import Form from './Form';
import Note from './Note'

import './Notepad.css'

const Notepad = ({ signedIn, currUser, setTasks, tasks }) => {

    useEffect(() => {
        if (signedIn) {
            fetchUserTasks(currUser)
                .then(res => {
                    setTasks(res.data.tasks);
                })
                .catch((err) => {
                    console.log(err.message);
                })
        }
    }, [signedIn, currUser, setTasks]);

    return (
        <div className="notepad">
            <Form setTasks={setTasks} currUser={currUser} tasks={tasks} />
            {tasks.slice().reverse().map((t) => <Note task={t.task} deadline={t.deadline} key={t._id} setTasks={setTasks} currUser={currUser} tasks={tasks} listId={t._id} />)}
        </div>
    );
}

export default Notepad;