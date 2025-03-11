import MDXContent from '@/components/mdx-content'
import { getPostBySlug } from '@/lib/posts'
import { formatDate } from '@/lib/utils'
import { ArrowLeftIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default async function PostPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const {
    metadata: { title, image, author, publishedAt },
    content
  } = post

  return (
    <div className='flex flex-col px-6 py-4'>
      <Link
        href='/posts'
        className='text-muted-foreground hover:text-accent mb-6 inline-flex items-center gap-2 text-sm font-light transition-colors'
        aria-label='Back to posts'
      >
        <ArrowLeftIcon className='size-5' />
        <span>Back to posts</span>
      </Link>

      {image && (
        <div className='relative mb-6 h-96 w-full overflow-hidden rounded-lg'>
          <Image
            src={image}
            alt={title || ''}
            className='object-cover'
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
        </div>
      )}

      <header>
        <h1 className='title'>{title}</h1>
        <p className='text-muted-foreground mt-4 text-xs'>
          {author} / {formatDate(publishedAt ?? '')}
        </p>
      </header>

      <main className='prose prose-invert mt-8'>
        <MDXContent source={content} />
      </main>
    </div>
  )
}
