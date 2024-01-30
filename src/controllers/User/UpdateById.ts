import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import User from '../../models/User';
import schemaUser from '../../validations/userValidator';

export const updateUser = async (req: Request, res: Response) => {
	const { id } = req.params;
	const userData = req.body;

	const userExist = await User.findByPk(id);

	if (!userExist) {
		return res.status(StatusCodes.NOT_FOUND).json({
			message: 'Register not found!'
		});
	}

	try {
		const updateUser = schemaUser.validate(userData);

		await User.update(updateUser, {
			where: { id }
		});
	} catch (error) {
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
			.json({ message: error });
	}
};