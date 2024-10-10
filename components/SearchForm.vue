<template>
  <div class="search-wrap">
    <form v-if="!searched" @submit.prevent="handleSearchImage()">
      <input v-model="query" type="search" placeholder="Search for photo" />
      <IconSearch class="search-icon" />
    </form>

    <div v-else>
      <button class="goback"@click="handleCancelSearch()">Go back</button>
      <h1 class="searched" v-if="loading">
        Searching for <span class="query"> "{{ query }}"</span>
      </h1>
      <h1 class="searched" v-else>
        Search Results for <span class="query"> "{{ query }}"</span>
      </h1>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { getImages } = useImagesStore()

const query = ref("");
const searched = ref(false);
const loading = ref(false);

function handleSearchImage() {
  searched.value = true;
  getImages(query.value)
  console.log(query.value);
}

function handleCancelSearch() {
  query.value = "";
  searched.value = false;
  getImages()
}
</script>

<style scoped>
.search-wrap {
  margin-top: 94px;
  max-width: 80%;
  margin-inline: auto;
}

form {
  position: relative;
}

input {
  width: 100%;
  height: 64px;
  padding: 10px 20px;

  padding-left: 46px;

  border-radius: 8px;
  background: #fff;

  border: none;

  /* Shadow/Shadow__Small */
  box-shadow: 0px 4px 8px 0px rgba(89, 89, 89, 0.1);
}

input,
input::placeholder {
  color: #595959;

  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
}

.search-icon {
  position: absolute;
  z-index: 10;
  top: 24px;
  left: 20px;
}

.goback {
  margin-bottom: 16px;
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  background-color: black;
  color: #fff;
}

.searched {
  font-weight: 500;
}

.searched .query {
  color: #595959;
}
</style>
