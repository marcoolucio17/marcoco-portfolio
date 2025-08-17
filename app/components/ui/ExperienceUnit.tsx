'use client'

import { useState } from 'react'

export function ExperienceUnit({ 
  title, 
  period, 
  description 
}: { 
  title: string
  period: string
  description?: string
}) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div 
      className="flex flex-col gap-4 cursor-pointer rounded-lg transition-color w-full"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <button className="flex items-center justify-between">
        <div className="flex flex-col gap-2 items-start">
          <h2 className="font-mono underline">{title}</h2>
          <h3 className="font-mono text-sm">{period}</h3>
        </div>
        
        {description && (
          <div className={`transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
            {/* down arrow icon. might change this later. */}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        )}
      </button>

      {description && (
        <div className={`
          overflow-hidden transition-all duration-300 ease-out
          ${isExpanded ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}
        `}>
          <p className="text-sm  font-mono leading-relaxed pt-2 border-t border-gray-400 dark:border-gray-700">
            {description}
          </p>
        </div>
      )}
    </div>
  )
}