'use client'

import { useRouter } from 'next/navigation'
import { Session, createClientComponentClient } from '@supabase/auth-helpers-nextjs'

import { GithubIcon } from '@/components/Icons/Icons'

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
          className="text-white bg-slate-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center transition-all duration-300 hover:bg-slate-800 "
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
