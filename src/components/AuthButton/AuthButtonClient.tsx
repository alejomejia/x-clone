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
          className="text-white bg-[#24292F] font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center hover:bg-[#050708]/30 mr-2 mb-2"
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
