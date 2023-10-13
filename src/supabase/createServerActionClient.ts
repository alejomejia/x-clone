import { cookies } from 'next/headers'
import { createServerActionClient as supabaseCreateServerActionClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '@/types/database'

export const createServerActionClient = () => {
  const cookieStore = cookies()
  return supabaseCreateServerActionClient<Database>({ cookies: () => cookieStore })
}
