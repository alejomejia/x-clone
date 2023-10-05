import { includeUsernames } from './utils/includeUsernames'

interface Props {
  content: string
}

export function PostCardBody({ content }: Props) {
  const contentWithUsernames = includeUsernames(content)

  return (
    <p
      className="text-slate-200 text-sm max-w-md whitespace-pre-wrap mb-3"
      dangerouslySetInnerHTML={{ __html: contentWithUsernames }}
    />
  )
}
