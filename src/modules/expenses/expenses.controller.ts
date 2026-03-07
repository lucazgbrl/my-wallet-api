import { Request, Response } from "express"
import * as expenseService from "./expenses.service"

export async function create(req: Request, res: Response) {
  const expense = await expenseService.createExpense(
    req.user!.userId,
    req.body
  )

  return res.status(201).json(expense)
}

export async function list(req: Request, res: Response) {
  const expenses = await expenseService.getExpenses(
    req.user!.userId
  )

  return res.json(expenses)
}

export async function update(req: Request, res: Response) {
  const expense = await expenseService.updateExpense(
    req.params.id as string,
    req.user!.userId,
    req.body
  )

  return res.json(expense)
}

export async function remove(req: Request, res: Response) {
  await expenseService.deleteExpense(
    req.params.id as string,
    req.user!.userId
  )

  return res.status(204).send()
}