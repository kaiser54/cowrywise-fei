<template>
  <div>
    <section class="photo-card-wrapper container">
      <ImageCard
        v-for="image in images"
        :key="image.id"
        :imageSrc="image.urls.small"
        :name="image.user.name"
        :location="image.user.location || ''"
        @click="openModal(image.id)"
      />
    </section>

    <!-- Use the modal component -->
    <ImageModal
      :is-modal-open="isModalOpen"
      :images="images"
      :current-id="currentId"
      @close="closeModal"
      @update-id="updateId"
    />
  </div>
</template>

<script setup>
import { ref } from "vue"; // Import ref for local state
import { storeToRefs } from "pinia";
import { useImagesStore } from "@/stores/images";
import ImageCard from "@/components/ImageCard.vue";
import ImageModal from "@/components/ImageModal.vue"; // Import the ImageModal

const imagesStore = useImagesStore();
const { images } = storeToRefs(imagesStore);

const isModalOpen = ref(false);
const currentId = ref(''); // Store the current image ID

const openModal = (id) => {
  currentId.value = id; // Set the current image ID
  isModalOpen.value = true; // Open the modal
};

const closeModal = () => {
  isModalOpen.value = false; // Close the modal
};

const updateId = (id) => {
  currentId.value = id; // Update the current image ID
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  width: 100vw;
  background: #fff;
}

.hero_backdrop {
  position: absolute;
  height: 256px;
  width: 100%;
  background: #dce3eb;
  z-index: -1;
  top: 0;
}
/* 
.photo-card-wrapper {
  width: fit-content;
  margin-inline: auto;
  display: column;
  columns: 1;
  gap: 20px;
  padding: 20px;
}

@media (min-width: 640px) {
  .photo-card-wrapper {
    columns: 2;
  }
}

@media (min-width: 768px) {
  .photo-card-wrapper {
    columns: 3;
  }
}

@media (min-width: 1024px) {
  .photo-card-wrapper {
    columns: 4;
  }
}

.photo-card-wrapper > * {
  break-inside: avoid;
  margin-bottom: 20px;
} */

/* masonry styles */
.container {
  width: fit-content;
  margin-inline: auto;
  --masonry-columns: 1;
  --masonry-gap: 1rem;
}

@media (min-width: 768px) {
  .container {
    --masonry-columns: 2;
    --masonry-gap: 1rem;
  }
}

@media (min-width: 1024px) {
  .container {
    --masonry-columns: 3;
    --masonry-gap: 2rem;
  }
}

/* load only if grid-template-rows: masonry is supported by the browser else use the fallback */
@supports (grid-template-rows: masonry) {
  .container {
    display: grid;
    grid-template-columns: repeat(var(--masonry-columns), 1fr);
    grid-gap: var(--masonry-gap);
    grid-template-rows: masonry;
  }

  .container > * {
    margin-bottom: 0;
  }
}

/* fallback */
.container {
  column-count: var(--masonry-columns);
  column-gap: var(--masonry-gap);
}

.container > * {
  margin-bottom: var(--masonry-gap);
  break-inside: avoid;
}
</style>
