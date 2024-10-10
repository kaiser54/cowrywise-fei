<template>
  <NuxtRouteAnnouncer />
  <div class="hero_backdrop"></div>
  <SearchForm />
  <div style="margin-top: 74px;">
    <LoadingImages v-if="loading" />
    <ImageGrid v-else />
  </div>
</template>

<script setup lang="ts">

const imagesStore = useImagesStore();
const { loading } = storeToRefs(imagesStore);

onMounted(() => {
  imagesStore.getImages()
})
</script>
