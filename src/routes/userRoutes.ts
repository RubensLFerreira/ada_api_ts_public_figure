import { Router } from 'express';

import authenticated from '../middlewares/authenticated';

import { createUser, getAllUsers, updateUser, deleteUser } from '../controllers/User';

const router = Router();

router.route('/')
	.get(getAllUsers)
	.post(createUser);

router.route('/:id')
	.put(updateUser)
	.delete(deleteUser);

router.route('/login')
	.post(authenticated);

export default router;
