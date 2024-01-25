import { Router } from "express";

import createFigure from "../controllers/CreateFigure";
import getAllFigures from '../controllers/GetAllFigures';

const router = Router();

router.route('/').get(getAllFigures).post(createFigure);

export default router;