import { createServerComponentClient } from './createServerComponentClient'

export async function getSession() {
  const { auth } = createServerComponentClient()

  try {
    const {
      data: { session }
    } = await auth.getSession()

    return session
  } catch (error) {
    console.error('Error:', error)

    return null
  }
}
