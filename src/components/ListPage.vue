<template>
  <div>
    <navbar-component :isSmallLogo="true" :navbar-text="'Republic Acts'"></navbar-component>
    <list-component></list-component>
    <footer-component></footer-component>
  </div>
</template>

<script>
import NavbarComponent from './NavbarComponent/NavbarComponent';
import ListComponent from './ListComponent/ListComponent';
import FooterComponent from './FooterComponent/FooterComponent';

export default {
  name: 'ListPage',
  components: {
    NavbarComponent,
    ListComponent,
    FooterComponent
  }
}
</script>

<style lang="">
  
</style>