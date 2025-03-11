'use client'

import { Button } from '@/components/ui/button'
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CiMenuFries } from 'react-icons/ci'

const links = [
  { name: 'home', path: '/' },
  { name: 'services', path: '/services' },
  { name: 'resume', path: '/resume' },
  { name: 'work', path: '/work' },
  { name: 'blog', path: '/posts' }
]

export function NavigationDesktop() {
  const currentPath = usePathname()

  return (
    <div className='hidden items-center gap-6 lg:flex'>
      <nav className='flex gap-6'>
        {links.map((link, index) => {
          return (
            <Link
              href={link.path}
              key={`menu-desktop-${index}`}
              className={`${currentPath === link.path ? 'border-primary text-primary' : 'border-transparent'} hover:border-primary hover:text-primary border-b-2 font-medium capitalize transition-all duration-500`}
              aria-label={`${link.name} page`}
            >
              {link.name}
            </Link>
          )
        })}
      </nav>

      <Button asChild aria-label='Contact me' className='rounded-full transition-all duration-500'>
        <Link href='/contact' aria-label='Contact me'>
          Hire me
        </Link>
      </Button>
    </div>
  )
}

export function NavigationMobile() {
  const currentPath = usePathname()

  return (
    <div className='lg:hidden'>
      <Sheet>
        <SheetTrigger className='flex items-center justify-center' aria-label='Toggle menu'>
          <CiMenuFries className='text-primary text-3xl' />
        </SheetTrigger>
        <SheetContent className='border-muted-foreground/30 flex flex-col'>
          <SheetTitle className='hidden'>Menu</SheetTitle>

          {/* Logo */}
          <div className='mt-32 mb-40 text-center text-2xl'>
            <Link href='/' className='group' aria-label='Home page'>
              <h1 className='group-hover:text-primary text-4xl font-semibold'>
                Tyloo
                <span className='text-primary group-hover:text-transparent'>.</span>
              </h1>
            </Link>
          </div>
          <nav className='flex flex-col items-center justify-center gap-6'>
            {links.map((link, index) => {
              return (
                <SheetClose key={`menu-mobile-${index}`} asChild>
                  <Link
                    href={link.path}
                    key={index}
                    className={`${link.path === currentPath && 'border-primary text-primary border-b-2'} hover:text-primary text-lg font-medium capitalize transition-all duration-500`}
                    aria-label={`${link.name} page`}
                  >
                    {link.name}
                  </Link>
                </SheetClose>
              )
            })}
            <SheetClose key={`menu-desktop-5`} asChild>
              <Button asChild aria-label='Contact me' className='rounded-full transition-all duration-500'>
                <Link href='/contact' aria-label='Contact me'>
                  Hire me
                </Link>
              </Button>
            </SheetClose>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}
