import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET;

export const signJwtToken = (payload: object): string => {
  return jwt.sign(payload, JWT_SECRET!, {
    expiresIn: "2d",
  });
};

export const verifyJwtToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET!);
};
