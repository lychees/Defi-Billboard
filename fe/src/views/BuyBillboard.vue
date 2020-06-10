<template>
  <section
    id="billboard"
    class="portfolio-section spad"
  >
    <div class="container">
      <div class="row">
        <div
          class="wow fadeInUp col-md-6 col-xs-6 col-sm-12"
          data-wow-delay="0.2s"
        >
          <img src="img/wtf5.png">
        </div>
        <div
          class="want wow fadeInUp col-md-6 col-xs-6 col-sm-12"
          data-wow-delay="0.2s"
        >
          <h1 class="red-text">
            A DeFi Billboard
          </h1>
          <h1>This is a Harberger Tax Social Experiment</h1>
        </div>
      </div>
    </div>

    <div class="container mt-5">
      <br>
      <h5
        class="red-text"
      >
        This is the only place in the WTF-verse where you will see logos. REALLY LOUD LOGOS. We are creating "a DeFi billboard" specifically to take shilling off the serious discussions
      </h5>
      <br>
      <h5 class="white-text font-weight-regular">
        We will conduct a continuous auction for 10 display slots on "a DeFi billboard" with a Harberger Tax mechanism.
        The 5% tax goes to the event's ENS address
        <strong>defiwtf.eth</strong>. The proceeds will go into funding the event and funding research that comes out of the event. Auction starts Oct 7.
      </h5>
    </div>
    <div class="container my-4">
      <div class="row my-4 w-100">
        <h2 class="w-100 text-center mt-4">
          Click on the billboard you would like to buy
        </h2>
      </div>
      <div class="row billboard">
        <div
          v-for="(board , index) in boards"
          :key="index"
          class="col-xl-1-5 col-lg-3 col-md-4 col-xs-6 col-sm-6"
          :class="['round-buy', 'pointer', selectedBoard===index ? 'selected' : '']"
          @click="selectedBoard = index"
        >
          <img
            :src="board.url.cover"
            alt="ADS"
            class="round-image"
          >
          <!--p>{{ad.text}}</p-->
          <div class="overlay">
            {{ board.price }}Ξ
          </div>
        </div>
      </div>
    </div>

    <div class="container my-4">
      <h4 class="red-text mt-2">
        Price:
        <span class="ml-4 font-weight-thin white-text">{{ boards[selectedBoard].price | formatEth }}</span>
      </h4>
      <h4 class="red-text mt-2">
        Owner:
        <span class="ml-4 font-weight-thin white-text">{{ boards[selectedBoard].owner }}</span>
      </h4>
      <h4 class="red-text mt-2">
        Deposit:
        <span class="ml-4 font-weight-thin white-text">{{ boards[selectedBoard].balance | formatEth(4) }}</span>
      </h4>
      <h4 class="red-text mt-2">
        Redeemable Until:
        <span
          class="ml-4 font-weight-thin white-text"
        >{{ (boards[selectedBoard].until) }}</span>
      </h4>
      <h4 class="red-text mt-2">
        URL:
        <span class="ml-4 font-weight-thin white-text">{{ boards[selectedBoard].url }}</span>
      </h4>
      <div class="text-center my-5">
        <a
          v-if="coinbase && coinbase.toUpperCase() === boards[selectedBoard].owner.toUpperCase()"
          class="site-btn big wow fadeInUp"
          style="font-size:2em; font-weight:bold"
          data-wow-delay="0.2s"
          @click="showUpdateModal = true"
        >Update</a>
        <a
          v-else
          class="site-btn big wow fadeInUp"
          style="font-size:2em; font-weight:bold"
          data-wow-delay="0.2s"
          @click="showBuyModal = true"
        >Buy Now!</a>
      </div>
    </div>
    <b-modal
      v-model="showBuyModal"
      title="Buy Billboard"
    >
      <b-container fluid>
        <div class="w-100">
          Input a URL of your image or upload one.
          <div class="firstclass funbtnclass mb-4">
            <input
              ref="newURL"
              v-model="cover"
              type="text"
              placeholder="URL of your image"
            >
          </div>

          <div class="billboard-slide">
            <div class="billboard-img">
              <input
                ref="file"
                type="file"
                accept="image/png, image/jpeg, image/jpg, image/gif, image/webp"
                @change="upload"
              >
              <img
                v-if="!cover"
                id="billboardAdd"
                class="add"
                src="upload/add.png"
                alt="add"
                @click="uploadAdd"
              >
              <img
                v-if="cover"
                id="billboardCover"
                class="cover"
                :src="cover"
                alt="cover"
              >
              <div
                v-if="cover"
                id="billboardDel"
                class="full"
                @click="cover = ''"
              >
                <img
                  class="del"
                  src="upload/del.png"
                  alt="del"
                >
              </div>
              <div
                v-if="loading"
                id="billboardLoading"
                class="full-loading"
              >
                Uploading...
              </div>
            </div>
          </div>
          Current price: {{ boards[selectedBoard].price | formatEth }}
          <br>

          <div class="firstclass funbtnclass">
            Your price in ether:
            <input
              ref="newprice"
              v-model="newPrice"
              type="number"
              step="5"
              placeholder="Your price, in ETH"
            >
          </div>
          <div class="firstclass funbtnclass">
            How many days want to HODL?
            <input
              ref="numberOfDays"
              v-model="numberOfDays"
              type="number"
              placeholder="Number of Days"
            >
          </div>This will be taken automatically. Unused deposit can be withdrawn any time.
          <br>
          Price per day: {{ taxPerDay | formatEth }}
          <br>
          Total you have to pay: {{ taxPerDay * numberOfDays + newPrice | formatEth }}
        </div>
      </b-container>

      <template v-slot:modal-footer>
        <div class="w-100">
          <span
            class="font-weight-bold ml-3 pt-2 my-auto"
            style="font-size:1.5em; color:black; line-height:2.3em"
          >Total: {{ taxPerDay * numberOfDays + Number(newPrice) | formatEth(4) }}</span>
          <a
            class="site-btn float-right font-weight-bold" 
            style="font-size:1.1em;"
            @click="buy"
          >BUY NOW</a>
        </div>
      </template>
    </b-modal>
    <b-modal
      v-model="showUpdateModal"
      title="Update Billboard"
    >
      <b-container fluid>
        <div class="w-100">
          <div class="firstclass funbtnclass">
            <input
              ref="newprice"
              type="number"
              step="0.01"
              placeholder="new price in ETH"
            >
            <button
              class="confirmbuttonclass"
              @click="change"
            >
              Change
            </button>
          </div>

          <div class="firstclass funbtnclass">
            <input
              ref="depositbal"
              type="number"
              step="0.01"
              placeholder="balance in ETH"
            >
            <button
              class="confirmbuttonclass"
              @click="deposit"
            >
              Deposit
            </button>
          </div>
          <div class="firstclass funbtnclass">
            <input
              ref="withdrawDeposit"
              type="number"
              step="0.01"
              placeholder="balance in ETH"
            >
            <button
              class="confirmbuttonclass"
              @click="withdraw"
            >
              Withdraw
            </button>
          </div>

          Input a URL of your image or upload one.
          <div class="firstclass funbtnclass">
            <input
              ref="newURL"
              v-model="cover"
              type="text"
              placeholder="URL of your image"
            >
          </div>

          <div class="billboard-slide">
            <div class="billboard-img">
              <input
                ref="file"
                type="file"
                accept="image/png, image/jpeg, image/jpg, image/gif, image/webp"
                @change="upload"
              >
              <img
                v-if="!cover"
                id="billboardAdd"
                class="add"
                src="upload/add.png"
                alt="add"
                @click="uploadAdd"
              >
              <img
                v-if="cover"
                id="billboardCover"
                class="cover"
                :src="cover"
                alt="cover"
              >
              <div
                v-if="cover"
                id="billboardDel"
                class="full"
                @click="cover = ''"
              >
                <img
                  class="del"
                  src="upload/del.png"
                  alt="del"
                >
              </div>
              <div
                v-if="loading"
                id="billboardLoading"
                class="full-loading"
              >
                Uploading...
              </div>
            </div>
          </div>
        </div>
      </b-container>

      <template v-slot:modal-footer>
        <div class="w-100">
          <a
            class="site-btn float-right font-weight-bold"
            @click="update"
          >UPDATE</a>
        </div>
      </template>
    </b-modal>
  </section>
