import axios from 'axios';

// 'http://localhost:4000/users'
const url = 'https://your-study-space.herokuapp.com/users';

export const fetchUsers = () => axios.get(url);

export const addUser = (user) => axios.post(url, user);

export const findUser = (username, password) => axios.get(url + `/${username}/${password}`);

export const updateTasks = (username, newTasks) => axios.patch(url + `/${username}`, newTasks);

export const fetchUserTasks = (username) => axios.get(url + `/${username}`);
