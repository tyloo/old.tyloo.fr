'use client'

import { type ReactNode } from 'react'
import { useKonami } from 'react-konami-code'
import useSound from 'use-sound'

export function Wrapper({ children }: { children: ReactNode }) {
  const [playSound] = useSound('/konami.m4a')
  const konami = () => {
    document.body.classList.add('konami')
    document.getElementById('tyloo')!.style.content = 'url("/images/konami.jpg")'

    playSound()
  }
  useKonami(konami)
  return <div className='grow'>{children}</div>
}
