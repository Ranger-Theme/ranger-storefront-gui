import { makeDir } from '../utils'

export const create = async (params: CommandParams) => {
  try {
    const data = await makeDir(params.name)
    console.log(data)
    return Promise.resolve()
  } catch (error) {
    return Promise.reject(error)
  }
}
