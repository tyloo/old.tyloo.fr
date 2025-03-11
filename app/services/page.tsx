'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { BsArrowDownRight } from 'react-icons/bs'

const services = [
  {
    num: '01',
    title: 'Backend Development',
    description:
      'I build and maintain the backend of the websites I work on. Specialized in PHP and Symfony, I also have experience with Laravel and NodeJS.',
    href: '/contact'
  },
  {
    num: '02',
    title: 'Frontend Development',
    description:
      'I mainly work with React and NextJS. I also have experience with Vue and Nuxt. I am also a big fan of TailwindCSS/shadcm and I use it in all my projects.',
    href: '/contact'
  },
  {
    num: '03',
    title: 'Tests and CI/CD',
    description:
      'I help companies to improve their quality and speed of delivery. I also help them to build their CI/CD pipelines to automate their workflows.',
    href: '/contact'
  },
  {
    num: '04',
    title: 'Scrum Coaching',
    description:
      'I am a Scrum Coach and I help companies to improve their quality and speed of delivery. With my experience, I can boost agility and help teams to deliver projects faster.',
    href: '/contact'
  }
]

export default function ServicesPage() {
  return (
    <div className='flex flex-col px-6 py-4'>
      <div className='grid grid-cols-1 gap-20 md:grid-cols-2'>
        {services.map((service, index) => {
          return (
            <div key={index} className='group flex flex-1 flex-col justify-center gap-6'>
              <div className='flex w-full items-center justify-between'>
                <div className='text-outline group-hover:text-outline-hover text-5xl font-extrabold text-transparent transition-all duration-500'>
                  {service.num}
                </div>
                <Button
                  asChild
                  className='group-hover:bg-accent bg-foreground size-16 rounded-full transition-all hover:-rotate-45'
                >
                  <Link href={service.href} aria-label='Contact me'>
                    <BsArrowDownRight className='text-background size-6' />
                  </Link>
                </Button>
              </div>
              <h2 className='group-hover:text-accent text-[42px] leading-none font-bold text-white transition-all duration-500'>
                {service.title}
              </h2>
              <p className='text-white/60'>{service.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
