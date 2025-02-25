"use client"

import { useEffect, useState } from "react"
import { Ticker } from "./Ticker"

export function ClientTicker() {
  const [fontSize, setFontSize] = useState("20px")

  useEffect(() => {
    const updateFontSize = () => {
      setFontSize(window.innerWidth >= 768 ? "40px" : "20px")
    }

    updateFontSize()
    window.addEventListener("resize", updateFontSize)

    return () => {
      window.removeEventListener("resize", updateFontSize)
    }
  }, [])

  return <Ticker text="Thank you for reading!" fontSize={fontSize} />
}

