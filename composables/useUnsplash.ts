export const useUnsplash = () => {
  const config = useRuntimeConfig()

  const searchPhotos = async (query: string  = 'african'): Promise<any | null> => {
    const { data } = await useFetch(`https://api.unsplash.com/search/photos`, {
      params: {
        query,
        client_id: config.public.unsplashAccessKey,
      },
    })
    return data
  }

  return {
    searchPhotos,
  }
}