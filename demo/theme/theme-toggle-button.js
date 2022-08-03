import React, { useContext } from 'react'
import { ThemeContext } from './theme-context'
import MoonIcon from '@heroicons/react/solid/MoonIcon'
import SunIcon from '@heroicons/react/solid/SunIcon'

export default function ThemeToggleButton() {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  if (theme === 'dark') {
    return (
      <button
        onClick={toggleTheme}
        type='button'
        className='text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center'>
        <SunIcon className='w-5 h-5' />
      </button>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      type='button'
      className='text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center'>
      <MoonIcon className='w-5 h-5' />
    </button>
  )
}
