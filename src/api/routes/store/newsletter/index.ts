import { Router } from "express"
import { wrapHandler } from "@medusajs/medusa"

const router = Router()

router.post("/store/newsletter", wrapHandler(async (req, res) => {
  const { email, gender } = req.body
  const newsletterService = req.scope.resolve("newsletterService")
  
  const result = await newsletterService.subscribe({ email, gender })
  
  res.json({ success: true, data: result })
}))

router.post("/store/newsletter/unsubscribe", wrapHandler(async (req, res) => {
  const { email } = req.body
  const newsletterService = req.scope.resolve("newsletterService")
  
  const result = await newsletterService.unsubscribe(email)
  
  res.json({ success: true, data: result })
}))

export default router 