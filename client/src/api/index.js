import axios from 'axios';

// https://your-study-space.herokuapp.com/users
const url = 'http://localhost:4000/users';

export const fetchUsers = () => axios.get(url);

export const addUser = (user) => axios.post(url, user);

export const findUser = (username, password) => axios.get(url + `/${username}/${password}`);

export const updateTasks = (username, newTasks) => axios.patch(url + `/${username}`, newTasks);

export const fetchUserTasks = (username) => axios.get(url + `/${username}`);
