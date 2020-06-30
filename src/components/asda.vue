<template>
  <div>
    <navbar-component :isSmallLogo="true" :navbar-text="'Republic Acts'"></navbar-component>
    <div id="lawcontent">
      <div id='law-header'>
        <div id='law-title'>{{ title }}</div>
        <div id='law-date'>{{ date }}</div>
        <div id='law-description'>
          {{ description }}
        </div>
      </div>
      <div id="law-body">
        {{ content }}
      </div>
      <iframe id="iframe" :src="iframeUrl" frameborder="0" cross-origin="anonymous"></iframe>
    </div>
  </div>
</template>

<script>
import NavbarComponent from './NavbarComponent/NavbarComponent.vue';

export default {
  name: 'LawPage',
  data() {
    return {
      iframeUrl: '',
      content: '',
      title: '',
      date: '',
      description: ''
    }
  },
  mounted() {
    let id = this.$route.query.id;
    let $this = this;
    $this.iframeUrl = `./laws/${id}.html`;
    this.getContent();
  },
  methods: {
    getContent() {
      let $this = this;

      window.setTimeout(function() {
        let iframe = document.getElementById('iframe');
        let doc = iframe.contentDocument? iframe.contentDocument: iframe.contentWindow.document;
        let content = doc.getElementById('law-body').innerHTML.replace(/<\/?[^>]+(>|$)/g, "");
        let title = doc.getElementById('law-title').innerHTML.replace(/<\/?[^>]+(>|$)/g, "");
        let date = doc.getElementById('law-date').innerHTML.replace(/<\/?[^>]+(>|$)/g, "");
        let description = doc.getElementById('law-description').innerHTML.replace(/<\/?[^>]+(>|$)/g, "");

        $this.content = content;
        $this.title = title;
        $this.date = date;
        $this.description = description; 


        window.responsiveVoice.speak(content);
      }, 1000);
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

  #iframe {
    width: 100vw;
    height: 100vh;
    display: none;
  }
</style>