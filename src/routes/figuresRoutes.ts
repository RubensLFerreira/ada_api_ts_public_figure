import { Router } from 'express';

import validateToken from '../middlewares/validateToken';
import upload from '../utils/uploadImage';

import {
	getAllFigures,
	getByName,
	createFigure,
	updateFigure,
	deleteFigure,
	getById,
	getOnePhoto
} from '../controllers/PublicFigure';

const router = Router();

router.route('/search-name').get(getByName);

router.route('/')
	.get(getAllFigures)
	.post(validateToken, upload.single('photo'), createFigure);

router.route('/:id')
	.put(validateToken, upload.single('photo'), updateFigure)
	.delete(validateToken, deleteFigure)
	.get(getById);

router.route('/photo/:photoId').get(getOnePhoto);

export default router;