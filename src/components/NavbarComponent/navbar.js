export default {
  props: {
    isSmallLogo: {
      type: Boolean,
      default: false
    },
    navbarText: {
      type: String,
      default: 'Philippine Laws, Statutes & Codes'
    }
  },
  name: 'NavbarComponent',
  data() {
    return {
      publicPath: process.env.BASE_URL
    }
  }
}