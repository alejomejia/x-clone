import { cookies } from 'next/headers'
import { createServerComponentClient as supabaseCreateServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '@/types/database'

export const createServerComponentClient = () => {
  const cookieStore = cookies()
  return supabaseCreateServerComponentClient<Database>({ cookies: () => cookieStore })
}
