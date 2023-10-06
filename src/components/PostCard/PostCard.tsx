import { Avatar } from '@/components/Avatar/Avatar'

import { PostCardHeader } from './PostCardHeader'
import { PostCardBody } from './PostCardBody'
import { PostCardFooter } from './PostCardFooter'

interface Props {
  content: string
  name: string
  username: string
  avatarUrl: string
  createdAt: string
}

/**
 * @todo - Add link to user profile
 * @todo - Add modal on hover with user information
 * @todo - Add actions context menu
 */

export function PostCard({ content, name, username, avatarUrl, createdAt }: Props) {
  const avatarAlt = `${name}'s avatar`

  return (
    <article className="px-4 py-3 w-full border-b border-b-gray-800">
      <div className="flex gap-3">
        <Avatar username={username} avatarUrl={avatarUrl} />
        <div className="flex-1">
          <PostCardHeader name={name} username={username} createdAt={createdAt} />
          <PostCardBody content={content} />
          <PostCardFooter />
        </div>
      </div>
    </article>
  )
}
