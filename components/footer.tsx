import { Separator } from '@/components/ui/separator'
import { GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from 'lucide-react'
import Link from 'next/link'

const navigation = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/julien-bonvarlet/',
    icon: <LinkedinIcon aria-hidden='true' className='size-4' />
  },
  {
    name: 'GitHub',
    href: 'https://github.com/tyloo',
    icon: <GithubIcon aria-hidden='true' className='size-4' />
  },
  {
    name: 'X',
    href: 'https://x.com/tyloofr',
    icon: <TwitterIcon aria-hidden='true' className='size-4' />
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/tyloo93',
    icon: <InstagramIcon aria-hidden='true' className='size-4' />
  }
]

export default function Footer() {
  return (
    <footer className='bg-background sticky bottom-0 z-50 px-6 py-4'>
      <Separator className='bg-muted-foreground/40 mb-4' />
      <div className='md:flex md:items-center md:justify-between'>
        <div className='flex justify-center space-x-6 md:order-2'>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target='_blank'
              rel='noreferrer noopener'
              className='text-muted-foreground/40 hover:text-primary transition-all duration-500'
              aria-label={`Check my ${item.name} profile`}
            >
              <span className='sr-only'>{item.name}</span>
              {item.icon}
            </Link>
          ))}
        </div>
        <div className='mt-4 md:order-1 md:mt-0'>
          <p className='text-muted-foreground/40 text-center text-xs leading-5'>
            &copy; 1988-Present - Julien &apos;Tyloo&apos; Bonvarlet. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
