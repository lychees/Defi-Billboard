<template>
  <div class="home">
    <!--section class="resume-section" id="home">
      <div class="container  ">
        <div class="row">
          <div class=" about wow fadeInUp col-md-6 col-xs-6 col-sm-12" data-wow-delay="0.2s">
            <h2>About WTF: the Power of Asking</h2>
            <p>
              A modern resurrection of the Greek Pnyx (/nɪks/): a supportive space for open, inclusive, informed, and thoughtful exchanges of ideas, for the practice of the ancient
              art of asking the right questions to move beyond hype and arrive at knowledge.
            </p>
            <h2>DeFi.WTF pierces through the surface of decentralized finance</h2>
            <p>The first of a series of WTF events, traces the emergent DeFi stack and explores its implications through in-depth conversations with the space’s main actors.</p>
          </div>
          <div class="wow fadeInUp col-md-6 col-xs-6 col-sm-12" data-wow-delay="0.2s">
            <img src="img/wtf1.png" />
          </div>
        </div>
      </div>
    </section-->
    <section>
      <div
        class="row no-gutters"
        style="margin-top:5em; background:#cd341f"
      >
        <div class="col-3 d-none d-lg-inline m-0 p-0 my-auto">
          <b-img src="img/head-left.png" />
        </div>
        <div
          class="col-lg-6 my-auto px-md-4"
          style="background:#cd341f"
        >
          <b-carousel
            id="carousel"
            v-model="slide"
            :interval="4000"
            controls
            indicators
            background="#cd341f"
            class="mx-md-4"
            img-width="360"
            img-height="180"
            style="background:#cd341f"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
          >
            <!-- Slides with image only -->
            <b-carousel-slide>
              <template v-slot:img>
                <img
                  class="d-block img-fluid w-100"
                  width="360"
                  height="180"
                  src="img/Slide5.jpg"
                  alt="image slot"
                >
              </template>
            </b-carousel-slide>
            <b-carousel-slide>
              <template v-slot:img>
                <img
                  class="d-block img-fluid w-100"
                  width="360"
                  height="180"
                  src="img/Slide6.jpg"
                  alt="image slot"
                >
              </template>
            </b-carousel-slide>
            <b-carousel-slide>
              <template v-slot:img>
                <img
                  class="d-block img-fluid w-100"
                  width="360"
                  height="180"
                  src="img/Slide3.jpg"
                  alt="image slot"
                >
              </template>
            </b-carousel-slide>
            <b-carousel-slide>
              <template v-slot:img>
                <img
                  class="d-block img-fluid w-100"
                  width="360"
                  height="180"
                  src="img/Slide4.jpeg"
                  alt="image slot"
                >
              </template>
            </b-carousel-slide>            
          </b-carousel>
        </div>
        <div class="col-3 d-none d-lg-inline m-0 p-0 my-auto">
          <b-img
            src="img/head-left.png"
            style="transform: rotate(180deg)"
          />
        </div>
      </div>
    </section>
    <section class="row my-4">
      <div class="col-8 offset-2">
        <h4 class=" red-text">
          About WTF | the Power of Asking
        </h4>
        <p>
          A modern resurrection of the Greek Pnyx (/nɪks/): a supportive space for open, inclusive, informed, and thoughtful exchanges of ideas, for the practice of the
          ancient art of asking the right questions to move beyond hype and arrive at knowledge.
        </p>
        <h4 class="mt-4 red-text">
          DeFi.WTF | Pierces through the Surface of Decentralized Finance
        </h4>
        <p>
          The first of a series of WTF events, traces the emergent DeFi stack and explores its implications through in-depth conversations with the space’s main actors.
        </p>
      </div>
    </section>
    <section
      id="Agenda"
      class="resume-section"
    >
      <div class="container">
        <div class="row no-gutters mt-4 pt-4">
          <div class="col px-0 statue text-center my-auto">
            <img src="img/marylin.png">
          </div>
          <div class="section-title mt-3 pt-5 col-6">
            <h2>Agenda</h2>
            <h5 class="font-weight-medium mt-2">
              2019.10.7 @ International House, Osaka, Japan
            </h5>
            <div class="text-center mt-5">
              
              <a
                href="https://github.com/carboclan/pm/issues/69"
                class="site-btn big wow fadeInUp"
                data-wow-delay="0.2s"
              >
                Archive
              </a>
            </div>
          </div>
          <div class="col px-0 statue text-center my-aut">
            <img src="img/selfie.png">
          </div>
        </div>
        <div class="row no-gutters panel pt-4 mt-5">
          <div class="col-12  ">
            <!-- Review item -->
            <div
              v-for="(item, i) in Agenda"
              :key="i"
            >
              <hr
                v-if="i > 0"
                class="d-md-none"
                style="width:30%;border: 1px solid rgba(0,0,0,0.45);"
              >
              <div
                class="row resume-item py-4 px-0 px-sm-3 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div class="col-md-2">
                  <h5>{{ item.time }}</h5>
                  <p>{{ item.subtitle }}</p>
                </div>
                <div
                  class="col-md-6 pointer"
                  @click="toggleList(i)"
                >
                  <h4 class="panel-header">
                    {{ item.title }}
                  </h4>
                  <ul
                    v-show="item.showBody"
                    class="panel-ul"
                  >
                    <li
                      v-for="(g, j) in item.body"
                      :key="j"
                    >
                      {{ j }}.{{ g }}
                    </li>
                  </ul>
                </div>
                <div class="col-md-4 mt-3 text-right">
                  <avatar
                    v-for="(name, index) in item.speakers"
                    :key="index"
                    :person="People[name]"
                    class="mr-2"
                  />
                </div>
              </div>
            </div>
            <div class="text-center my-5">
              <a
                target="_blank"
                href="https://github.com/carboclan/pm/blob/master/research/DeFi.WTF_Agenda.md"
                class="site-btn big wow fadeInUp"
                data-wow-delay="0.2s"
              >FIND OUT MORE</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <FrontBillboard />
    </section>
    <section>
      <div class="container">
        <div class="row">
          <div
            class="col-md-12 fish-wap wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <img
              class="fish"
              src="img/wtf3.png"
            >
          </div>
          <div class="col-md-12 text-center mb-5">
            <h1 class="my-5">
              21-Day pop-up collective
            </h1>
            <Stuffs />
            <!-- <avatar v-for="item in People" :key="item.image" :person="item" size="70" class="m-3"/>-->
          </div>
        </div>
      </div>
    </section>
    <section
      id="location"
      class="about-section spad red-section"
    >
      <div class="row">
        <div
          class="col-lg-5 offset-lg-1 maps wow fadeInUp maps"
          data-wow-delay="0.3s"
        >
          <figure>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6563.45010563074!2d135.517705!3d34.661646!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf2eaba4fb607cc08!2sInternational%20House%2C%20Osaka!5e0!3m2!1sen!2sus!4v1569379742750!5m2!1sen!2sus"
              width="600"
              height="450"
              frameborder="0"
              style="border:0;"
              allowfullscreen=""
            />
          </figure>
        </div>
        <div
          class="col-lg-5 about-text wow fadeInDown"
          data-wow-delay="0.5s"
        >
          <h3>
            Email: <a
              href="mailto:ask@defi.wtf"
              class="font-weight-thin"
            >ask@defi.wtf</a> Telegram: <a
              href="http://t.me/defiwtf"
              target="_blank"
              class="font-weight-thin"
            >t.me/defiwtf</a>
          </h3>
          <br>
          <h3>Monday, Oct 7, 2019<br> 10:00-18:00</h3>
          <br>
          <h3>Location: International House, Osaka </h3>
          <h4 class="font-weight-light">
            8-chōme-2-6 Uehonmachi, Tennōji-ku, Osaka, 543-0001, Japan
          </h4>
          <br>
          <br>
          <h6>DeFi.WTF will take place at the same venue as the Ethereum Lightning Talks organized by ETHPLANET. </h6>
        </div>
      </div>
    </section>
    <section>
      <div class="share">
        <a
          target="_blank"
          href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.defi.wtf%2F&t=defi"
          class="share-facebook "
        ><i class="fa fa-facebook" /></a>
        <a
          target="_blank"
          href="https://twitter.com/intent/tweet?text=defi&url=https%3A%2F%2Fwww.defi.wtf%2F"
          class="share-twitter"
        ><i class="fa fa-twitter" /></a>
      </div>
    </section>
  </div>
