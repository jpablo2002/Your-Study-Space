import User from '../models/newUser.js';

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();

        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createUser = async (req, res) => {
    const user = req.body;

    const newUser = new User(user);
    try {
        await newUser.save();

        res.status(201).json(newUser);
    } catch (err) {
        res.status(409).json({ message: err.message })
    }
}

export const findUser = async (req, res) => {
    const username = req.params.username;
    const password = req.params.password

    const found = await User.findOne({ username });

    if (found && found?.password === password) {
        res.json({ userFound: true, allowLogin: true })
    } else if (found && found?.password !== password) {
        res.json({ userFound: true, allowLogin: false })
    } else {
        res.json({ userFound: false, allowLogin: false })
    }
}

export const updateUserTasks = (req, res) => {
    const newTasks = req.body;

}