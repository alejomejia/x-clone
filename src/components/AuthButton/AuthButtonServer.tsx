import { AuthButtonClient } from './AuthButtonClient'
import { getSession } from '@/supabase/getSession'

export async function AuthButtonServer() {
  const session = await getSession()

  return <AuthButtonClient session={session} />
}
