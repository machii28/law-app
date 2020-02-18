<template>
  <div>
    <navbar-component></navbar-component>
    <menu-component></menu-component>
    <footer-component></footer-component>
  </div>
</template>

<script>
import FooterComponent from './FooterComponent/FooterComponent.vue';
import NavbarComponent from './NavbarComponent/NavbarComponent.vue';
import MenuComponent from './MenuComponent/MenuComponent.vue';

export default {
  name: 'MenuPage',
  components: {
    FooterComponent,
    NavbarComponent,
    MenuComponent
  }
}
</script>

<style lang="scss">
  
</style>