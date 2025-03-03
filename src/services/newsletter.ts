import { TransactionBaseService } from "@medusajs/medusa"
import { EntityManager } from "typeorm"
import { MedusaError } from "@medusajs/utils"

class NewsletterService extends TransactionBaseService {
  constructor(container) {
    super(container)
  }

  async subscribe({ email, gender }) {
    return await this.atomicPhase_(async (manager) => {
      const customerService = this.container.resolve("customerService")
      
      const existingCustomer = await customerService.retrieveByEmail(email).catch(() => null)
      
      if (existingCustomer) {
        return await customerService.update(existingCustomer.id, {
          metadata: {
            newsletter: true,
            preference: gender,
            subscribed_at: new Date()
          }
        })
      }

      return await customerService.create({
        email,
        metadata: {
          newsletter: true,
          preference: gender,
          subscribed_at: new Date()
        }
      })
    })
  }

  async unsubscribe(email) {
    return await this.atomicPhase_(async (manager) => {
      const customerService = this.container.resolve("customerService")
      
      const customer = await customerService.retrieveByEmail(email).catch(() => null)
      
      if (!customer) {
        throw new MedusaError(
          MedusaError.Types.NOT_FOUND,
          "No subscription found for this email"
        )
      }

      return await customerService.update(customer.id, {
        metadata: {
          ...customer.metadata,
          newsletter: false,
          unsubscribed_at: new Date()
        }
      })
    })
  }

  async exportSubscribers() {
    const customerService = this.container.resolve("customerService")
    
    const subscribers = await customerService.list(
      { metadata: { newsletter: true } },
      {
        select: ["email", "metadata", "created_at"],
        order: { created_at: "DESC" }
      }
    )

    return subscribers.map(sub => ({
      email: sub.email,
      gender: sub.metadata?.preference || "Not specified",
      subscribed_at: sub.metadata?.subscribed_at || sub.created_at
    }))
  }
}

export default NewsletterService 