import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { AuthButtonServer } from '@/components/AuthButton/AuthButtonServer'
import { ROUTES } from '@/consts/routes'

export default async function Home() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { session }
  } = await supabase.auth.getSession()

  if (session === null) {
    redirect(ROUTES.login)
  }

  const { data: posts } = await supabase
    .from('posts')
    .select('id, content, created_at, users(id, name, user_name, avatar_url)')

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AuthButtonServer />
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </main>
  )
}
