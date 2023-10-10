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
    <div>
      <div className="grid grid-cols-2">
        <div>1</div>
        <div>
          <AuthButtonServer />
        </div>
      </div>
      <div>3</div>
    </div>
  )
}
