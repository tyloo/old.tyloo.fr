'use client'

import React from 'react'
import Typed from 'typed.js'

export function TypedTitles() {
  const el = React.useRef(null)

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'Technical Lead</strong>',
        'Senior Fullstack Developer',
        'Senior Backend Developer',
        'Senior Frontend Developer',
        'DevOps',
        'Scrum Master',
        'Rugby Player',
        '<strong>Proud dad</strong>'
      ],
      typeSpeed: 20,
      loop: true,
      loopCount: Infinity,
      backSpeed: 10,
      backDelay: 1500
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return <span className='text-xl' ref={el} />
}
