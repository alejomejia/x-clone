import { PostCard } from '@/components/PostCard/PostCard'
import type { Post } from '@/types/posts'

interface Props {
  posts: Post[] | null
}

export function PostList({ posts }: Props) {
  return [...(posts ?? [])].map((post) => {
    const { id, content, created_at: createdAt, user } = post
    const { name, user_name: username, avatar_url: avatarUrl } = user

    return (
      <PostCard
        key={id}
        content={content}
        name={name}
        username={username}
        avatarUrl={avatarUrl}
        createdAt={createdAt}
      />
    )
  })
}
