import 'dotenv/config';
import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import User from '../models/User';

interface IRequest extends Request {
	token?: any;
}

const createUserToken = async (req: IRequest, res: Response, next: NextFunction) => {
	const { email, password } = req.body;

	const secret = process.env.SECRET;

	if (secret === undefined) {
		return res.status(StatusCodes.BAD_REQUEST).json({
			message: 'Secret invalided!'
		});
	}

	const onlyUser = await User.findOne({ where: { email } });
	const user = onlyUser?.toJSON();

	if (!user) {
		return res.status(StatusCodes.NOT_FOUND).json({
			message: 'User not found!'
		});
	}

	const validatedPassword = await bcrypt.compare(password, user.password);

	if (!validatedPassword) {
		return res.status(StatusCodes.UNAUTHORIZED).json({
			message: 'Invalid password!'
		});
	}

	const payload = {
		id: user.id,
		email: user.email,
		role: user.role
	};

	const token = jwt.sign(payload, secret, { expiresIn: '1h' });
	req.token = token;

	next();

	res.status(StatusCodes.CREATED).json({
		message: 'Authenticated user!',
		token: token,
		user_id: user.id,
	});
};

export default createUserToken;