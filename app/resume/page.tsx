'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { FaAws } from 'react-icons/fa'
import {
  SiDatadog,
  SiDocker,
  SiGithubactions,
  SiMysql,
  SiNextdotjs,
  SiNuxtdotjs,
  SiPhp,
  SiSentry,
  SiSymfony,
  SiTailwindcss,
  SiTypescript
} from 'react-icons/si'

const about = {
  title: 'About me',
  description:
    "Hey there! I'm Julien and I'm a Web Engineer specialized in PHP and the Symfony Framework and DevOps. I've been a developer for more than 15 years and, so far, I'm still enjoying it! Dedicated and passionate, I'm still aware of new technologies, new concepts and patterns.",
  infos: [
    {
      fieldName: 'Name',
      fieldValue: 'Julien Bonvarlet'
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'French'
    },
    {
      fieldName: 'Experience',
      fieldValue: '15+ Years'
    },
    {
      fieldName: 'Freelance',
      fieldValue: 'Available'
    },
    {
      fieldName: 'Languages',
      fieldValue: 'French, English'
    },
    {
      fieldName: 'Driving License',
      fieldValue: 'Yes'
    },
    {
      fieldName: 'Email',
      fieldValue: 'jbonva@gmail.com'
    },
    {
      fieldName: 'Phone',
      fieldValue: '(+33) 6 29 50 93 46'
    }
  ]
}

const experience = {
  title: 'My experience',
  items: [
    {
      company: 'FAUME',
      position: 'Technical Lead',
      duration: 'Sep 2022 - Present'
    },
    {
      company: 'Mindgeek',
      position: 'Senior Backend Developer',
      duration: 'Apr 2021 - Jul 2022'
    },
    {
      company: 'Meero',
      position: 'Senior Backend Developer',
      duration: 'Jul 2019 - Apr 2021'
    },
    {
      company: 'Cirruseo',
      position: 'Google Cloud Architect',
      duration: 'Aug 2017 - Jul 2019'
    },
    {
      company: 'Carving Labs',
      position: 'Computer Engineer',
      duration: 'Sep 2015 - Aug 2017'
    },
    {
      company: 'NRX France',
      position: 'Google Deployment Specialist',
      duration: 'Oct 2012 - Sep 2015'
    },
    {
      company: 'Lemon Way',
      position: 'Web & Mobile Developer',
      duration: 'Sep 2011 - Sep 2012'
    },
    {
      company: 'Autoscout24 France',
      position: 'System Administrator',
      duration: 'Sep 2008 - Jun 2011'
    }
  ]
}

const education = {
  title: 'My education',
  items: [
    {
      institution: 'ESGI',
      degree: 'Master Web & e-Business',
      duration: '2012 - 2014'
    },
    {
      institution: 'ECTEI',
      degree: 'Bachelor Web & Mobile',
      duration: '2011 - 2012'
    },
    {
      institution: 'ISEFAC Paris',
      degree: 'BTS IT option Sys Admin',
      duration: '2008 - 2010'
    }
  ]
}

const skills = {
  title: 'My skills',
  items: [
    {
      icon: <SiPhp />,
      name: 'PHP'
    },
    {
      icon: <SiSymfony />,
      name: 'Symfony'
    },
    {
      icon: <SiTypescript />,
      name: 'Typescript'
    },
    {
      icon: <SiNextdotjs />,
      name: 'NextJS'
    },
    {
      icon: <SiNuxtdotjs />,
      name: 'Nuxt'
    },
    {
      icon: <SiTailwindcss />,
      name: 'TailwindCSS'
    },
    {
      icon: <SiMysql />,
      name: 'MySQL'
    },
    {
      icon: <SiDocker />,
      name: 'Docker'
    },
    {
      icon: <FaAws />,
      name: 'AWS'
    },
    {
      icon: <SiGithubactions />,
      name: 'Github Actions'
    },
    {
      icon: <SiDatadog />,
      name: 'Datadog'
    },
    {
      icon: <SiSentry />,
      name: 'Sentry'
    }
  ]
}

const tabs = [
  {
    name: 'About me',
    value: 'about'
  },
  {
    name: 'Experience',
    value: 'experience'
  },
  {
    name: 'Education',
    value: 'education'
  },
  {
    name: 'Skills',
    value: 'skills'
  }
]

export default function ResumePage() {
  return (
    <div className='flex flex-col px-6 py-4'>
      <Tabs
        orientation='vertical'
        defaultValue='about'
        className='flex w-full flex-col items-start justify-center gap-4 md:flex-row'
      >
        <TabsList className='mx-auto grid h-auto w-full max-w-full shrink-0 grid-cols-1 flex-col gap-4 bg-transparent p-1 md:max-w-[320px]'>
          {tabs.map((tab) => {
            return (
              <TabsTrigger
                key={`tab-${tab.value}-link`}
                value={tab.value}
                className='text-foreground data-[state=active]:bg-primary data-[state=active]:text-background text-md cursor-pointer rounded-xl bg-[#27272c] py-2 data-[state=active]:cursor-default'
              >
                {tab.name}
              </TabsTrigger>
            )
          })}
        </TabsList>

        <TabsContent key='tab-about-content' value='about'>
          <div className='flex flex-col gap-4'>
            <h3 className='text-4xl font-bold'>{about.title}</h3>
            <p className='text-muted'>{about.description}</p>
            <ul className='grid grid-cols-1 sm:grid-cols-2'>
              {about.infos.map((item, index) => {
                return (
                  <li key={index} className='flex gap-4'>
                    <span className='text-muted-foreground'>{item.fieldName}</span>
                    <span className='text-muted'>{item.fieldValue}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </TabsContent>
        <TabsContent key='tab-experience-content' value='experience'>
          <div className='flex flex-col gap-4'>
            <h3 className='text-4xl font-bold'>{experience.title}</h3>

            <ul className='grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4'>
              {experience.items.map((item, index) => {
                return (
                  <li
                    key={index}
                    className='flex h-32 flex-col items-center justify-center gap-1 rounded-xl bg-[#27272c]'
                  >
                    <span className='text-accent text-xs'>{item.duration}</span>
                    <h3 className='text-center text-lg lg:text-left'>{item.company}</h3>
                    <p className='text-xs text-white/60'>{item.position}</p>
                  </li>
                )
              })}
            </ul>
          </div>
        </TabsContent>
        <TabsContent key='tab-education-content' value='education'>
          <div className='flex flex-col gap-4'>
            <h3 className='text-4xl font-bold'>{education.title}</h3>

            <ul className='grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4'>
              {education.items.map((item, index) => {
                return (
                  <li
                    key={index}
                    className='flex h-32 flex-col items-center justify-center gap-1 rounded-xl bg-[#27272c]'
                  >
                    <span className='text-accent text-xs'>{item.duration}</span>
                    <h3 className='text-center text-lg lg:text-left'>{item.institution}</h3>
                    <p className='text-xs text-white/60'>{item.degree}</p>
                  </li>
                )
              })}
            </ul>
          </div>
        </TabsContent>
        <TabsContent key='tab-skills-content' value='skills'>
          <div className='flex flex-col gap-4'>
            <h3 className='title'>{skills.title}</h3>
            <ul className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4'>
              {skills.items.map((skill, index) => {
                return (
                  <li key={index}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className='group flex h-32 w-full items-center justify-center rounded-xl bg-[#232329]'>
                          <div className='group-hover:text-accent text-6xl transition-all duration-300'>
                            {skill.icon}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent className='rounded-xl'>
                          <p>{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                )
              })}
            </ul>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
