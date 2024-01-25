import { Request, Response } from 'express';
import { StatusCodes } from "http-status-codes";

import PublicFigure from "../models/PublicFigure";

const createFigure = async (req: Request, res: Response) => {
  const PublicFigureData = req.body;

  try {
    const publicFigure = await PublicFigure.create(PublicFigureData);
    return res.status(StatusCodes.CREATED).json(publicFigure);
  } catch (error: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.message });
  }
}

export default createFigure;