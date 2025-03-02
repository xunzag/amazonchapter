"use client"

import { useState, useEffect } from "react"

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem("cookieConsent")
    if (!hasConsented) {
      setShowConsent(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true")
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative bg-white p-6 rounded-lg shadow-xl max-w-lg w-full mx-4">
        <h3 className="text-xl font-bold text-[#0C1C2D] mb-4">Cookie Consent</h3>
        <p className="text-gray-600 mb-6">
          We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept", you consent to our use of cookies.
        </p>
        <div className="flex justify-end space-x-4">
          <a href="/privacy-policy" className="text-[#FF9900] hover:underline">
            Privacy Policy
          </a>
          <button
            onClick={acceptCookies}
            className="bg-[#FF9900] text-white px-4 py-2 rounded-lg hover:bg-[#E68A00] transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
} 