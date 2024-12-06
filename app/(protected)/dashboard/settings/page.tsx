import { auth } from '@/auth'

const SettingsPage = async () => {
  const session = await auth()

  return <code>{JSON.stringify(session)}</code>
}

export default SettingsPage
