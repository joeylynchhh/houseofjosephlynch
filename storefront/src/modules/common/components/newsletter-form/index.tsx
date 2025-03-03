"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { medusaClient } from "@lib/config"

type NewsletterFormData = {
  email: string
  gender: "Woman" | "Man" | "All"
}

const NewsletterForm = () => {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { register, handleSubmit, reset } = useForm<NewsletterFormData>()

  const onSubmit = async (data: NewsletterFormData) => {
    try {
      const response = await fetch("/store/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          gender: data.gender,
        }),
      })

      if (!response.ok) {
        throw new Error("Subscription failed")
      }

      setSuccess(true)
      setError(null)
      reset()
    } catch (err) {
      setError("Something went wrong. Please try again.")
      setSuccess(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-2">
      <input
        type="email"
        placeholder="Email"
        {...register("email", { required: true })}
        className="bg-transparent border-b border-gray-200 py-2 focus:outline-none focus:border-black"
      />
      
      <div className="flex gap-x-4 py-2">
        <label className="flex items-center gap-x-2">
          <input
            type="radio"
            value="Woman"
            {...register("gender")}
            defaultChecked
            className="form-radio"
          />
          <span>Woman</span>
        </label>
        
        <label className="flex items-center gap-x-2">
          <input
            type="radio"
            value="Man"
            {...register("gender")}
            className="form-radio"
          />
          <span>Man</span>
        </label>
        
        <label className="flex items-center gap-x-2">
          <input
            type="radio"
            value="All"
            {...register("gender")}
            className="form-radio"
          />
          <span>All</span>
        </label>
      </div>

      <button
        type="submit"
        className="bg-transparent border border-gray-200 px-4 py-2 hover:bg-gray-50"
      >
        Subscribe
      </button>

      {success && (
        <p className="text-green-600 text-small-regular">
          Thanks for subscribing!
        </p>
      )}
      
      {error && (
        <p className="text-red-600 text-small-regular">
          {error}
        </p>
      )}
    </form>
  )
}

export default NewsletterForm 