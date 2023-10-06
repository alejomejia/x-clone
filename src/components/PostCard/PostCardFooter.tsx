'use client'

import { IconButton } from '@/components/IconButton/IconButton'

export function PostCardFooter() {
  return (
    <div className="flex justify-between text-slate-500">
      <IconButton icon="comments" suffix="123" onClick={() => console.log('comments')} />
      <IconButton icon="repost" suffix="123" onClick={() => console.log('repost')} />
      <IconButton icon="like" variant="outline" suffix="123" onClick={() => console.log('like')} />
      <IconButton icon="bars" suffix="123" onClick={() => console.log('bars')} />
      <IconButton icon="share" onClick={() => console.log('share')} />
    </div>
  )
}
