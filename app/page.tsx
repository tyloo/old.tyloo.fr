import Photo from '@/components/photo'
import Socials from '@/components/socials'
import Stats from '@/components/stats'
import { TypedTitles } from '@/components/typed-titles'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { FiDownload } from 'react-icons/fi'

export default function Home() {
  return (
    <div className='flex flex-col px-6 py-4'>
      <div className='flex flex-col items-center justify-between lg:flex-row'>
        <div className='order-2 text-center lg:order-none lg:text-left'>
          <TypedTitles />
          <h1 className='h1 mb-6'>
            Hello I am
            <br />
            <span className='text-primary'>Julien Bonvarlet</span>
          </h1>
          <p className='mb-9 max-w-[500px] text-white/80'>
            I excel at crafting elegant digital experiences and I am proficient in various programming languages and
            technologies.
          </p>
          <div className='flex flex-col items-center gap-6 lg:flex-row'>
            <Button
              asChild
              size='lg'
              className='flex items-center gap-2 rounded-full font-bold uppercase transition-all duration-500'
              aria-label='Resume of Julien Bonvarlet'
            >
              <Link href='/resume-julien-bonvarlet.pdf' target='_blank' aria-label='Resume of Julien Bonvarlet'>
                <span>Download Resume</span>
                <FiDownload className='text-xl' />
              </Link>
            </Button>
            <div className='mb-6 lg:mb-0'>
              <Socials />
            </div>
          </div>
        </div>
        <div className='order-1 mb-6 lg:order-none lg:mb-0'>
          <Photo />
        </div>
      </div>
      <Stats />
    </div>
  )
}
