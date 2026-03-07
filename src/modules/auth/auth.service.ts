import { prisma } from "@/lib/prisma"
import bcrypt from "bcrypt"
import { generateToken } from "@/utils/generate-token"
import { Prisma } from "@prisma/client"

export async function register(data: any) {
  const hashedPassword = await bcrypt.hash(data.password, 10)

  try {
    const user = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashedPassword,
      },
    })

    return user
  } catch (error: any) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      throw new Error("Email já cadastrado")
    }

    throw error
  }
}

export async function login(data: any) {
  const user = await prisma.user.findUnique({
    where: { email: data.email },
  })

  if (!user) throw new Error("INVALID_CREDENTIALS")

  const passwordMatch = await bcrypt.compare(
    data.password,
    user.password
  )

  if (!passwordMatch) throw new Error("INVALID_CREDENTIALS")

  const token = generateToken({ userId: user.id })

  return { token, user: { id: user.id, name: user.name, email: user.email } }
}
