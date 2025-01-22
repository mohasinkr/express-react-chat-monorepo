import type { Request, Response } from "express";

const loginController = (req: Request, res: Response) => {
  res.json({ message: "Login successful" });
  return;
};

const registerController = (req: Request, res: Response) => {
  res.json({ message: "Register successful" });
  return;
};

export { loginController, registerController };
