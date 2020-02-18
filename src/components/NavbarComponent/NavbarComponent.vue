<template>
  <div class="navbar">
    <nav class="flex items-center justify-betweeen flex-wrap bg-blue p-6">
      <div class="w-1/6 flex items-center flex-shrink-0 text-white">
        <img src="~/assets/images/logo.png" alt="50" :width="!isSmallLogo ? 50 : 30">
      </div>
      <h4 class="w-5/6 m-auto block text-white font-serif font-bold text-base sm:text-sm ...">
        {{ navbarText }}
      </h4>
      <div class="w-1/5"></div>
    </nav>
  </div>
</template>

<script src="./navbar.js"></script>
<style lang="scss" src="./navbar.scss"></style>