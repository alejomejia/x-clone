'use client'

import cx from 'classnames'
import { usePathname } from 'next/navigation'

interface Props {
  label: string
  href: string
  icon: React.ReactNode
}

export function HeaderNavigationItem({ label, href, icon }: Props) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <li>
      <a
        className="inline-flex p-3 items-center rounded-full hover:bg-slate-600/25 transition duration-300"
        href={href}
      >
        {icon}
        <span
          className={cx('block mx-4 text-xl', {
            'font-normal': !isActive,
            'font-bold': isActive
          })}
        >
          {label}
        </span>
      </a>
    </li>
  )
}
