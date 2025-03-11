import Link from 'next/link'
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { Button } from './ui/button'

const socials = [
  {
    name: 'LinkedIn',
    icon: <FaLinkedinIn />,
    path: 'https://www.linkedin.com/in/julien-bonvarlet/'
  },
  { name: 'GitHub', icon: <FaGithub />, path: 'https://github.com/tyloo' },
  { name: 'X', icon: <FaTwitter />, path: 'https://x.com/tyloofr' },
  {
    name: 'Instagram',
    icon: <FaInstagram />,
    path: 'https://www.instagram.com/tyloo93'
  }
]

export default function Socials() {
  return (
    <div className='flex gap-6'>
      {socials.map((social) => {
        return (
          <Button
            key={`socials-${social.name}`}
            asChild
            variant='outline'
            size='icon'
            className='text-primary rounded-full border-2 transition-all duration-500'
          >
            <Link
              href={social.path}
              key={`socials-${social.name}`}
              target='_blank'
              aria-label={`My ${social.name} profile`}
            >
              {social.icon}
            </Link>
          </Button>
        )
      })}
    </div>
  )
}
