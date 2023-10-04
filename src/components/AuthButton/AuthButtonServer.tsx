import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

import { AuthButtonClient } from './AuthButtonClient'

export async function AuthButtonServer() {
  const { auth } = createServerComponentClient({ cookies })

  const {
    data: { session }
  } = await auth.getSession()

  return <AuthButtonClient session={session} />
}
