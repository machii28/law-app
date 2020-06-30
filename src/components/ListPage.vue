<template>
  <div>
    <navbar-component :isSmallLogo="true" :navbar-text="'Republic Acts'"></navbar-component>
    <list-component></list-component>
  </div>
</template>

<script>
import NavbarComponent from './NavbarComponent/NavbarComponent';
import ListComponent from './ListComponent/ListComponent';

export default {
  name: 'ListPage',
  components: {
    NavbarComponent,
    ListComponent,
  }
}
</script>

<style lang="">
  
</style>