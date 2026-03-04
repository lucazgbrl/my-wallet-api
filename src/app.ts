import express from "express"
import cors from "cors"

import authRoutes from "./modules/auth/auth.routes"
import expensesRoutes from "./modules/expenses/expenses.routes"

const app = express()

app.use(cors({
    origin: "https://my-wallet-o0m0spui6-lucazgbrls-projects.vercel.app",
}))
app.use(express.json())

app.use("/auth", authRoutes)
app.use("/expenses", expensesRoutes)

export { app }