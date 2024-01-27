import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import PublicFigure from '../../models/PublicFigure';

export const getById = async (req: Request, res: Response) => {
	const { id } = req.params;

	const figureExists = await PublicFigure.findByPk(id);

	if (!figureExists) {
		return res.status(StatusCodes.NOT_FOUND)
			.json({ message: 'Register not found!' });
	}

	const figure = await PublicFigure.findByPk(id);

	try {
		res.status(StatusCodes.OK).json({ figure });
	} catch (error: any) {
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
			.json({ message: error.message });
	}
};