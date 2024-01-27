import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import User from '../../models/User';

export const getAllUsers = async (_: Request, res: Response) => {
	try {
		const users = await User.findAll();

		return res.status(StatusCodes.OK).json(users);
	} catch (error: any) {
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
			.json({ message: error });
	}
};