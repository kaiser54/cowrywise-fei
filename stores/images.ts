import { defineStore } from 'pinia'
import { useUnsplash } from '~/composables/useUnsplash'

interface ImagesState {
  images: any[];
  loading: boolean;
  error: string | null;
}

export const useImagesStore = defineStore('images', {
  state: (): ImagesState => ({
    images: [],
    loading: false,
    error: null,
  }),
  actions: {
    async getImages(query?: string) {
      this.loading = true
      this.error = null
      try {
        const { searchPhotos } = useUnsplash()
        const res = await searchPhotos(query);
        this.images = res.value.results
      } catch (error: any) {
        this.error = error.message || 'An error occurred';
      } finally {
        this.loading = false
      }
    },
  },
})
