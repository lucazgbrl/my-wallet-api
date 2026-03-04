import { prisma } from "@/lib/prisma"

interface CreateExpenseInput {
  title: string
  amount: number
  type: "income" | "expense"
  userId: string
}

export async function createExpense(data: CreateExpenseInput) {
  return prisma.expense.create({
    data,
  })
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
  data: Partial<Omit<CreateExpenseInput, "userId">>
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