<template>
  <div class="load">
    <div class="card" v-for="index in 7" :key="index">
      <div class="context">
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.load {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 95%;
  max-width: 1400px;
  margin: auto;
  transform: translateY(-2%);
  grid-gap: 40px;
  animation: enter 0.4s 1 linear forwards;
  opacity: 0;
  transform: translateY(-5%);
}

@keyframes enter {
  from {
    transform: translateY(-5%);
    opacity: 0;
  }
  to {
    transform: translateY(4%);
    opacity: 1;
  }
}

.card {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
}

.load .card {
  background: rgb(206, 206, 206);
}

.load .card .context {
  position: absolute;
  bottom: 10px;
  left: 10px;
  width: 70%;
}

.load .card .context div {
  width: 100%;
  height: 20px;
  background: #e0e0e0;
  margin: 5px 0;
  border-radius: 5px;
}

.load .card .context div:nth-child(2) {
  width: 80%;
}

.card::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 10%;
  height: 100%;
  background: rgb(209, 209, 209);
  filter: blur(30px);
}

.load .card::after {
  animation: load 1s infinite linear forwards;
  background: #dedede;
}

@keyframes load {
  from {
    transform: translateX(-1000%);
  }
  to {
    transform: translateX(1000%);
  }
}

.card .ctx {
  position: absolute;
  bottom: 10px;
  left: 10px;
  z-index: 1;
}

.load .card {
  height: 380px;
}

@media (max-width: 957px) {
  .hello,
  .load {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 717px) {
  .hello,
  .load {
    grid-template-columns: repeat(2, 1fr);
    width: 90%;
  }
}
@media (max-width: 445px) {
  .hello,
  .load {
    grid-template-columns: repeat(1, 1fr);
    transform: translateY(-1%);
  }
}
</style>