'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { sendEmail } from '@/lib/actions'
import { ContactFormSchema } from '@/lib/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useRef, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

type Inputs = z.infer<typeof ContactFormSchema>

export default function ContactForm() {
  const captchaRef = useRef<ReCAPTCHA>(null)
  const [captchaEnabled, setCaptchaEnabled] = useState(false)

  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<Inputs>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
      captcha: ''
    }
  })

  const [email] = watch(['email'])

  if (email && !captchaEnabled) {
    setCaptchaEnabled(true)
  }

  const processForm: SubmitHandler<Inputs> = async (data) => {
    const captcha = (await captchaRef.current?.executeAsync()) as string

    const result = await sendEmail({ ...data, captcha })

    if (result?.error) {
      toast.error('An error occurred! Please try again.')

      return
    }

    toast.success('Message sent successfully!')
    reset()
  }

  return (
    <section className='relative isolate'>
      <div className='relative'>
        <form onSubmit={handleSubmit(processForm)} noValidate>
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
            {/* Name */}
            <div>
              <Input
                id='name'
                type='text'
                placeholder='Name'
                className='border-muted-foreground/60 bg-muted-foreground/10'
                autoComplete='given-name'
                {...register('name')}
              />

              {errors.name?.message && <p className='mt-2 ml-1 text-sm text-rose-400'>{errors.name.message}</p>}
            </div>

            {/* Email */}
            <div>
              <Input
                type='email'
                id='email'
                autoComplete='email'
                className='border-muted-foreground/60 bg-muted-foreground/10'
                placeholder='Email'
                {...register('email')}
              />

              {errors.email?.message && <p className='mt-2 ml-1 text-sm text-rose-400'>{errors.email.message}</p>}
            </div>

            {/* Message */}
            <div className='sm:col-span-2'>
              <Textarea
                rows={4}
                placeholder='Message'
                className='border-muted-foreground/60 bg-muted-foreground/10'
                {...register('message')}
              />

              {errors.message?.message && <p className='mt-2 ml-1 text-sm text-rose-400'>{errors.message.message}</p>}
            </div>
          </div>
          <div className='mt-6'>
            <Button
              type='submit'
              disabled={isSubmitting}
              className='w-full disabled:opacity-50'
              aria-label='Submit contact form'
            >
              {isSubmitting ? 'Submitting...' : "Let's Go!"}
            </Button>
          </div>
          <p className='text-muted-foreground mt-4 text-xs'>
            By submitting this form, I agree to the{' '}
            <Link
              href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
              target='_blank'
              className='hover:text-accent font-bold transition-all duration-500'
              aria-label='Read privacy policy'
            >
              privacy&nbsp;policy.
            </Link>
          </p>

          {captchaEnabled && <ReCAPTCHA ref={captchaRef} size='invisible' sitekey={process.env.NEXT_PUBLIC_CAPTCHA!} />}
        </form>
      </div>
    </section>
  )
}
