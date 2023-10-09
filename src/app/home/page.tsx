import { redirect } from 'next/navigation'

import { PostList } from '@/components/PostList/PostList'
import { AuthButtonServer } from '@/components/AuthButton/AuthButtonServer'
import { ComposePost } from '@/components/ComposePost/ComposePost'
import { ROUTES } from '@/consts/routes'
import { Post } from '@/types/posts'
import { createServerComponentClient } from '@/supabase/createServerComponentClient'
import { getSession } from '@/supabase/getSession'

export default async function Home() {
  const supabase = createServerComponentClient()
  const session = await getSession()

  if (session === null) {
    redirect(ROUTES.login)
  }

  const { data: posts } = await supabase
    .from('posts')
    .select('*, user: users(name, user_name, avatar_url)')
    .order('created_at', { ascending: false })
    .returns<Post[]>()

  return (
    <div className="flex gap-8">
      <section className="min-h-screen w-[600px] border-l border-r border-gray-800">
        <ComposePost />
        <PostList posts={posts} />
      </section>
      <section className="min-h-screen w-[350px]">
        <AuthButtonServer />
      </section>
    </div>
  )
}
