import { redirect } from 'next/navigation'

import { AuthButtonServer } from '@/components/AuthButton/AuthButtonServer'
import { ROUTES } from '@/consts/routes'
import { getSession } from '@/supabase/getSession'
import { XLogoIcon } from '@/components/Icons/Icons'

export default async function Login() {
  const session = await getSession()

  if (session !== null) {
    redirect(ROUTES.home)
  }

  return (
    <div className="w-full flex">
      <div className="flex-1 grid place-items-center ">
        <XLogoIcon className="w-80 h-80" />
      </div>
      <div className="flex flex-col flex-1 justify-center">
        <h1 className="max-w-xl font-bold text-6xl mb-10">What is happening right now</h1>
        <h2 className="mb-12 text-4xl font-bold">Join today</h2>
        <AuthButtonServer />
      </div>
    </div>
  )
}
