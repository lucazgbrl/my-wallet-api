import { Request, Response } from "express"
import * as authService from "./auth.service"

export async function register(req: Request, res: Response) {
  const user = await authService.register(req.body)
  return res.status(201).json(user)
}

export async function login(req: Request, res: Response) {
  const data = await authService.login(req.body)
  return res.json(data)
}