import jwt from "jsonwebtoken"

interface GenerateTokenParams {
  userId: string
}

export function generateToken({ userId }: GenerateTokenParams) {
  return jwt.sign(
    { userId },
    process.env.JWT_SECRET as string,
    {
      expiresIn: "1d",
    }
  )
}