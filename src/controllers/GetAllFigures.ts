import { Request, Response } from 'express';
import { StatusCodes } from "http-status-codes";

import PublicFigure from "../models/PublicFigure";

const getAllFigures = async (_: Request, res: Response) => {
  try {
    const publicFigures = await PublicFigure.findAll();

    return res.status(StatusCodes.OK).json(publicFigures);
  } catch (error: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.message });
  }
};

export default getAllFigures;
