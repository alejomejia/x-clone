import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

import { AuthButtonServer } from '@/components/AuthButton/AuthButtonServer'
import { ROUTES } from '@/consts/routes'

export default async function Login() {
  const { auth } = createServerComponentClient({ cookies })

  const {
    data: { session }
  } = await auth.getSession()

  if (session !== null) {
    redirect(ROUTES.home)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Inicia sesión</h1>
      <AuthButtonServer />
    </main>
  )
}
