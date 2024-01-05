<template>
  <main>
    <div class="main">
      <Nav />
      <h1>Withdrawal</h1>
      <h3>
        Select a currency and input your wallet address to make a withdrawal
      </h3>
      <div class="all">
        <div class="item" v-for="(coin, index) in coins" :key="index">
          <h2>{{ coin.long_name }}</h2>
          <div class="content">
            <img :src="coin.image" alt="" />
            <button class="primary" @click="openModal(coin.name)">
              Withdraw
            </button>
          </div>
        </div>
      </div>
    <Footer />
    </div>
    <WithdrawModal
      v-if="Withdraw"
      :coin="coin"
      @close="Withdraw = false"
      :close="() => (Withdraw = false)"
    />
  </main>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import Overview from "@/components/Overview.vue";
import WithdrawModal from "@/components/WithdrawModal.vue";
import Footer from "@/components/Footer2.vue";
import Nav from "@/components/Nav.vue";

const Withdraw = ref(false);
const coin = ref("");

const openModal = (crypto) => {
  Withdraw.value = true;
  coin.value = crypto;
};

const coins = ref([
  {
    name: "BTC",
    image: "https://nowpayments.io/images/coins/btc.svg",
    long_name: "BITCOIN",
  },
  {
    name: "ETH",
    image: "https://nowpayments.io/images/coins/eth.svg",
    long_name: "ETHERUM",
  },
  {
    name: "USDTTRC20",
    image: "https://nowpayments.io/images/coins/usdt.svg",
    long_name: "TETHER",
  },
  {
    name: "BNBBSC",
    image: "https://nowpayments.io/images/coins/bnb.svg",
    long_name: "BINANCE COIN",
  },
  {
    name: "TRX",
    image: "https://nowpayments.io/images/coins/trx.svg",
    long_name: "TRON",
  },
  {
    name: "XRP",
    image: "https://nowpayments.io/images/coins/xrp.svg",
    long_name: "XRP",
  },
  {
    name: "SOL",
    image: "https://nowpayments.io/images/coins/sol.svg",
    long_name: "SOLANA",
  },
  {
    name: "LTC",
    image: "https://nowpayments.io/images/coins/ltc.svg",
    long_name: "LITECOIN",
  },
  {
    name: "ALGO",
    image: "https://nowpayments.io/images/coins/algo.svg",
    long_name: "ALGORAND",
  },
  {
    name: "USDC",
    image: "https://nowpayments.io/images/coins/usdc.svg",
    long_name: "USD COIN",
  },
  {
    name: "ARB",
    image: "https://nowpayments.io/images/coins/arb.svg",
    long_name: "ARBITRUM",
  },
]);
</script>

<style scoped lang="scss">
main {
  background-color: #eee;
  z-index: 2;

  div.main {
    position: relative;
    height: 100dvh;
    overflow-y: scroll;
    z-index: 3;
  }

  h1 {
    color: #333;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 30px;
    padding: 30px 30px 0px;
  }

  h3 {
    color: #fff;
    margin: 0px 0px 30px;
    font-size: 16px;
    background-color: #ff8000;
    padding: 20px 30px;
  }

  div.all {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    max-width: 1000px;
    margin: auto;
    padding: 0px 30px 50px;

    @media (max-width: 900px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 430px) {
      grid-template-columns: 1fr;
    }

    div.item {
      background-color: #ffffff;
      height: 250px;
      max-width: 250px;
      color: #ff8000;
      border: 1px solid #FF8000;

      @media (max-width: 430px) {
        width: 100%;
        max-width: unset;
      }

      h2 {
        font-size: 16px;
        background-color: #ff8000;
        color: #FFF;
        padding: 10px;
      }

      div.content {
        display: flex;
        align-items: center;
        flex-direction: column;
        height: 100%;
        gap: 20px;
        padding: 20px;

        img {
          width: 100px;
        }

        button.primary {
          height: 40px;
          padding: 0px 20px;
          width: 100%;
          border: none;
          border-radius: 5px;
          background-color: #ff8000;
          color: #ffffff;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
