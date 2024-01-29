import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import path from 'path';

export const getOnePhoto = async (req: Request, res: Response) => {
	const { photoId } = req.params;

	if (!photoId || photoId === undefined) {
		res.status(StatusCodes.BAD_REQUEST)
			.json({ error: 'Missing photoId' });
		return;
	}

	const photoPath = path.join(__dirname, '../../uploads/images', `${photoId}`);
	try {
		res.sendFile(photoPath);
		
	} catch (error: any) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR)
			.json({ error: error.message });
	}
};
