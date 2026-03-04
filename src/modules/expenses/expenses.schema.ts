import { z } from "zod"

export const createExpenseSchema = z.object({
  body: z.object({
    title: z.string().min(1),
    amount: z.number().positive(),
    type: z.enum(["income", "expense"]),
  }),
})

export const updateExpenseSchema = z.object({
  body: z.object({
    title: z.string().min(1).optional(),
    amount: z.number().positive().optional(),
    type: z.enum(["income", "expense"]).optional(),
  }),
  params: z.object({
    id: z.string().uuid(),
  }),
})

export const deleteExpenseSchema = z.object({
  params: z.object({
    id: z.string().uuid(),
  }),
})