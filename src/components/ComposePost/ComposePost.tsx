import { Avatar } from '@/components/Avatar/Avatar'
import { getUser } from '@/supabase/getUser'

import { ComposePostForm } from './ComposePostForm'

export async function ComposePost() {
  const user = await getUser()

  if (!user?.id) return null

  const { user_name: username, avatar_url: avatarUrl } = user?.user_metadata

  return (
    <div className="px-4 py-3 w-full border-b border-b-gray-800">
      <div className="flex gap-3">
        <a href={`/${username}`}>
          <Avatar username={username} avatarUrl={avatarUrl} />
        </a>
        <div className="flex-1">
          <ComposePostForm />
        </div>
      </div>
    </div>
  )
}
