const Mixin = {

  data() {
    return {
      // apiUrl: window.apiUrl
    }
  },

  computed: {

    version() {
      return 'v' + this.$store.state.version
    },
    // token() {
    //     return this.$store.state.token
    // },
    // userName() {
    //     return this.$store.state.userName
    // }
  },

  methods: {
    _M(msg) {
      this.$notify({
        type: 'primary',
        message: msg
      });
    },
    _N(msg) {
      this.$notify({
        type: 'warning',
        message: msg
      });
    },
    _Modal(msg, title) {
      this.$dialog.alert({
        title: title ? title : '温馨提示',
        message: msg
      });
    },
    toLink(name) {
      this.$router.push({ name: name, query: { r: Math.random() } })
    },
    toLinkParams(params) {
      params.query.r = Math.random()
      this.$router.push(params)
    },
    back() {
      this.$router.go(-1)
    },
    openWindow(params) {
      const { href } = this.$router.resolve(params)
      window.open(href, '_blank')
    }
  },
  filters: {

  }
}


export default Mixin;
