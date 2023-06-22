import { NextRouterQueryParameter } from 'shared/_types'

export const getNextRouterQueryParameter = (
  param: NextRouterQueryParameter,
) => {
  return param && typeof param === 'string' ? param : undefined
}
