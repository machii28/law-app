export default {
  name: 'MenuComponent',
  methods: {
    start() {
      this.$router.push('/list');
    }
  },
  mounted() {
    localStorage.removeItem('currentpage');
  },
}