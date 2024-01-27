import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import PublicFigure from '../../models/PublicFigure';
import schemaFigure from '../../validations/figureValidator';

export const updateFigure = async (req: Request, res: Response) => {
	const { id } = req.params;
	const figuresData = req.body;
	const file = req.file;

	const figureExists = await PublicFigure.findByPk(id);

	if (!figureExists) {
		return res.status(StatusCodes.NOT_FOUND)
			.json({ message: 'Register not found!' });
	}

	if (!file || file === undefined) {
		return res.status(StatusCodes.BAD_REQUEST)
			.json({ message: 'Photo is required' });
	}

	figuresData.photo = file.filename;

	try {
		const figuresValidate = await schemaFigure.validate(figuresData);

		await PublicFigure.update(figuresValidate, { where: { id } });

		res.status(StatusCodes.OK)
			.json({ success: 'Registration updated successfully!' });
	} catch (error: any) {
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
			.json({ message: error.message });
	}
};