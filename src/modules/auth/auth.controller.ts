import { Request, Response } from "express"
import * as authService from "./auth.service"

export async function register(req: Request, res: Response) {
  const user = await authService.register(req.body)
  return res.status(201).json(user)
}

export async function login(req: Request, res: Response) {
  try {
    const result = await authService.login(req.body);
    return res.status(200).json(result);
  } catch (error: any) {
    if (error.message === "INVALID_CREDENTIALS") {
      return res.status(401).json({
        message: "Email or password is incorrect",
      });
    }

    return res.status(500).json({
      message: "Internal server error",
    });
  }
}