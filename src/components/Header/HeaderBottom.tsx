import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

import { Database } from '@/types/database'
import { User } from '@/types/posts'

import { HeaderBottomUser } from './HeaderBottomUser'

/**
 * @todo - Add context menu when click on button
 */

export async function HeaderBottom() {
  const supabase = createServerComponentClient<Database>({ cookies })

  const {
    data: { session }
  } = await supabase.auth.getSession()

  const userId = session?.user.id

  if (!userId) return null

  const { data: users } = await supabase.from('users').select('*').eq('id', userId).returns<User[]>()
  const { name, user_name: userName, avatar_url: avatarUrl } = users?.[0] ?? {}

  return <HeaderBottomUser name={name} userName={userName} avatarUrl={avatarUrl} />
}
