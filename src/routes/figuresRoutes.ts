import { Router } from 'express';

import validateToken from '../middlewares/validateToken';
import upload from '../utils/uploadImage';

import { 
	getAllFigures, 
	getByName, 
	createFigure, 
	updateFigure, 
	deleteFigure, 
	getById 
} from '../controllers/PublicFigure';

const router = Router();

router.route('/search-name').get(getByName);

router.route('/')
	.get(getAllFigures)
	.post(validateToken, upload.single('photo'), createFigure);

router.route('/:id')
	.put(validateToken, updateFigure)
	.delete(validateToken, deleteFigure)
	.get(getById);

export default router;