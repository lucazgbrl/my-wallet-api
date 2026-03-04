import { prisma } from "@/lib/prisma"
import bcrypt from "bcrypt"
import { generateToken } from "@/utils/generate-token"

export async function register(data: any) {
  const hashedPassword = await bcrypt.hash(data.password, 10)

  const user = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashedPassword,
    },
  })

  return user
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

  return { token }
}