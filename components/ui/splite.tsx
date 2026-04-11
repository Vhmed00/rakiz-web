'use client'

import { Suspense, lazy, useState, useEffect } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [ready, setReady] = useState(false)

  // Defer Spline init until after first paint so it doesn't
  // compete with the page's critical rendering path
  useEffect(() => {
    const hasRIC = typeof requestIdleCallback !== 'undefined'
    const id = hasRIC
      ? requestIdleCallback(() => setReady(true), { timeout: 2000 })
      : setTimeout(() => setReady(true), 300) as unknown as number
    return () => {
      if (hasRIC) cancelIdleCallback(id as number)
      else clearTimeout(id as unknown as ReturnType<typeof setTimeout>)
    }
  }, [])

  return (
    <div className={className}>
      {ready ? (
        <Suspense
          fallback={
            <div className="w-full h-full flex items-center justify-center">
              <span className="loader" />
            </div>
          }
        >
          <Spline scene={scene} className="w-full h-full" />
        </Suspense>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <span className="loader" />
        </div>
      )}
    </div>
  )
}
