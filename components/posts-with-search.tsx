'use client'

import Posts from '@/components/posts'
import { Input } from '@/components/ui/input'
import { PostMetadata } from '@/lib/posts'
import { useState } from 'react'

export default function PostsWithSearch({ posts }: { posts: PostMetadata[] }) {
  const [query, setQuery] = useState('')
  const filtered = posts.filter((post) => post.title?.toLowerCase().includes(query.toLowerCase()))

  return (
    <div className='flex flex-col gap-6'>
      <div className='flex items-center justify-between gap-3'>
        <h1 className='text-4xl font-bold'>Posts</h1>
        <Input
          type='text'
          placeholder='Search posts...'
          className='border-muted-foreground/60 bg-muted-foreground/10 h-9 w-full sm:w-1/2'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <Posts posts={filtered} />
    </div>
  )
}
