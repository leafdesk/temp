import { initFirebaseApp } from '@/lib/firebase'
import { TEMP_FIREBASE_OPTIONS } from '@/constants/firebase-options'

const TAG = 'TestPage'

const TestPage = () => {
  const tempFirebaseApp = initFirebaseApp(TEMP_FIREBASE_OPTIONS)

  return (
    <main className="flex h-screen items-center justify-center">
      <></>
    </main>
  )
}

export default TestPage
