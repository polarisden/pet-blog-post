import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const baseColors = [
    { name: 'Brown 600', value: '#26231e', var: '--color-brown-600' },
    { name: 'Brown 500', value: '#43403b', var: '--color-brown-500' },
    { name: 'Brown 400', value: '#75716b', var: '--color-brown-400' },
    { name: 'Brown 300', value: '#dad6d1', var: '--color-brown-300' },
    { name: 'Brown 200', value: '#efeeeb', var: '--color-brown-200' },
    { name: 'Brown 100', value: '#f9f8f6', var: '--color-brown-100' },
    { name: 'White', value: '#ffffff', var: '--color-white' },
  ];

  const brandColors = [
    { name: 'Orange', value: '#f2b68c', var: '--color-brand-orange' },
    { name: 'Green', value: '#12b279', var: '--color-brand-green' },
    { name: 'Green Soft', value: '#d7f2e9', var: '--color-brand-green-soft' },
    { name: 'Red', value: '#eb5164', var: '--color-brand-red' },
  ];

  const typography = [
    { name: 'Headline 1', class: 'text-headline-1', size: '52px (3.25rem)', weight: '600' },
    { name: 'Headline 2', class: 'text-headline-2', size: '40px (2.5rem)', weight: '600' },
    { name: 'Headline 3', class: 'text-headline-3', size: '24px (1.5rem)', weight: '600' },
    { name: 'Headline 4', class: 'text-headline-4', size: '20px (1.25rem)', weight: '600' },
    { name: 'Body 1', class: 'text-body-1', size: '16px (1rem)', weight: '500' },
    { name: 'Body 2', class: 'text-body-2', size: '14px', weight: '500' },
    { name: 'Body 3', class: 'text-body-3', size: '12px', weight: '500' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8" style={{ color: '#26231e' }}>
          Design System
        </h1>

        {/* Colors Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6" style={{ color: '#43403b' }}>
            Colors
          </h2>

          {/* Base Colors */}
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4" style={{ color: '#75716b' }}>
              Base
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {baseColors.map((color) => (
                <div key={color.var} className="flex flex-col">
                  <div
                    className="w-full h-24 rounded-lg shadow-md border border-gray-200"
                    style={{ backgroundColor: color.value }}
                  />
                  <p className="mt-2 text-sm font-medium" style={{ color: '#26231e' }}>
                    {color.name}
                  </p>
                  <p className="text-xs" style={{ color: '#75716b' }}>
                    {color.value.toUpperCase()}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Brand Colors */}
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4" style={{ color: '#75716b' }}>
              Brand
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {brandColors.map((color) => (
                <div key={color.var} className="flex flex-col">
                  <div
                    className="w-full h-24 rounded-lg shadow-md border border-gray-200"
                    style={{ backgroundColor: color.value }}
                  />
                  <p className="mt-2 text-sm font-medium" style={{ color: '#26231e' }}>
                    {color.name}
                  </p>
                  <p className="text-xs" style={{ color: '#75716b' }}>
                    {color.value.toUpperCase()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Typography Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6" style={{ color: '#43403b' }}>
            Fonts
          </h2>

          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-sm mb-6" style={{ color: '#75716b' }}>
              Font Family: Poppins
            </p>

            <div className="space-y-6">
              {typography.map((typo) => (
                <div key={typo.class} className="border-b border-gray-200 pb-4">
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-sm" style={{ color: '#75716b' }}>
                      {typo.name}
                    </span>
                    <span className="text-xs" style={{ color: '#75716b' }}>
                      {typo.size} / Weight: {typo.weight}
                    </span>
                  </div>
                  <p className={typo.class} style={{ color: '#26231e' }}>
                    The quick brown fox jumps over the lazy dog
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
