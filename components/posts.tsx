import { PostMetadata } from '@/lib/posts'
import { formatDate } from '@/lib/utils'
import Link from 'next/link'

export default function Posts({ posts }: { posts: PostMetadata[] }) {
  return (
    <ul className='flex flex-col gap-6'>
      {posts.map((post) => (
        <li key={post.slug}>
          <Link
            href={`/posts/${post.slug}`}
            className='flex flex-col justify-between gap-x-4 gap-y-1 sm:flex-row'
            aria-label={`Read more about "${post.title}"`}
          >
            <div className='max-w-[80%]'>
              <p className='text-lg font-semibold'>{post.title}</p>
              <p className='mt-1 text-sm font-light text-white/60'>{post.summary}</p>
            </div>

            {post.publishedAt && (
              <p className='mt-1 text-sm font-light text-white/60'>{formatDate(post.publishedAt)}</p>
            )}
          </Link>
        </li>
      ))}
    </ul>
  )
}
