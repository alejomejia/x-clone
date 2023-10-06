'use client'

import cx from 'classnames'
import { DotsIcon } from '@/components/Icons/Icons'
import { TRANSITION } from '@/consts/classNames'

interface Props {
  name: string | undefined
  userName: string | undefined
  avatarUrl: string | undefined
}

export function HeaderBottomUser({ name, userName, avatarUrl }: Props) {
  const handleClick = () => {
    console.log('Clicked on user button')
  }

  return (
    <button
      className={cx('flex items-center p-3 rounded-full hover:bg-slate-600/25', TRANSITION)}
      onClick={handleClick}
    >
      <picture>
        <img className="w-10 h-10 rounded-full" src={avatarUrl} alt={`${name} avatar`} />
      </picture>
      <div className="mx-3 text-left">
        <span className="block font-semibold leading-4">{name}</span>
        <span className=" text-gray-500">@{userName}</span>
      </div>
      <div className="ml-auto">
        <DotsIcon />
      </div>
    </button>
  )
}
