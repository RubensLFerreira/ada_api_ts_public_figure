import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import PublicFigure from '../../models/PublicFigure';
import schemaFigure from '../../validations/figureValidator';

export const createFigure = async (req: Request, res: Response) => {
	const figuresData = req.body;
	const file = req.file;

	if (!file || file === undefined) {
		return res.status(StatusCodes.BAD_REQUEST)
			.json({ message: 'Photo is required' });
	}

	figuresData.photo = file.filename;

	try {
		const figureValidate = await schemaFigure.validate(figuresData);

		await PublicFigure.create(figureValidate);

		return res.status(StatusCodes.CREATED)
			.json(figureValidate);
	} catch (error: any) {
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
			.json({ message: error.message });
	}
};