import { NavigationDesktop, NavigationMobile } from '@/components/navigation'
import Link from 'next/link'

export function Header() {
  return (
    <header className='bg-background sticky top-0 z-50 px-6 py-4 text-white'>
      <div className='flex flex-row items-center justify-between'>
        {/* Logo */}
        <Link href='/' className='group' aria-label='Home page'>
          <h1 className='text-foreground group-hover:text-primary text-4xl font-semibold'>
            Tyloo
            <span className='text-primary group-hover:text-transparent'>.</span>
          </h1>
        </Link>

        {/* Desktop navigation */}
        <NavigationDesktop />

        {/* Mobile navigation */}
        <NavigationMobile />
      </div>
    </header>
  )
}
