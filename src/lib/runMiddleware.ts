// lib/runMiddleware.ts
import { NextApiRequest, NextApiResponse } from "next";
import { RequestHandler } from "express";

export const runMiddleware = (
  req: NextApiRequest,
  res: NextApiResponse,
  middlewares: RequestHandler[]
) => {
  return new Promise<void>((resolve, reject) => {
    const next = (index: number) => {
      if (index === middlewares.length) return resolve();
      const fn = middlewares[index];
      fn(req as any, res as any, (result: any) => {
        if (result instanceof Error) return reject(result);
        return next(index + 1);
      });
    };
    next(0);
  });
};
