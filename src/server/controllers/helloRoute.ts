import { Request, Response } from 'express';

export default function (req: Request, res: Response) {
  res.json({ greeting: 'Hello from Express 5.x' });
}
