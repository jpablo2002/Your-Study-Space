import express from 'express';
import { getUsers, createUser, findUser } from '../controllers/users.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/', createUser)
router.get('/:username/:password', findUser)

export default router;