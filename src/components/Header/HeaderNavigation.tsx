import {
  BookIcon,
  CircleDotsIcon,
  EnvelopeIcon,
  GroupIcon,
  HomeIcon,
  NotificationIcon,
  SearchIcon,
  UserIcon,
  XLogoIcon
} from '@/components/Icons/Icons'
import cx from 'classnames'

import { ROUTES } from '@/consts/routes'

import { HeaderNavigationItem } from './HeaderNavigationItem'
import { TRANSITION } from '@/consts/classNames'

const menuItems = [
  {
    label: 'Home',
    href: ROUTES.home,
    icon: <HomeIcon className="w-7 h-7" />
  },
  {
    label: 'Explore',
    href: ROUTES.explore,
    icon: <SearchIcon variant="outline" className="w-7 h-7" />
  },
  {
    label: 'Notifications',
    href: ROUTES.notifications,
    icon: <NotificationIcon variant="outline" className="w-7 h-7" />
  },
  {
    label: 'Messages',
    href: ROUTES.messages,
    icon: <EnvelopeIcon variant="outline" className="w-7 h-7" />
  },
  {
    label: 'Lists',
    href: ROUTES.lists,
    icon: <BookIcon variant="outline" className="w-7 h-7" />
  },
  {
    label: 'Communities',
    href: ROUTES.communities,
    icon: <GroupIcon variant="outline" className="w-7 h-7" />
  },
  {
    label: 'Premium',
    href: ROUTES.verified,
    icon: <XLogoIcon className="w-7 h-7" />
  },
  {
    label: 'Profile',
    href: ROUTES.profile,
    icon: <UserIcon variant="outline" className="w-7 h-7" />
  },
  {
    label: 'More',
    href: '#',
    icon: <CircleDotsIcon className="w-7 h-7" />
  }
]

export function HeaderNavigation() {
  return (
    <nav>
      <ul className="mb-4">
        {menuItems.map((item) => (
          <HeaderNavigationItem key={item.label} {...item} />
        ))}
      </ul>
      <a
        className={cx(
          'block w-11/12 p-3 rounded-full text-center font-semibold text-lg bg-sky-500 hover:bg-sky-600',
          TRANSITION
        )}
        href="/compose/tweet"
      >
        Post
      </a>
    </nav>
  )
}
