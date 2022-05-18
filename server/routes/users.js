import express from 'express';
import { getUsers, createUser, findUser, updateUserTasks, fetchUserTasks } from '../controllers/users.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/', createUser);
router.get('/:username/:password', findUser);
router.patch('/:username', updateUserTasks);
router.get('/:username', fetchUserTasks)

export default router;