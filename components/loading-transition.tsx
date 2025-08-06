"use client"

import { useRouter } from "next/navigation"
import { useCallback } from "react"
import LoadingOverlay from "./loading-overlay"

export function useLoadingTransition() {
  const router = useRouter()

  const handleTransition = useCallback(
    async (path: string) => {
      // Add a small delay to show loading state
      await new Promise((resolve) => setTimeout(resolve, 100))
      router.push(path)
    },
    [router],
  )

  return { handleTransition }
}

function LoadingTransition() {
  return <LoadingOverlay message="Loading..." />
}
