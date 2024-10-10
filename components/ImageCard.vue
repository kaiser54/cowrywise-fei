<template>
  <div class="card-wrapper photo-card">
    <img :src="imageSrc" alt="Portrait of a smiling person" />
    <div class="overlay"></div>
    <div class="text-content">
      <h2>{{ name }}</h2>
      <p>{{ location }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  name: string;
  location: string;
  imageSrc: string;
}

const props = defineProps<Props>();
</script>

<style scoped>
.card-wrapper {
  position: relative;
  width: 100%;
  /* aspect-ratio: 3 / 4; */
  border-radius: 8px;
  overflow: hidden;
}

/* Styling the image */
.card-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Overlay at the bottom */
.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40%;
  background: linear-gradient(to top, rgb(0 0 0), rgb(0 0 0 / 1%));
}

/* Text styling */
.text-content {
  position: absolute;
  bottom: 16px;
  left: 16px;
  color: white;
}

.text-content h2 {
  font-size: 20px;
  font-weight: bold;
  margin: 0 0 4px 0;
}

.text-content p {
  font-size: 14px;
  margin: 0;
}

.photo-card {
  break-inside: avoid;
  page-break-inside: avoid;
  display: flex;
  flex-direction: column;
}
</style>
