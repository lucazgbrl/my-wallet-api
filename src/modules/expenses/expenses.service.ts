import { prisma } from "@/lib/prisma"
import { getExchangeRate } from "../currency.service"
import { Prisma } from "@prisma/client"

export async function createExpense(userId: string, data: Prisma.ExpenseCreateInput) {
  const { value, currency, description, method, tag } = data
  const rate = await getExchangeRate(currency, "BRL")
  const valueBRL = Number(value) * rate

  const expense = await prisma.expense.create({
    data: {
      value,
      currency,
      exchangeRate: rate,
      valueBRL,
      description,
      method,
      tag,
      user: { connect: { id: userId } },
    },
  })

  return expense
}

export async function getExpenses(userId: string) {
  return prisma.expense.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  })
}

export async function updateExpense(
  id: string,
  userId: string,
  data: Prisma.ExpenseUpdateInput
) {
  const expense = await prisma.expense.findFirst({
    where: { id, userId },
  })

  if (!expense) {
    throw new Error("Expense not found")
  }

  return prisma.expense.update({
    where: { id },
    data,
  })
}

export async function deleteExpense(id: string, userId: string) {
  const expense = await prisma.expense.findFirst({
    where: { id, userId },
  })

  if (!expense) {
    throw new Error("Expense not found")
  }

  return prisma.expense.delete({
    where: { id },
  })
}