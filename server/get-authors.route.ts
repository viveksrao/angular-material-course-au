import { Request, Response } from 'express';
import { AUTHORS } from './db-data';

export function getAllAuthors(req: Request, res: Response){
	res.status(200).json({payload:Object.values(AUTHORS)});
}