</template>

<script>
import { uploadToSmDotMs } from "../util/image";
import axios from "axios";
import Web3 from "web3";
import { fromWei } from "web3-utils";

export default {
  components: {},
  props: [],
  data() {
    return {
      cover: "",
      text: "",
      content: "",
      loading: false,
      url1: "",
      adList: [],
      showModal: false,
      showBuyModal: false,
      showUpdateModal: false,
      newPrice: 0,
      newDeposit: 0,
      numberOfDays: 1,
      //get blockchain prices, return them in digestible format
      boards: [
      ],
      selectedBoard: 0
    };
  },
  computed: {
    coinbase() {
      return this.$store.state.web3.coinbase;
    },
    taxPerDay() {
      return this.newPrice > this.boards[this.selectedBoard].price
        ? this.newPrice / 30
        : this.boards[this.selectedBoard].price / 30;
    }
  },
  watch: {
    selectedBoard(newVal) {
      this.newPrice = parseFloat(this.boards[newVal].price) + 0.01;
    }
  },
  created() {
    this.fetchURL("//t.mcarlo.com/api/list_boards?networkId=1");
    web3.version.getNetwork((err, netId) => {
      this.fetchURL(`//t.mcarlo.com/api/list_boards?networkId=${netId}`);
    }).catch((result = {}) => {
    });
  },
  destroyed() {},
  methods: {
    fetchURL(url) {
      axios.get(url).then(({ data }) => {
        // functional style babe, just map it
        this.boards = data.map(item => {
          const url = item.content.includes(`"cover"`) ? JSON.parse(item.content) : "none";
          return {
            price: fromWei(item.price.toString(10), "ether"),
            owner: item.owner,
            deposit: item.deposit,
            until: item.lastTaxPayTimestamp,
            url
          }
        })
      })
    },
    getContentData() {
      let contentData = {
        text: this.content,
        cover: this.cover,
      }
      let contentDataJson = JSON.stringify(contentData)
      return contentDataJson;
    },
    changeContentImg() {
      let contentData = this.getContentData();
      const id = this.selectedBoard;
      const data = Object.assign({}, { id, contentToChange: contentData })
      this.$root.changeContent(data)
    },

    change() {
      let priceToChange = this.newPrice;
      const id = this.selectedBoard;
      const data = Object.assign({}, { id, priceToChange });
      this.$root.changePrice(data);
    },
    deposit() {
      let depositToAdd = this.deposit;
      const id = this.selectedBoard;
      const data = Object.assign({}, { id, depositToAdd });
      this.$root.addDeposit(data);
    },

    withdraw() {
      let amountToWithdraw = this.withdrawDeposit.value;
      const id = this.selectedBoard;
      const data = Object.assign({}, { id, amountToWithdraw });
      this.$root.withdrawDeposit(data);
    },
    buy() {
      this.showBuyModal = false;
      const initName = this.getContentData();

      /*this.$refs.initname.value
      function strlen(str) {
        var len = 0;
        for (var i = 0; i < str.length; i++) {

          var a = str.charAt(i);
          if (a.match(/[^\x00-\xff]/ig) != null) {
            len += 2;
          } else {
            len += 1;
          }
        }
        return len;
      }
      if (strlen(initName)>48) {
        this.contenttips = '内容长度不超过24个汉字或48个英文字符,现在长度是'+strlen(initName);
        return;
      }*/

      const initPrice = this.newPrice;
      const id = this.selectedBoard;
      const initDeposit = this.taxPerDay * this.numberOfDays;
      const artPrice = this.boards[id].price;
      const data = Object.assign(
        {},
        { id, initPrice, initDeposit, artPrice, initName }
      );
      
      console.log(data);

      this.$root.buyAdBoard(data);
    },
    update() {
      this.showBuyModal = false;
      this.changeContentImg();
    },
    uploadAdd() {
      let fileDom = this.$refs.file;
      fileDom.click();
    },
    async upload(e) {
      this.file = e.target.files[0];
      this.uploadBtn();
    },
    async uploadBtn() {
      this.loading = true;
      let fileDom = this.$refs.file;
      fileDom.setAttribute("type", "text");
      // The right way to use async await
      const res = await uploadToSmDotMs(this.file);
      try {
        if (res.status === 200 && res.data.code === "success") {
          // console.log(res.data.data.url)
          this.cover = res.data.data.url;
        } else if(res.data.message.includes("Image upload repeated limit")) {
          // in this way that the photo have been uploaded before
          // we just use the img provided
          this.cover = res.data.message.slice(
            "Image upload repeated limit, this image exists at: ".length)
        } else alert("上传图片失败");
      } catch (error) {
        console.log(e);
        alert("上传图片失败");
      } finally {
        this.loading = false;
        fileDom.setAttribute("type", "file");
      }
    },

    getHeight: function() {},
    getAdBoardData: async function(total) {
      for (let i = 0; i < total; i++) {
        try {
          let res = await this.$root.getAdBoardDataId(i);
          console.log("res", res);
          if (res.content.includes(`"cover"`)) {
            // 只能这样判断了，不敢直接 JSON parse
            let data = JSON.parse(res.content);
            this.adList.push(data);
          } else {
            //有文字没图片的场合
            this.adList.push({
              text: res.content,
              cover: "https://i.loli.net/2019/10/02/N4TzivwgLJypRb9.png"
            });
          }
        } catch (error) {
          console.log("getAdBoardDataId", error);
        }
      }
    },
    getTotalNumber: function() {
      this.$root.getTotalNumber().then(res => {
        console.log(`Total is ${res}`);
        this.getAdBoardData(Number(res));
      });
    }
  }
};
</script>

<style>
:root {
  --size: 160px;
  --border-size: 8px;
}
.modal .btn {
  margin: 0 !important;
}
.modal-header {
  color: black;
}
.round-buy {
  border-radius: 100%;
  border: var(--border-size) solid white;
  background: #cd341f;
  color: white;
  width: var(--size);
  height: var(--size);
  margin: 1.1em;
  text-align: center;
  padding-top: 2em;
  max-width: var(--size) !important;
  max-height: var(--size) !important;
  overflow: hidden;
}
.round-buy span {
  font-size: 1.2em;
  font-weight: 600;
}
.round-buy.selected {
  border-color: yellow;
}
.round-image,
.round-buy img,
.overlay {
  height: calc(var(--size) - (var(--border-size) * 2)) !important;
  width: calc(var(--size) - (var(--border-size) * 2)) !important;
  max-height: calc(var(--size) - (var(--border-size) * 2)) !important;
  max-width: calc(var(--size) - (var(--border-size) * 2)) !important;
  position: absolute;
  top: 0;
  left: 0;
}
.overlay {
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding-top: 2.2em;
  font-size: 1.6em;
  font-weight: bold;
  text-align: center;
}
.selected .overlay {
  color: yellow;
}
</style>
