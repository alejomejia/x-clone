import { XLogoIcon } from '@/components/Icons/Icons'

import { HeaderNavigation } from './HeaderNavigation'

export function HeaderTop() {
  return (
    <div>
      <a className="inline-block p-3 rounded-full hover:bg-slate-600/25 transition-colors duration-300" href="/home">
        <XLogoIcon className="w-8 h-8" />
      </a>
      <HeaderNavigation />
    </div>
  )
}
