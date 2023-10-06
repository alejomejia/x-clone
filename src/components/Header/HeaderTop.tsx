import cx from 'classnames'

import { XLogoIcon } from '@/components/Icons/Icons'
import { TRANSITION } from '@/consts/classNames'

import { HeaderNavigation } from './HeaderNavigation'

export function HeaderTop() {
  return (
    <div>
      <a className={cx('inline-block p-3 rounded-full hover:bg-slate-600/25', TRANSITION)} href="/home">
        <XLogoIcon className="w-8 h-8" />
      </a>
      <HeaderNavigation />
    </div>
  )
}
