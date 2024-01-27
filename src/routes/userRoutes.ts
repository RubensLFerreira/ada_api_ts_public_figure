import { Router } from 'express';

import authenticated from '../middlewares/authenticated';

import createUser from '../controllers/User/Create';

const router = Router();

router.route('/').post(createUser);
router.route('/login').post(authenticated);

export default router;
