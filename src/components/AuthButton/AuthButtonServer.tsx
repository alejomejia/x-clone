import { getSession } from '@/supabase/getSession'

import { AuthButtonClient } from './AuthButtonClient'

export async function AuthButtonServer() {
  const session = await getSession()

  return <AuthButtonClient session={session} />
}
