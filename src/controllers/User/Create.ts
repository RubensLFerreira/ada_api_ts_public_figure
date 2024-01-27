import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import bcrypt from 'bcrypt';

import User from '../../models/User';
import schemaUser from '../../validations/userValidator';

export const createUser = async (req: Request, res: Response) => {
	const { name, email, password, role } = req.body;

	try {
		const encryptedPassword = await bcrypt.hash(password, 10);

		const user = {
			name,
			email,
			password: encryptedPassword,
			role
		};

		const userValidator = await schemaUser.validate(user);

		await User.create(userValidator);

		res.status(StatusCodes.CREATED).json({ userValidator });
	} catch (error: any) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			message: error.message
		});
	}
};