import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import User from '../../models/User';

export const deleteUser = async (req: Request, res: Response) => {
	const { id } = req.params;

	const userExists = await User.findByPk(id);

	if (!userExists) {
		return res.status(StatusCodes.NOT_FOUND)
			.json({ message: 'Register not found!' });
	}

	await User.destroy({ where: { id } });

	try {
		res.status(StatusCodes.OK)
			.json({ success: 'Registration deleted successfully!' });
	} catch (error: any) {
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
			.json({ message: error.message });
	}
};