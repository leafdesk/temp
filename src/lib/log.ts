/**
 * 메시지 로그 출력
 * @param tag 태그
 * @param message 메시지
 */
export const printMessage = (tag: string, message: string) => {
  console.log(`[${tag}] ${message}`)
}

/**
 * 객체 로그 출력
 * @param tag - 태그
 * @param object - 출력할 객체 데이터
 * @param shouldStringify - stringify 여부
 */
export const printObject = (
  tag: string,
  object: object,
  shouldStringify = false,
) => {
  console.log(
    `[${tag}]`,
    shouldStringify ? JSON.stringify(object, null, 2) : object,
  )
}
