/**
 * 파이어베이스 설정 객체.
 */

/**
 * leafdesk-temp 프로젝트 설정 객체.
 */
export const TEMP_FIREBASE_OPTIONS = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'leafdesk-temp.firebaseapp.com',
  projectId: 'leafdesk-temp',
  storageBucket: 'leafdesk-temp.firebasestorage.app',
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
}
