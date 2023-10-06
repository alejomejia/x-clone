interface Props {
  username: string | undefined
  avatarUrl: string | undefined
}

export function Avatar({ username, avatarUrl }: Props) {
  const avatarAlt = `${username}'s avatar`

  return (
    <picture>
      <img className="w-10 h-10 rounded-full" src={avatarUrl} alt={avatarAlt} />
    </picture>
  )
}
