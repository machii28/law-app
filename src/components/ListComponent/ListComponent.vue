<template>
  <div>
    <ul>
      <li v-for="law in data" :key="law.No">
        <router-link :to="{name: 'law-page', query: {id: law.No}}">
          <div class="text-justify p-4">
            <h1 class="font-bold">{{ law.Title }}</h1>
            <small class="font-hairline">{{ law.Date }}</small>
            <p>{{ law.Description }}</p>
          </div>
        </router-link>
      </li>
    </ul>
    <div class="pagination">
      <button class="px-3 py-1 bg-blue text-white" @click="prev">Prev</button>
      <button class="px-3 py-1 bg-blue text-white" @click="next">Next</button>
    </div>
  </div>
</template>

<script src="./list.js"></script>
<style lang="scss" src="./list.scss"></style>