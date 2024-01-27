import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import PublicFigure from '../../models/PublicFigure';

export const createFigure = async (req: Request, res: Response) => {
	const publicFigureData = req.body;
	const file = req.file;

	if (!file || file === undefined) {
		return res.status(StatusCodes.BAD_REQUEST)
			.json({ message: 'Image is required' });
	}

	publicFigureData.photo = file.filename;

	try {
		const publicFigure = await PublicFigure.create(publicFigureData);

		return res.status(StatusCodes.CREATED).json(publicFigure);
	} catch (error: any) {
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
			.json({ message: error.message });
	}
};