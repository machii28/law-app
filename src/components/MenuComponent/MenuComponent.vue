<template>
  <div>
    <div class="text-center py-20 font-serif menu md:py-40">
      <h1 class="text-3xl font-bold">
        Republic Act of the Philippines
      </h1>
      <small class="text-xl">
        Year 1946 - 2020
      </small>
      <router-link :to="'list'" id="start" class="block mx-auto my-10 px-20 py-1 bg-blue text-white cursor-pointer sm:px-10">
        Enter
      </router-link>
    </div>
  </div>
</template>

<script src="./menu.js"></script>
<style lang="scss" src="./menu.scss"></style>