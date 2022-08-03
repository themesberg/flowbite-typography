import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Routes from '../../routes'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='justify-self-end pt-16 pb-8 bg-gray-50 lg:pt-24 lg:pb-10 dark:bg-gray-800'>
      <div className='px-4 mx-auto max-w-8xl lg:px-4'>
        <div className='grid gap-12 lg:grid-cols-6 lg:gap-24'>
          <div className='col-span-2'>
            <Link href={Routes.Home}>
              <a className='flex mb-6'>
                <Image width={32} height={33} src='/logo.svg' alt='Flowbite Logo' />
                <span className='self-center ml-3 text-2xl font-semibold text-gray-900 dark:text-white'>
                  Flowbite
                </span>
              </a>
            </Link>
            <p className='text-gray-600 dark:text-gray-400'>
              Flowbite is an ecosystem built on top of Tailwind CSS including a component library,
              block sections, a Figma design system and other resources.
            </p>
          </div>
          <div>
            <h3 className='mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white'>
              Resources
            </h3>
            <ul>
              <li className='mb-4'>
                <a
                  href='https://flowbite.com/docs/getting-started/introduction/'
                  className='font-normal text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline'>
                  Documentation
                </a>
              </li>
              <li className='mb-4'>
                <Link href={Routes.Blocks}>
                  <a className='font-normal text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline'>
                    Flowbite Blocks
                  </a>
                </Link>
              </li>
              <li className='mb-4'>
                <Link href={Routes.Figma}>
                  <a className='font-normal text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline'>
                    Figma design
                  </a>
                </Link>
              </li>
              <li className='mb-4'>
                <Link href={Routes.ProDetails.Home}>
                  <a className='font-normal text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline'>
                    Pro version
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white'>
              Help & support
            </h3>
            <ul>
              <li className='mb-4'>
                <Link href={Routes.Contact}>
                  <a className='font-normal text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline'>
                    Contact us
                  </a>
                </Link>
              </li>
              <li className='mb-4'>
                <Link href={Routes.User.Support}>
                  <a className='font-normal text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline'>
                    Support Center
                  </a>
                </Link>
              </li>
              {/* <li className='mb-4'>
                <a
                  href='https://themesberg.com/knowledge-center?ref=flowbite.com'
                  
                  rel='noreferrer'
                  className='font-normal text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline'>
                  Knowledge Center
                </a>
              </li> */}
            </ul>
          </div>
          <div>
            <h3 className='mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white'>
              Follow us
            </h3>
            <ul>
              <li className='mb-4'>
                <a
                  href='https://discord.gg/4eeurUVvTy'
                  rel='noreferrer nofollow'
                  className='font-normal text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline'>
                  Discord
                </a>
              </li>
              <li className='mb-4'>
                <a
                  href='https://github.com/themesberg'
                  rel='noreferrer nofollow'
                  className='font-normal text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline'>
                  Github
                </a>
              </li>
              <li className='mb-4'>
                <a
                  href='https://twitter.com/zoltanszogyenyi'
                  rel='noreferrer nofollow'
                  className='font-normal text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline'>
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white'>
              Legal
            </h3>
            <ul>
              <li className='mb-4'>
                <Link href={Routes.License}>
                  <a className='font-normal text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline'>
                    License (EULA)
                  </a>
                </Link>
              </li>
              <li className='mb-4'>
                <Link href={Routes.PrivacyPolicy}>
                  <a className='font-normal text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline'>
                    Privacy policy
                  </a>
                </Link>
              </li>
              <li className='mb-4'>
                <Link href={Routes.TermsAndConditions}>
                  <a className='font-normal text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline'>
                    Terms & conditions
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className='my-8 border-gray-200 dark:border-gray-700 lg:my-12' />
        <span className='block font-normal text-center text-gray-600 dark:text-gray-400'>
          © 2019-{currentYear} All Rights Reserved. Flowbite™ is a registered trademark.
        </span>
      </div>
    </footer>
  )
}
