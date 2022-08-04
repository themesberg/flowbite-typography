import Head from 'next/head'
import MarkdownSample from '../components/MarkdownSample.mdx'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { ThemeProvider } from '../theme/theme-context'

export default function Index() {
  return (
    <ThemeProvider>
      <Navbar />
      <div className="antialiased text-gray-900 dark:bg-gray-900 dark:text-white">
        <Head>
          <title>Flowbite Typography</title>
          <meta name="description" content="Flowbite Typography is a plugin that allows you to format inline elements with a single class forked from the official Tailwind CSS Typography plugin."></meta>
          <link rel="canonical" href="https://flowbite.com/plugins/typography/" />
        </Head>
        <div className="px-4 pt-4 pb-8 mx-auto max-w-3xl sm:px-6 sm:py-12 lg:max-w-4xl lg:py-16 lg:px-8 xl:max-w-6xl">
          <article>
            <div className="space-y-8 sm:space-y-12 lg:space-y-16">
              <div className="mx-auto space-y-8 max-w-2xl sm:space-y-0 sm:flex sm:items-center sm:justify-between">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div>
                      <h1 className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite Typography</h1>
                      <span className="block">
                        <a href="https://tailwindcss.com/docs/typography-plugin" className="text-sm text-gray-600 dark:text-gray-400 hover:underline">Forked from @tailwindcss/typography</a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-content-between">
                  <a href="https://github.com/themesberg/flowbite-typography" className="inline-flex justify-center items-center py-3 px-5 mr-3 w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    <svg
                      className='mr-2 w-4 h-4'
                      aria-hidden='true'
                      focusable='false'
                      data-prefix='fab'
                      data-icon='github'
                      role='img'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 496 512'>
                      <path
                        fill='currentColor'
                        d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'
                      />
                    </svg> <span className="hidden sm:inline">View on</span> GitHub
                  </a>
                  <a href="https://flowbite.com/figma/" className="inline-flex justify-center items-center py-3 px-5 mr-2 w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    <img src="/figma.svg" alt="Figma logo" className="mr-2 w-4 h-4" /> Figma file
                  </a>
                </div>
              </div>
              <div className="mx-auto max-w-2xl format lg:format-lg format-blue dark:format-invert">
                <MarkdownSample />
              </div>
            </div>
          </article>
        </div>
      </div>
      <Footer />
    </ThemeProvider>
  )
}

export const config = {
  unstable_runtimeJS: false,
}
