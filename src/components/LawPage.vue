<template>
  <div>
    <navbar-component :isSmallLogo="true" :navbar-text="'Republic Acts'"></navbar-component>
    <div class="block p-1">
      <button class="p-1 text-white bg-blue mx-1" @click="play()">Play</button>
      <button class="p-1 text-white bg-red mx-1" @click="pause()">Pause</button>
    </div>
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

    this.$http.get('./laws/' + id + '.html').then(response => {
      document.getElementById('lawcontent').innerHTML = response.data;
      $this.lawData = response.data;
      $this.lawData = $this.lawData.replace(/<[^>]*>?/gm, '');
      $this.lawData = $this.lawData.replace(/(<([^>]+)>)/ig,"");
    });
  },
  destroyed() {
    window.responsiveVoice.cancel();
  },
  methods: {
    play() {
      if (!window.responsiveVoice.isPlaying()) {
        window.responsiveVoice.speak(document.getElementById('law-body').textContent);
      } else {
        window.responsiveVoice.resume();
      }
    },
    pause() {
      window.responsiveVoice.pause();
    }
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