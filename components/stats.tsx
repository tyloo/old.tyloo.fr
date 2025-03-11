'use client'

import CountUp from 'react-countup'

const stats = [
  {
    num: 15,
    text: 'Years of experience'
  },
  {
    num: 26,
    text: 'Projects completed'
  },
  {
    num: 20,
    text: 'Technologies mastered'
  },
  {
    num: 666,
    text: 'Code commits'
  }
]

export default function Stats() {
  return (
    <section className='mt-6'>
      <div className='flex flex-wrap gap-6 lg:mx-auto'>
        {stats.map((item, index) => {
          return (
            <div className='flex flex-row items-center justify-center gap-4 lg:justify-start' key={index}>
              <CountUp end={item.num} duration={5} delay={0.6} className='text-4xl font-extrabold lg:text-6xl' />
              <p className='leading-snug text-white/80'>{item.text}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
