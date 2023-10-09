import { redirect } from 'next/navigation'

import { AuthButtonServer } from '@/components/AuthButton/AuthButtonServer'
import { ROUTES } from '@/consts/routes'
import { getSession } from '@/supabase/getSession'

export default async function Login() {
  const session = await getSession()

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
