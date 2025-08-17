'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function SquareThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="flex flex-row gap-15">
        <div className="flex flex-row items-center gap-2">
          <p className="font-mono text-sm">LIGHT</p>
          <div className="w-5 h-5 border-2 border-black bg-gray-200 animate-pulse" />
        </div>
        <div className="flex flex-row items-center gap-2">
          <p className="font-mono text-sm">DARK</p>
          <div className="w-5 h-5 border-2 border-black bg-gray-200 animate-pulse" />
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-row gap-15">
      {/* Light Theme Checkbox */}
      <div className="flex flex-row items-center gap-2">
        <p className="font-mono text-sm">LIGHT</p>
        <label className="cursor-pointer">
          <input
            type="checkbox"
            checked={theme === 'light'}
            onChange={() => setTheme('light')}
            className="sr-only"
          />
          <div className={`
            w-5 h-5 border-2 border-black transition-all duration-200 flex items-center justify-center hover:scale-110
            ${theme === 'light' 
              ? 'bg-gray-100 border-gray-400' 
              : 'bg-transparent border-black hover:bg-gray-50'
            }
          `}>
            {theme === 'light' && (
              <svg 
                className="w-3 h-3 text-gray-700" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            )}
          </div>
        </label>
      </div>

      {/* Dark Theme Checkbox */}
      <div className="flex flex-row items-center gap-2">
        <p className="font-mono text-sm">DARK</p>
        <label className="cursor-pointer">
          <input
            type="checkbox"
            checked={theme === 'dark'}
            onChange={() => setTheme('dark')}
            className="sr-only"
          />
          <div className={`
            w-5 h-5 border-2 border-black transition-all duration-200 flex items-center justify-center hover:scale-110
            ${theme === 'dark' 
              ? 'bg-gray-900 border-gray-600' 
              : 'bg-transparent border-black hover:bg-gray-900'
            }
          `}>
            {theme === 'dark' && (
              <svg 
                className="w-3 h-3 text-white" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            )}
          </div>
        </label>
      </div>
    </div>
  )
}