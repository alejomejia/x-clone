'use server'

import { createServerActionClient } from '@/supabase/createServerActionClient'
import { getUser } from '@/supabase/getUser'
import { revalidatePath } from 'next/cache'

export async function insertPost(formData: FormData) {
  const content = formData.get('content')

  if (content === null) return

  const user = await getUser()

  if (user === null) return

  const supabase = createServerActionClient()
  await supabase.from('posts').insert({ content: content.toString(), user_id: user.id })

  revalidatePath('/')
}
