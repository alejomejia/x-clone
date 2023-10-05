import { Database } from './database'

type PostEntity = Database['public']['Tables']['posts']['Row'] | null
type UserEntity = Database['public']['Tables']['users']['Row']

export type Post = PostEntity & {
  user: UserEntity
}
