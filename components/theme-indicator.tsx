"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function ThemeIndicator() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed bottom-4 left-4 z-50 opacity-50 hover:opacity-100 transition-opacity">
      <div className="bg-background border border-border rounded-lg px-3 py-2 shadow-lg">
        <div className="flex items-center gap-2 text-xs">
          <div className={`w-2 h-2 rounded-full ${resolvedTheme === "dark" ? "bg-blue-500" : "bg-yellow-500"}`} />
          <span className="text-muted-foreground">{resolvedTheme === "dark" ? "Dark" : "Light"} Mode</span>
        </div>
      </div>
    </div>
  )
}
