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
          className="text-black bg-gray-50 min-w-[250px] font-medium rounded-full text-sm p-2.5 inline-flex items-center justify-center transition-all duration-300 hover:bg-gray-300"
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
