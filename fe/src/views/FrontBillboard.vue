<template>
  <section class="billboards">
    <section
      id="billboard"
      class="portfolio-section spad"
    >
      <div class="container">
        <div class="row ">
          <div
            class=" wow fadeInUp col-md-6 col-xs-6 col-sm-12"
            data-wow-delay="0.2s"
          >
            <img width="420px" src="img/wtf5.png">
          </div>
          <div
            class=" want wow fadeInUp col-md-6 col-xs-6 col-sm-12"
            data-wow-delay="0.2s"
          >
            <h1 class="red-text">
              A DeFi Billboard
            </h1>
            <h1>This is a Harberger Tax Social Experiment</h1>
            <br>
                        <router-link
              to="/billboard"
              class="site-btn big wow fadeInUp"
              data-wow-delay="0.2s"
            >
              I WANNA SHILL
            </router-link>
          </div>
    <div class="container mt-5">
      <h5
        class="red-text"
      >
        This is the only place in the WTF-verse where you will see logos. REALLY LOUD LOGOS. We are creating "a DeFi billboard" specifically to take shilling off the serious discussions
      </h5>
      <br>
      <h5 class="white-text font-weight-regular">
        We will conduct a continuous auction for 10 display slots on "a DeFi billboard" with a Harberger Tax mechanism.
        The 5% tax goes to the event's ENS address
        <strong>defiwtf.eth</strong>. The proceeds will go into funding the event and funding research that comes out of the event. Auction starts at Oct 7.
      </h5>
      <br><br>
    </div>          
            <img src="img/defi-billboard.png">
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  components: {
  },
  props: [
  ],
  data(){
    return {
      cover: '',
      text: '',
      url1: '',
      adList: [],
    }
  },
  computed: {

  },
  watch: {
    parseURL(newVal) {
      let val = JSON.parse(newVal)
      if (val.cover) this.cover = val.cover
      if (val.text) this.text = val.text
    }
  },
  created(){
    this.getTotalNumber();
  },
  destroyed(){
  },
  methods: {
    getHeight:function() {
    },
    getAdBoardData: async function(total) {
      for (let i = 0; i < total; i++) {
        try {
          let res = await this.$root.getAdBoardDataId(i)
          console.log('res', res)
          if (res.content.includes(`"cover"`)) { // 只能这样判断了，不敢直接 JSON parse
            let data = JSON.parse(res.content)
            this.adList.push(data);
          } else { //有文字没图片的场合
            this.adList.push({ text: res.content, cover: "https://i.loli.net/2019/10/02/N4TzivwgLJypRb9.png" })
          }
        } catch (error) {
          console.log('getAdBoardDataId', error)
        }
      }
    },
    getTotalNumber: function () {
      this.$root.getTotalNumber().then(res => {
        this.getAdBoardData(Number(res))
      })
    }

  }
};
</script>
