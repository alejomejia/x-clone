import { rawFooterNavLinks } from './const'

export function LoginFooterNav() {
  const footerNavLinks = rawFooterNavLinks.map(({ id, label }) => (
    <li key={id}>
      <a href="#" className="hover:underline">
        {label}
      </a>
    </li>
  ))

  return (
    <footer className="px-3 py-4">
      <nav>
        <ul className="flex gap-3 justify-center flex-wrap text-sm text-white/50">
          {footerNavLinks}
          <span>© 2023 X Corp.</span>
        </ul>
      </nav>
    </footer>
  )
}
