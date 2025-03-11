import { ArrowLeftIcon } from 'lucide-react'
import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <section className='flex flex-col items-center justify-center py-6'>
      <div className='min-h-full px-4 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-6'>
        <div className='mx-auto max-w-max'>
          <main className='sm:flex'>
            <p className='title text-muted-foreground tracking-tight sm:text-5xl'>404</p>
            <div className='sm:ml-6'>
              <div className='sm:border-l sm:border-gray-200 sm:pl-6'>
                <h1 className='text-3xl font-bold tracking-tight sm:text-5xl'>Page not found</h1>
                <p className='text-muted-foreground mt-1 text-base'>
                  Please check the URL in the address bar and try again.
                </p>
              </div>
              <div className='mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6'>
                <Link
                  href='/'
                  className='text-muted-foreground hover:text-primary inline-flex items-center gap-3 transition-colors'
                  aria-label='Back to the home page'
                >
                  <ArrowLeftIcon className='size-5' />
                  <span>Go back home</span>
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  )
}
