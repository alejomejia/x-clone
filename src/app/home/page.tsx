import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { AuthButtonServer } from '@/components/AuthButton/AuthButtonServer'
import { PostCard } from '@/components/PostCard/PostCard'
import { ROUTES } from '@/consts/routes'
import { Post } from '@/types/supabase.db'

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
    .order('created_at', { ascending: false })
    .returns<Post[]>()

  return (
    <main>
      {posts?.map((post) => {
        const { id, content, created_at: createdAt, users } = post
        const { name, user_name: username, avatar_url: avatarUrl } = users

        return (
          <PostCard
            key={id}
            content={content}
            name={name}
            username={username}
            avatarUrl={avatarUrl}
            createdAt={createdAt}
          />
        )
      })}
      <AuthButtonServer />
    </main>
  )
}
