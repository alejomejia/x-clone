import { HeaderTop } from './HeaderTop'
import { HeaderBottom } from './HeaderBottom'

export function Header() {
  return (
    <header className="max-h-screen w-[275px] flex justify-end px-2 sticky top-0">
      <div className="w-full py-3 flex flex-col justify-between">
        <HeaderTop />
        <HeaderBottom />
      </div>
    </header>
  )
}
