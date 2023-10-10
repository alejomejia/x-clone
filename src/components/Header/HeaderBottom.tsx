import { User } from '@/types/posts'
import { getUser } from '@/supabase/getUser'
import { createServerComponentClient } from '@/supabase/createServerComponentClient'

import { HeaderBottomUser } from './HeaderBottomUser'

/**
 * @todo - Add context menu when click on button
 */

export async function HeaderBottom() {
  const supabase = createServerComponentClient()
  const user = await getUser()

  if (!user?.id) return null

  const { data: users } = await supabase.from('users').select('*').eq('id', user.id).returns<User[]>()
  const { name, user_name: userName, avatar_url: avatarUrl } = users?.[0] ?? {}

  return <HeaderBottomUser name={name} userName={userName} avatarUrl={avatarUrl} />
}
