import React from 'react'
import Link from 'next/link'
import Routes from '../../routes'

export default function Banner() {
  return (
    <div
      id='banner'
      tabIndex='-1'
      className='flex z-50 justify-center py-3 px-4 w-full bg-gray-50 border border-b border-gray-200 dark:border-gray-600 lg:py-4 dark:bg-gray-700'>
      <div className='items-center md:flex'>
        <p className='text-sm font-medium text-gray-900 md:my-0 dark:text-white'>
          <span className='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 hidden md:inline'>
            New
          </span>
          We have launched Flowbite Blocks featuring over 140+ website sections!
          <Link href={Routes.Blocks}>
            <a className='inline-flex items-center ml-2 text-sm font-medium text-blue-600 md:ml-2 dark:text-blue-500 hover:underline'>
              Check it out
              <svg
                className='ml-1 w-4 h-4 text-blue-600 dark:text-blue-500'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  fillRule='evenodd'
                  d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                  clipRule='evenodd'></path>
              </svg>
            </a>
          </Link>
        </p>
      </div>
      {/* <button data-collapse-toggle="banner" id="close-modal" type="button" className="absolute top-4 right-3 inline-flex justify-center items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
        </button> */}
    </div>
  )
}
