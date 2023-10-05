export type Post = {
  id: string
  content: string
  created_at: string
  users: User
}

export type User = {
  id: string
  name: string
  user_name: string
  avatar_url: string
}
