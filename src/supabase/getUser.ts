import { createServerComponentClient } from './createServerComponentClient'

export async function getUser() {
  const { auth } = createServerComponentClient()

  try {
    const {
      data: { user }
    } = await auth.getUser()

    return user
  } catch (error) {
    console.error('Error:', error)

    return null
  }
}
