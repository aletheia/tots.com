'use client'

import { useState } from 'react'

export function SubscribeForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('Subscribing...')
    // Here you would typically send the email to your API
    await new Promise(resolve => setTimeout(resolve, 1000)) // Simulating API call
    setStatus('Thanks for subscribing!')
    setEmail('')
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="flex items-center border-b border-purple-500 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="email"
          placeholder="Enter your email"
          aria-label="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          className="flex-shrink-0 bg-purple-600 hover:bg-purple-700 border-purple-600 hover:border-purple-700 text-sm border-4 text-white py-1 px-2 rounded-full transition duration-300"
          type="submit"
        >
          Subscribe
        </button>
      </div>
      {status && <p className="mt-2 text-center text-purple-300">{status}</p>}
    </form>
  )
}

