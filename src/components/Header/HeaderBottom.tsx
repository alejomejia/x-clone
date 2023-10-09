import { User } from '@/types/posts'
import { getSession } from '@/supabase/getSession'
import { createServerComponentClient } from '@/supabase/createServerComponentClient'

import { HeaderBottomUser } from './HeaderBottomUser'

/**
 * @todo - Add context menu when click on button
 */

export async function HeaderBottom() {
  const supabase = createServerComponentClient()
  const session = await getSession()
  const userId = session?.user.id

  if (!userId) return null

  const { data: users } = await supabase.from('users').select('*').eq('id', userId).returns<User[]>()
  const { name, user_name: userName, avatar_url: avatarUrl } = users?.[0] ?? {}

  return <HeaderBottomUser name={name} userName={userName} avatarUrl={avatarUrl} />
}
