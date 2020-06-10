<template>
  <div
    class="board"
    @mouseenter="animate"
    @mouseleave="animate"
  >
    <img
      :src="get(ad, 'content')"
      :alt="'ad0'"
    >
    <div
      v-if="animState"
      class="animated bounceInDown info-container"
    >
      <div class="info">
        <div class="left">
          <div class="label">
            price:
          </div>
          <span class="num">{{ get(ad, 'price') }}</span>
          <div
            v-if="ad.id === 'ad0'"
            class="label"
          >
            owner:
          </div>
          <div v-if="ad.id === 'ad0'">
            5Grwv......GKutQY
          </div>
          <!-- <div class="label">taxes ratio: </div>
          <span class="num">{{ get(ad, 'ratio') }}</span> / day-->
        </div>
        <div class="right">
          <div
            v-if="ad.owner"
            class="btn"
            @click="onClick"
          >
            Update My Billboard
          </div>
          <div
            v-else
            class="btn"
            @click="onClick"
          >
            Buy It !
          </div>
        </div>
      </div>
    </div>

    <b-modal
      id="buy"
      :title="dialogTitle"
      class="modal"
    >
      <b-form
        ref="form"
        label-position="top"
        @submit="bid"
      >
        <div class="row-label">
          Price
        </div>
        <div class="row-data">
          <span>{{ get(ad, 'price') }}</span>
        </div>
        <div class="row-label">
          Taxes Ratio
        </div>
        <div class="row-data">
          <span>{{ get(ad, 'ratio') }}</span> / day
        </div>
        <b-form-group label="Pre payed tax">
          <b-form-input
            v-model="form.prePay"
            placeholder="Pre payed tax"
            type="number"
            clearable
          />
        </b-form-group>
        <b-form-group label="Content image url">
          <b-form-input
            v-model="form.content"
            placeholder="Content image url"
            clearable
          />
        </b-form-group>
      </b-form>
      <div
        slot="modal-footer"
        class="buy-button dialog-footer"
      >
        <b-button
          round
          @click="showDialogBuy = false"
        >
          Cancel
        </b-button>
        <b-button
          round
          class="btn-ok"
          @click.stop="bid"
        >
          Ok
        </b-button>
      </div>
    </b-modal>

    <b-modal
      id="update"
      :title="dialogTitle"
      class="modal"
    >
      <b-form
        ref="form"
        label-position="top"
        @submit="setBoard"
      >
        <div class="row-label">
          Taxes Ratio
        </div>
        <div class="row-data">
          <span>{{ get(ad, 'ratio') }}</span> / day
        </div>
        <b-form-group label="Price">
          <b-form-input
            v-model="form.price"
            placeholder="Price"
            type="number"
            clearable
          />
        </b-form-group>
        <b-form-group label="Pre payed tax">
          <b-form-input
            v-model="form.prePay"
            placeholder="Pre payed tax"
            type="number"
            clearable
          />
        </b-form-group>
        <b-form-group label="Content image url">
          <b-form-input
            v-model="form.content"
            default-value="hhhhhh"
            placeholder="Content image url"
            clearable
          />
        </b-form-group>
      </b-form>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <b-button
          round
          @click="showDialogPut = false"
        >Cancel</b-button>
        <b-button
          round
          class="btn-ok"
          @click="setBoard"
        >Ok</b-button>
      </span>
    </b-modal>
  </div>
</template>

<script>
import { get } from "lodash";

export default {
  props: {
    ad: Object,
    sub: String,
    loading: false
  },
  data: () => {
    return {
      animState: false,
      showDialogBuy: false,
      showDialogPut: false,
      form: {}
    };
  },
  computed: {
    dialogTitle: function() {
      return this.showDialogBuy ? "Buy the Billboard" : "Update My Billboard";
    }
  },
  methods: {
    get,
    animate: function() {
      this.animState = !this.animState;
    },
    onClick: function() {
      web3.eth.getAccounts().then((accounts) => {
        const newPrice = web3.utils.toWei('1', 'ether');
        // this.isLoad = true;
      });
      //window.location.href('https://capitalbox.one/index.html#/ad/0');
    },
    onClose: function() {
      this.form = {};
    },
    bid: function() {
      console.log("bid");
      alert("bid");
      /*
      web3.eth.getAccounts().then((accounts) => {
        const newPrice = web3.utils.toWei(this.form.prePay, 'ether');
        // this.isLoad = true;
        return billboard.methods.buy(newPrice)
          .send({
            from: accounts[0],
            value: newPrice,
          });
      }).then(() => {
        // initialize forms
        // this.isLoad = false;
        // this.title = '';
        // this.newPrice = '0.1';
        // this.description = '';
        // get the previous auction
//        return auctionBox.methods.returnAllAuctions().call();
        })
        .catch((err) => {
          console.log(err);
        });
        */
      /*
      console.log("bid");
      const ALICE = "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY";
      // const loading = this.$loading({
      //   lock: true,
      //   text: "Loading",
      //   spinner: "el-icon-loading",
      //   background: "rgba(0, 0, 0, 0.7)"
      // });
      setTimeout(() => {
        this.$store.dispatch("basic/buy", {
          content: this.form.content,
          prePay: this.form.prePay,
          owner: ALICE
        });
        this.showDialogBuy = false;
        // loading.close();
        this.$notify({
          title: "Success",
          message: "Buy billboard success",
          type: "success"
        });
      }, 1000);*/
    },
    setBoard: function() {
      alert("setBoard");
      web3.eth.getAccounts().then((accounts) => {
        const newPrice = web3.utils.toWei(this.form.prePay, 'ether');
        // this.isLoad = true;
        return billboard.methods.buy(newPrice)
          .send({
            from: accounts[0],
            value: newPrice,
          });
      }).then(() => {
        // initialize forms
        // this.isLoad = false;
        // this.title = '';
        // this.newPrice = '0.1';
        // this.description = '';
        // get the previous auction
//        return auctionBox.methods.returnAllAuctions().call();
        })
        .catch((err) => {
          console.log(err);
        });

      // console.log("setBoard");
      const ALICE = "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY";
      const loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      setTimeout(() => {
        this.$store.dispatch("basic/put", {
          price: this.form.price,
          content: this.form.content,
          prePay: this.form.prePay
        });
        this.showDialogPut = false;
        loading.close();
        this.$notify({
          title: "Success",
          message: "Update billboard success",
          type: "success"
        });
      }, 1000);
    }
  }
};
</script>

<style lang="css">
.board .modal {
  color: rgba(0, 0, 0, 0.8);
}

</style>


<style scoped>
.buy-button {
  width: 100%;
  display: flex;
  justify-content: center;
}
.buy-button button {
  margin-left: 20px;
  margin-right: 20px;
}
</style>
