'use client'

import { useRouter } from 'next/navigation'
import { Session, createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import cx from 'classnames'

import { GithubIcon } from '@/components/Icons/Icons'
import { TRANSITION } from '@/consts/classNames'

interface Props {
  session: Session | null
}

export function AuthButtonClient({ session }: Props) {
  const router = useRouter()
  const { auth } = createClientComponentClient()

  const handleSignIn = async () => {
    await auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: 'http://localhost:3000/auth/callback'
      }
    })
  }

  const handleSignOut = async () => {
    await auth.signOut()
    router.refresh()
  }

  return (
    <div className="flex gap-8">
      {session === null ? (
        <button
          className={cx(
            'text-white bg-[#24292F] font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center hover:bg-[#24292F]/80',
            TRANSITION
          )}
          onClick={handleSignIn}
        >
          <GithubIcon />
          Sign in with Github
        </button>
      ) : (
        <button onClick={handleSignOut}>Sign Out</button>
      )}
    </div>
  )
}
