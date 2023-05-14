import WebStorageCache from 'web-storage-cache'

type CacheType = 'sessionStorage' | 'localStorage'

export function useCache(type: CacheType = 'localStorage') {
  const wsCache: WebStorageCache = new WebStorageCache({
    storage: type,
  })

  return {
    wsCache,
  }
}
