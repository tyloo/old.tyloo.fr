import PostsWithSearch from '@/components/posts-with-search'
import { getPosts } from '@/lib/posts'

export default async function PostsPage() {
  const posts = await getPosts()

  return (
    <div className='flex flex-col px-6 py-4'>
      <PostsWithSearch posts={posts} />
    </div>
  )
}
