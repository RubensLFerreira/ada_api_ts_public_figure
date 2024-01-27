import 'dotenv/config';
import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as jwt from 'jsonwebtoken';

interface IRequest extends Request {
	user?: any;
}

const validateToken = async (req: IRequest, res: Response, next: NextFunction) => {
	const token = req.headers.authorization?.split(' ')[1];

	if (!token) {
		return res.status(StatusCodes.UNAUTHORIZED).json({
			message: 'Unauthorized!'
		});
	}

	const secret = process.env.SECRET;

	if (secret === undefined) {
		return res.status(StatusCodes.BAD_REQUEST).json({
			message: 'Secret invalided!'
		});
	}

	try {
		const decoded = jwt.verify(token, secret);
		req.user = decoded;

		next();

	} catch (error: any) {
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
			.json({ message: error.message });
	}
};

export default validateToken;