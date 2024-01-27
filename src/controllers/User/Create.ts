import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import bcrypt from 'bcrypt';

import User from '../../models/User';

const create = async (req: Request, res: Response) => {
	const { name, email, password, role } = req.body;

	const encryptedPassword = await bcrypt.hash(password, 10);

	try {
		const newUser = await User.create({
			name,
			email,
			password: encryptedPassword,
			role
		});

		// const user = newUser.toJSON();

		res.status(StatusCodes.CREATED).json({ newUser });
	} catch (error: any) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			message: error.message
		});
	}
};

export default create;