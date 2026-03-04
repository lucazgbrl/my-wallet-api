import { Router } from "express"
import * as controller from "./expenses.controller"
import { authMiddleware } from "@/middlewares/auth.middleware"
import { validate } from "@/middlewares/validate.middleware"
import {
  createExpenseSchema,
  updateExpenseSchema,
  deleteExpenseSchema,
} from "./expenses.schema"

const router = Router()

router.use(authMiddleware)

router.get("/", controller.list)
router.post("/", validate(createExpenseSchema), controller.create)
router.put("/:id", validate(updateExpenseSchema), controller.update)
router.delete("/:id", validate(deleteExpenseSchema), controller.remove)

export default router