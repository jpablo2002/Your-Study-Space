import React, { useEffect, useState } from "react";
import { fetchUserTasks } from "../../../api";

import Form from './Form';
import Note from './Note'

import './Notepad.css'

const Notepad = (props) => {

    useEffect(() => {
        if (props.signedIn) {
            fetchUserTasks(props.currUser)
                .then(res => {
                    props.setTasks(res.data.tasks);
                })
                .catch((err) => {
                    console.log(err.message);
                })
        }
    }, [props.signedIn]);

    return (
        <div className="notepad">
            <Form setTasks={props.setTasks} currUser={props.currUser} tasks={props.tasks} />
            {props.tasks.map((t, i) => <Note task={t.task} deadline={t.deadline} key={i} setTasks={props.setTasks} currUser={props.currUser} tasks={props.tasks} />)}
        </div>
    );
}

export default Notepad;