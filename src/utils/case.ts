/**
 * 将给定字符串的第一个字符转换为小写
 * @param value 待处理的字符串. 如果非字符串, 将抛出TypeError
 * @returns 处理后的字符串. 如果输入为空字符串, 则返回空字符串
 * @throws {TypeError} 如果value不是字符串
 */
export const lowcaseFirst = (value: string) => {
  if (typeof value !== 'string') {
    throw new TypeError('Expected a string as input')
  }

  if (value === '') return ''
  return `${value.charAt(0).toLowerCase()}${value.slice(1)}`
}

/**
 * 将给定字符串的第一个字符转换为大写
 * @param value 待处理的字符串. 如果非字符串, 将抛出TypeError
 * @returns 处理后的字符串. 如果输入为空字符串, 则返回空字符串
 * @throws {TypeError} 如果value不是字符串
 */
export const uppercaseFirst = (value: string) => {
  if (typeof value !== 'string') {
    throw new TypeError('Expected a string as input')
  }

  if (value === '') return ''
  return `${value.charAt(0).toLocaleUpperCase()}${value.slice(1)}`
}
