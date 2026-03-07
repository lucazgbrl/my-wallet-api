import { create } from "node:domain"
import { z } from "zod"

export const createExpenseSchema = z.object({
  body: z.object({
    value: z.number().positive(),
    currency: z.string().length(3).toUpperCase(),
    description: z.string().min(1),
    method: z.enum(["cash", "card", "bank_transfer"]),
    tag: z.string().min(1),
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