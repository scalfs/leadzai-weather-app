import { useCallback, useEffect, useState } from 'react'

interface Options {
  enabled?: boolean
}

export function useFetch<T>(fetchFn: () => Promise<T>, { enabled }: Options) {
  const [data, setData] = useState<T>()
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(true)

  const callback = useCallback(
    (signal: AbortSignal) => {
      setIsLoading(true)
      setError(undefined)
      setData(undefined)
      fetchFn()
        .then((data) => !signal.aborted && setData(data))
        .catch((err) => !signal.aborted && setError(err))
        .finally(() => !signal.aborted && setIsLoading(false))
    },
    [fetchFn]
  )

  useEffect(() => {
    const abortController = new AbortController()
    if (enabled) callback(abortController.signal)

    return () => abortController.abort()
  }, [enabled, callback])

  return { data, isLoading, error }
}