</template>

<style scoped>
  .statue img{
    max-height:16em
  }
</style>

<script>
import Avatar from "../components/Avatar.vue";
import People from "../util/people.js";
import Agenda from "../util/agenda.js";
import FrontBillboard from "../views/FrontBillboard.vue";
import Stuffs from "../views/Stuffs.vue";

export default {
  name: "Home",
  components: { FrontBillboard, Avatar, Stuffs },
  data() {
    return {
      Agenda,
      People,
      slide: 0,
      sliding: null,
      title: "",
      startPrice: "",
      description: "",
      amount: 0,
      auctionCard: [],
      auctionCardDev: [],
      isShow: false,
      isLoad: false,
      isBid: false,
      isFin: false,
      bidPrice: "",
      auctionAddress: "",
      bidders: 0,
      finalizeStatus: "Finalize auctioin",
      createStatus: "CREATE",
      adInfo: {
        id: "ad0",
        price: 600,
        ratio: 0.02,
        content:
          "https://wx1.sinaimg.cn/large/70eb479bly1g7d68qao4fj20f408iwnp.jpg"
      }
    };
  },
  beforeMount() {
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
    toggleList(i) {
      this.Agenda[i].showBody = !this.Agenda[i].showBody
    }
  }
};
</script>


<style scoped>
.panel-ul {
  list-style: none;
}
.panel-ul li {
  margin: 10px 0;
  line-height: 1.5;
  font-size: 16px;
}
</style>