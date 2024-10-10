<template>
  <Dialog.Root :open="isModalOpen" @openChange="closeModal">
    <Dialog.Overlay class="dialog-overlay" />
    <Dialog.Content class="dialog-content">
      <Dialog.Title class="sr-only">Image modal</Dialog.Title>
      <Dialog.Description class="sr-only">{{ currentImage?.alt_description }}</Dialog.Description>
      <Dialog.Close class="close-btn" @click="closeModal">&times;</Dialog.Close>

      <!-- Check if currentImage is defined before rendering -->
      <img
        v-if="currentImage"
        :src="currentImage.urls.regular"
        :alt="currentImage.alt_description"
        class="modal-image"
      />
      <p v-else>Loading...</p>
      <!-- Optional loading message -->

      <!-- Prev and Next buttons -->
      <button @click="prevImage" class="prev-btn" :disabled="!hasPrevious">
        Prev
      </button>
      <button @click="nextImage" class="next-btn" :disabled="!hasNext">
        Next
      </button>
    </Dialog.Content>
  </Dialog.Root>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits } from "vue";
import { Dialog } from "radix-vue/namespaced";

const props = defineProps<{
  images: any[];
  currentId: string; // Change currentIndex to currentId
  isModalOpen: boolean;
}>();

const emit = defineEmits(["close", "update-id"]); // Update event to handle ID

// Computed property to get the current image based on the ID
const currentImage = computed(() =>
  props.images.find((image) => image.id === props.currentId)
);

// Check if we have a previous or next image
const hasPrevious = computed(() => {
  const currentIndex = props.images.findIndex(
    (image) => image.id === props.currentId
  );
  return currentIndex > 0; // Check if there is a previous image
});

const hasNext = computed(() => {
  const currentIndex = props.images.findIndex(
    (image) => image.id === props.currentId
  );
  return currentIndex < props.images.length - 1; // Check if there is a next image
});

const closeModal = () => {
  emit("close");
};

const prevImage = () => {
  const currentIndex = props.images.findIndex(
    (image) => image.id === props.currentId
  ); // Find current index by ID
  if (currentIndex > 0) {
    emit("update-id", props.images[currentIndex - 1].id); // Emit the previous ID
  }
};

const nextImage = () => {
  const currentIndex = props.images.findIndex(
    (image) => image.id === props.currentId
  ); // Find current index by ID
  if (currentIndex < props.images.length - 1) {
    emit("update-id", props.images[currentIndex + 1].id); // Emit the next ID
  }
};
</script>

<style scoped>
.dialog-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8);
}

.dialog-content {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
}

.modal-image {
  max-width: 80vw;
  max-height: 80vh;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 30px;
  cursor: pointer;
}

.prev-btn,
.next-btn {
  background-color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.prev-btn {
  position: absolute;
  left: 0;
}

.next-btn {
  position: absolute;
  right: 0;
}
</style>
