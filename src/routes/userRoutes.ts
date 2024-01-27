import { Router } from 'express';

import authenticated from '../middlewares/authenticated';

import { createUser, getAllUsers } from '../controllers/User';

const router = Router();

router.route('/').get(getAllUsers).post(createUser);
router.route('/login').post(authenticated);

export default router;
