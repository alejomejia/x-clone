import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { PostList } from '@/components/PostList/PostList'
import { AuthButtonServer } from '@/components/AuthButton/AuthButtonServer'
import { ROUTES } from '@/consts/routes'
import { Database } from '@/types/database'
import { Post } from '@/types/posts'

export default async function Home() {
  const supabase = createServerComponentClient<Database>({ cookies })

  const {
    data: { session }
  } = await supabase.auth.getSession()

  if (session === null) {
    redirect(ROUTES.login)
  }

  const { data: posts } = await supabase
    .from('posts')
    .select('*, user: users(name, user_name, avatar_url)')
    .order('created_at', { ascending: false })
    .returns<Post[]>()

  return (
    <div>
      <PostList posts={posts} />
      <AuthButtonServer />
    </div>
  )
}
