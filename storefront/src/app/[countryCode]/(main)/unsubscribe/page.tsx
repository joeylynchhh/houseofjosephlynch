"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"

const UnsubscribePage = () => {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const { register, handleSubmit } = useForm()

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/store/newsletter/unsubscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: data.email }),
      })

      if (!response.ok) throw new Error()

      setStatus("success")
    } catch (err) {
      setStatus("error")
    }
  }

  return (
    <div className="content-container flex flex-col items-center py-16">
      <h1 className="text-2xl font-bold mb-8">Unsubscribe from Newsletter</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email", { required: true })}
          className="w-full p-2 border rounded mb-4"
        />
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
        >
          Unsubscribe
        </button>
        
        {status === "success" && (
          <p className="text-green-600 mt-4">
            You have been successfully unsubscribed.
          </p>
        )}
        
        {status === "error" && (
          <p className="text-red-600 mt-4">
            An error occurred. Please try again.
          </p>
        )}
      </form>
    </div>
  )
}

export default UnsubscribePage 