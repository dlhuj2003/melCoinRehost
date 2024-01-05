<template>
  <main>
    <div class="main">
      <Nav />
      <h1>Deposit</h1>
      <h3>
        Select a currency, copy the wallet address and proceed to make payment
      </h3>
      <div class="all">
        <div class="item" v-for="(coin, index) in coins" :key="index">
          <h2>{{ coin.long_name }}</h2>
          <div class="content">
            <img :src="coin.image" :alt="coin.name" />
            <button class="primary" @click="deposit(coin.wallet, coin.name)">
              Deposit
            </button>
          </div>
        </div>
       
        <WalletDetails
          :coinDetails="coinDetails"
          v-if="showDetails"
          @close="showDetails = false"
        />
      </div>
      <Footer />
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import Overview from "@/components/Overview.vue";
import WalletDetails from "@/components/WalletDetails.vue";
import Footer from "@/components/Footer2.vue"
import Nav from "@/components/Nav.vue";

const eth = ref(false);
const btc = ref(false);
const usdt = ref(false);
const bnb = ref(false);
const showDetails = ref(false);
const coinDetails = ref({});

const ethWallet = ref("0x9A779320430C332FD12cD52f1CfC624790EbA6bF");
const btcWallet = ref("bc1qaj66jpzrxjpeluqte8nz4dh2qgr7nmsyx3ysh0");
const usdtWallet = ref("TQ9SqU9JkzgzYCN6n3d5AiScsREkPp468J");
const bnbWallet = ref("bnb1yv0ntvuzmw655yhvadyyzma9v9y33fy86dszpd");
const trxWallet = ref("TQ9SqU9JkzgzYCN6n3d5AiScsREkPp468J");
const xrpWallet = ref("r3z92RfWyWkRY1jxeQSMmH43hNi3USTs1g");
const solWallet = ref("2yJZnCsYaNSkWWKJrzKscnsYdnagcStyYETSDqqSHqhE");
const ltcWallet = ref("LgaA7peMKLVX2kLaRaoCMPFwutkKNKWGs3");
const algoWallet = ref(
  "PWPXMLEFV7GQBNOH3LRTK7MBUX4AKMXULFNGQWNG27BJXD2KV4QOTOMFVY"
);
const usdcWallet = ref("0x9A779320430C332FD12cD52f1CfC624790EbA6bF");
const arbWallet = ref("0x9A779320430C332FD12cD52f1CfC624790EbA6bF");

const coins = ref([
  {
    name: "BTC",
    wallet: "bc1qaj66jpzrxjpeluqte8nz4dh2qgr7nmsyx3ysh0",
    image: "https://nowpayments.io/images/coins/btc.svg",
    long_name: "BITCOIN",
  },
  {
    name: "ETH",
    wallet: "0x9A779320430C332FD12cD52f1CfC624790EbA6bF",
    image: "https://nowpayments.io/images/coins/eth.svg",
    long_name: "ETHERUM",
  },
  {
    name: "USDTTRC20",
    wallet: "TQ9SqU9JkzgzYCN6n3d5AiScsREkPp468J",
    image: "https://nowpayments.io/images/coins/usdt.svg",
    long_name: "TETHER",
  },
  {
    name: "BNBBSC",
    wallet: "bnb1yv0ntvuzmw655yhvadyyzma9v9y33fy86dszpd",
    image: "https://nowpayments.io/images/coins/bnb.svg",
    long_name: "BINANCE COIN",
  },
  {
    name: "TRX",
    wallet: "TQ9SqU9JkzgzYCN6n3d5AiScsREkPp468J",
    image: "https://nowpayments.io/images/coins/trx.svg",
    long_name: "TRON",
  },
  {
    name: "XRP",
    wallet: "r3z92RfWyWkRY1jxeQSMmH43hNi3USTs1g",
    image: "https://nowpayments.io/images/coins/xrp.svg",
    long_name: "XRP",
  },
  {
    name: "SOL",
    wallet: "2yJZnCsYaNSkWWKJrzKscnsYdnagcStyYETSDqqSHqhE",
    image: "https://nowpayments.io/images/coins/sol.svg",
    long_name: "SOLANA",
  },
  {
    name: "LTC",
    wallet: "LgaA7peMKLVX2kLaRaoCMPFwutkKNKWGs3",
    image: "https://nowpayments.io/images/coins/ltc.svg",
    long_name: "LITECOIN",
  },
  {
    name: "ALGO",
    wallet: "PWPXMLEFV7GQBNOH3LRTK7MBUX4AKMXULFNGQWNG27BJXD2KV4QOTOMFVY",
    image: "https://nowpayments.io/images/coins/algo.svg",
    long_name: "ALGORAND",
  },
  {
    name: "USDC",
    wallet: "0x9A779320430C332FD12cD52f1CfC624790EbA6bF",
    image: "https://nowpayments.io/images/coins/usdc.svg",
    long_name: "USD COIN",
  },
  {
    name: "ARB",
    wallet: "0x9A779320430C332FD12cD52f1CfC624790EbA6bF",
    image: "https://nowpayments.io/images/coins/arb.svg",
    long_name: "ARBITRUM",
  },
]);

const deposit = (address, coin, qrcode = "@/assets/home/qrcode.png") => {
  coinDetails.value = { address, coin, qrcode };
  console.log(coinDetails.value);
  showDetails.value = true;
};
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
    padding: 10px 30px ;
  }

  div.all {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    max-width: 1000px;
    margin: auto;
    padding: 10px 30px 50px;

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

      div.address {
        position: fixed;
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #000a;
        top: 0;
        left: 0;

        div {
          text-align: center;
          border-radius: 10px;
          max-width: 300px;
          height: fit-content;
          padding: 20px;
          background-color: #ffffff;

          div.top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0;

            i {
              background-color: #000a;
              border-radius: 50%;
              font-size: 18px;
              color: #ffffff;
              padding: 2px 7px 0px;
              line-height: 1.7;
            }
          }
        }

        img {
          width: 250px;
        }

        p {
          font-size: 12px;
          color: #222;
          letter-spacing: -1px;

          &::selection {
            background-color: #ff8000;
          }
        }

        i.bi-files {
          font-size: 24px;
        }
      }

      @media (max-width: 430px) {
        width: 100%;
        max-width: unset;
      }

      h2 {
        font-size: 16px;
        padding: 10px;
        color: #fff;
        background-color: #FF8000;
        text-transform: capitalize;
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
