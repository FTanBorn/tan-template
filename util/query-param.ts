import { NextRouter } from 'next/router'

export const setQueryParamObject = (params: any, router: NextRouter) => {
  for (const key in params) {
    if (params[key] === null || params[key] === '') {
      delete params[key]
    }
  }
  router.replace(
    {
      pathname: window.location.pathname,
      query: { ...params }
    },
    undefined,
    {
      scroll: false,
      shallow: true
    }
  )
}
