import ContactForm from '@/components/contact-form'

export default function ContactPage() {
  return (
    <div className='flex flex-col gap-6 px-6 py-4'>
      <h1 className='title'>Let&apos;s talk about your project</h1>

      <ContactForm />
    </div>
  )
}
