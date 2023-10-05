import {
  DotsIcon,
  CommentsIcon,
  RepostIcon,
  LikeIcon,
  LikeOutlineIcon,
  BarsIcon,
  ShareIcon
} from '@/components/Icons/Icons'

const icons = ['dots', 'comments', 'repost', 'like', 'likeOutline', 'bars', 'share'] as const

const mapIcons = {
  dots: {
    Icon: DotsIcon,
    color: 'hover:text-sky-500'
  },
  comments: {
    Icon: CommentsIcon,
    color: 'hover:text-sky-500'
  },
  repost: {
    Icon: RepostIcon,
    color: 'hover:text-green-500'
  },
  like: {
    Icon: LikeIcon,
    color: 'hover:text-pink-500'
  },
  likeOutline: {
    Icon: LikeOutlineIcon,
    color: 'hover:text-pink-500'
  },
  bars: {
    Icon: BarsIcon,
    color: 'hover:text-sky-500'
  },
  share: {
    Icon: ShareIcon,
    color: 'hover:text-sky-500'
  }
}

interface Props {
  icon: (typeof icons)[number]
  suffix?: string
  onClick: () => void
}

export function IconButton({ icon, suffix, onClick }: Props) {
  const Icon = mapIcons[icon].Icon
  const hoverColor = mapIcons[icon].color

  return (
    <button
      className={`p-2 flex items-center gap-2 rounded-full transition duration-300 hover:bg-slate-900 ${hoverColor}`}
      onClick={onClick}
    >
      <Icon className="w-4 h-4" />
      {suffix && <span className="text-xs">123</span>}
    </button>
  )
}
