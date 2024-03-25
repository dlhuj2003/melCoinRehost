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
          <h2>{{ coin.name }}</h2>
          <div class="content">
            <img :src="coin.iconUrl" :alt="coin.name" />
            <button class="primary" @click="deposit(coin.address, coin.name)">
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
    <Loader v-if="loading" />
  </main>
</template>

<script setup>
import { ref } from "vue";
import WalletDetails from "@/components/WalletDetails.vue";
import Footer from "@/components/Footer2.vue";
import Nav from "@/components/Nav.vue";
import { melAPI, getToken } from "@/axios/api";
import Loader from "@/components/Loader.vue";
const showDetails = ref(false);
const loading = ref(true);
const coinDetails = ref({});

const coins = ref([]);

const getCoins = async () => {
  try {
    const { data } = await melAPI.get("/get_all_asset", {
      headers: {
        Authorization: getToken("user"),
      },
    });
    coins.value = data;
  } catch (e) {
    console.log(e);
  } finally {
    loading.value = false;
  }
};

getCoins();

const deposit = (address, coin, qrcode = "@/assets/home/qrcode.png") => {
  coinDetails.value = { address, coin, qrcode };
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
    background-color: #c76300;
    padding: 10px 30px;
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
      color: #c76300;
      border: 1px solid #c76300;

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
            background-color: #c76300;
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
        background-color: #c76300;
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
          background-color: #c76300;
          color: #ffffff;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
