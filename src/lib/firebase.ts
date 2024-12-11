import { initializeApp, getApps, FirebaseOptions } from 'firebase/app'
import { printMessage } from './log'

const TAG = 'lib/firebase'

/**
 * 파이어베이스 앱 초기화
 * 'use server' 또는 Server Component에서 호출해야 함.
 * @param firebaseOptions - 파이어베이스 설정 객체
 * @returns 초기화된 파이어베이스 앱
 */
export const initFirebaseApp = (firebaseOptions: FirebaseOptions) => {
  const isAppInitialized = getApps().length > 0
  printMessage(
    TAG,
    `initFirebaseApp. isAppInitialized: ${isAppInitialized}, projectId: ${firebaseOptions.projectId}`,
  )
  if (!isAppInitialized) {
    return initializeApp(firebaseOptions)
  }
  return getApps()[0]
}
