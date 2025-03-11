'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Photo() {
  return (
    <div className='relative size-full'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0, duration: 0.4, ease: 'easeIn' }
        }}
      >
        <div className='absolute mt-2 ml-2 size-[284px] lg:mt-4 lg:ml-4 lg:size-[474px]'>
          <Image
            src='/images/julien-bonvarlet.webp'
            alt="Julien 'Tyloo' Bonvarlet"
            priority
            quality={100}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className='rounded-full object-contain opacity-50'
            id='tyloo'
          />
        </div>

        <motion.svg
          className='size-[300px] lg:size-[506px]'
          fill='transparent'
          viewBox='0 0 506 506'
          xmlns='http://www.w3.org/2000/svg'
        >
          <motion.circle
            cx='253'
            cy='253'
            r='250'
            stroke='#00ff99'
            strokeWidth='4'
            strokeLinecap='round'
            strokeLinejoin='round'
            initial={{ strokeDasharray: '24 10 0 0' }}
            animate={{
              strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
              rotate: [120, 360]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  )
}
