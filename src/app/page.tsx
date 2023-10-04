import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

import { AuthButtonServer } from '@/components/AuthButton/AuthButtonServer'

export default async function Home() {
  const supabase = createServerComponentClient({ cookies })
  const { data: posts } = await supabase.from('posts').select()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AuthButtonServer />
      {JSON.stringify(posts, null, 10)}
    </main>
  )
}
