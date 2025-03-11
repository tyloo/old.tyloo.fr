'use client'

import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { GithubIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { BsArrowUpRight } from 'react-icons/bs'

const projects = [
  {
    name: 'portfolio',
    title: 'Tyloo.fr',
    description:
      'My own Portfolio website. It contains all my projects, experiences, skills and a blog where I share my thoughts and ideas.',
    stack: [{ name: 'Typescript' }, { name: 'NextJS' }, { name: 'TailwindCSS' }],
    image: '/images/work/portfolio.jpg',
    live: 'https://tyloo.fr',
    github: 'https://github.com/tyloo/tyloo.fr'
  },
  {
    name: 'housefood',
    title: 'Housefood',
    description: 'Housefood is a platform for connecting home cooks with guests in your neighborhood.',
    stack: [{ name: 'Typescript' }, { name: 'NextJS' }, { name: 'TailwindCSS' }],
    image: '/images/work/housefood.jpg',
    live: 'https://blablafood.tyloo.fr',
    github: 'https://github.com/tyloo/blablafood'
  },
  {
    name: 'tylootube',
    title: 'TylooTube',
    description:
      'TylooTube is a Youtube clone where you can watch videos and create your own playlists. It is mainly made to demonstrate my TailwindCSS and frontend skills.',
    stack: [{ name: 'Typescript' }, { name: 'NextJS' }, { name: 'TailwindCSS' }],
    image: '/images/work/tube.jpg',
    live: 'https://tube.tyloo.fr',
    github: 'https://github.com/tyloo/tylootube'
  },
  {
    name: 'costela',
    title: 'Costela',
    description: 'Costela is a demo showing my Ecommerce-related skills! It is a clone of Lacoste Second Hand website.',
    stack: [{ name: 'Typescript' }, { name: 'NextJS' }, { name: 'TailwindCSS' }],
    image: '/images/work/costela.jpg',
    live: 'https://costela.tyloo.fr',
    github: 'https://github.com/tyloo/ecommerce'
  }
]

export default function WorkPage() {
  return (
    <div className='flex flex-col px-6 py-4'>
      <Tabs
        orientation='vertical'
        defaultValue={projects[0].name}
        className='flex w-full flex-col items-start justify-center gap-4 md:flex-row'
      >
        <TabsList className='mx-auto grid h-auto w-full max-w-full shrink-0 grid-cols-1 flex-col gap-4 bg-transparent p-1 md:max-w-[320px]'>
          {projects.map((project) => {
            return (
              <TabsTrigger
                key={`tab-${project.name}-link`}
                value={project.name}
                className='text-foreground data-[state=active]:bg-primary data-[state=active]:text-background text-md cursor-pointer rounded-xl bg-[#27272c] py-2 data-[state=active]:cursor-default'
              >
                {project.title}
              </TabsTrigger>
            )
          })}
        </TabsList>

        {projects.map((project) => {
          return (
            <TabsContent key={`tab-${project.name}-content`} value={project.name}>
              <div className='flex flex-col gap-4'>
                <div className='flex flex-row items-center gap-4'>
                  <h2 className='text-4xl font-bold'>{project.title}</h2>
                  <Link href={project.live} target='_blank' aria-label={`Check project ${project.title} live`}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant='ghost' size='icon' className='size-8 cursor-pointer rounded-full bg-white/5'>
                            <BsArrowUpRight className='size-4' />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  <Link href={project.github} target='_blank' aria-label={`Check project ${project.title} source code`}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant='ghost' size='icon' className='size-8 cursor-pointer rounded-full bg-white/5'>
                            <GithubIcon className='size-4' />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Source code</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
                <p className='text-muted'>{project.description}</p>
                <ul className='flex gap-4'>
                  {project.stack.map((item, index) => (
                    <li key={index} className='text-accent text-sm'>
                      {item.name}
                      {index !== project.stack.length - 1 && ','}
                    </li>
                  ))}
                </ul>
                <Image src={project.image} alt={project.title} width={500} height={300} className='object-cover' />
              </div>
            </TabsContent>
          )
        })}
      </Tabs>
    </div>
  )
}
