'use client'

import { formatDistance } from 'date-fns'

import { IconButton } from '@/components/IconButton/IconButton'

interface Props {
  name: string
  username: string
  createdAt: string
}

export function PostCardHeader({ name, username, createdAt }: Props) {
  const timeAgo = formatDistance(new Date(createdAt), new Date(), { addSuffix: true })

  return (
    <div className="flex justify-between mb-1">
      <div>
        <span className="inline-block mr-2 text-slate-200 font-semibold">{name}</span>
        <span className="inline-block mr-1 text-gray-500 text-sm">
          @{username} · {timeAgo}
        </span>
      </div>
      <button className="text-gray-500">
        <IconButton icon="dots" onClick={() => console.log('dots')} />
      </button>
    </div>
  )
}
