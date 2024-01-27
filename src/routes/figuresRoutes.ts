import { Router } from 'express';

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
	.post(createFigure);

router.route('/:id')
	.put(updateFigure)
	.delete(deleteFigure)
	.get(getById);


router.route('/login').get();

export default router;