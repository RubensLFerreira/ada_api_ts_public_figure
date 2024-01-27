import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Op } from 'sequelize';

import PublicFigure from '../../models/PublicFigure';

export const getByName = async (req: Request, res: Response) => {
	const { name } = req.query; 

	if (!name) {
		return res.status(StatusCodes.BAD_REQUEST)
			.json({ message: 'Name parameter is required!' });
	}

	const figureExists = await PublicFigure.findAll({
		where: {
			name: {
				[Op.like]: `%${name}%`,
			}
		}
	});

	if (!figureExists || figureExists.length === 0) {
		return res.status(StatusCodes.NOT_FOUND)
			.json({ message: 'Register not found!' });
	}

	try {
		res.status(StatusCodes.OK).json({ figureExists });
	} catch (error: any) {
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
			.json({ message: error.message });
	}
};
