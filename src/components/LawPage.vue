<template>
  <div>
    <navbar-component :isSmallLogo="true" :navbar-text="'Republic Acts'"></navbar-component>
    <div id="lawcontent">

    </div>
  </div>
</template>

<script>
import NavbarComponent from './NavbarComponent/NavbarComponent.vue';

export default {
  name: 'LawPage',
  data() {
    return {
      lawData: ''
    }
  },
  mounted() {
    let id = this.$route.query.id;
    let $this = this;

    this.$http.get('/laws/' + id + '.html').then(response => {
      document.getElementById('lawcontent').innerHTML = response.data;
      $this.lawData = response.data;
      $this.lawData = $this.lawData.replace(/<[^>]*>?/gm, '');
      $this.lawData = $this.lawData.replace(/(<([^>]+)>)/ig,"");
      window.responsiveVoice.speak(document.getElementById('law-body').textContent);
    });
  },
  components: {
    NavbarComponent
  }
}
</script>

<style lang="scss">
  #lawcontent {
    @apply p-3;
  }

  #law-header {
    @apply m-auto font-bold text-center;
  }

  #law-body {
    @apply text-justify;
  }
</style>