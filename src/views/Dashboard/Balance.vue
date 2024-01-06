<template>
  <main>
    <div class="main">
      <div>
        <Nav />
        <div class="top">
          <h1>Balance</h1>
          <div class="all">
            <div class="item">
              <h2>Total balance <i class="bi bi-graph-up-arrow"></i></h2>
              <div class="content">
                <p class="amount">${{ balances.main_balance }}</p>
              </div>
            </div>
            <div class="item">
              <h2>Investment <i class="bi bi-coin"></i></h2>
              <div class="content">
                <p class="amount">${{ balances.investment_balance }}</p>
              </div>
            </div>
            <div class="item">
              <h2>Earnings <i class="bi bi-coin"></i></h2>
              <div class="content">
                <p class="amount">${{ balances.referrals * 15 }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    <Loader v-if="loading" />
  </main>
</template>

<script setup>
import { ref } from "vue";
import Loader from "../../components/Loader.vue";
import Footer from "@/components/Footer2.vue";
import Nav from "@/components/Nav.vue";
import { melAPI, getToken } from "@/axios/api";
import { useMelStore } from "@/stores/counter";
const store = useMelStore();
const loading = ref(true);
const balances = ref({
  btc: 0,
  earnings: 0,
  eth: 0,
  investment_balance: 0,
  main_balance: 0,
  referrals: 0,
  usdt: 0,
});

const getBalances = async () => {
  try {
    const { data } = await melAPI.get("/trade-balances", {
      headers: {
        Authorization: getToken("user"),
      },
    });
    balances.value = data;
    loading.value = false;
    // console.log(data);
  } catch (e) {
    console.log(e);
  }
};

getBalances();
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  div.top {
    padding: 0px 30px 30px;
  }

  h2 {
    color: #ffffff;
  }

  h1 {
    color: #333;
    font-size: 24px;
    font-weight: 600;
    margin: 30px 0px;
  }

  div.all {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    max-width: 1000px;
    margin: auto;

    @media (max-width: 710px) {
      grid-template-columns: 1fr;
    }

    div.item {
      background-color: #fff;
      height: 120px;
      max-width: 450px;
      border-radius: 10px;
      color: #ffffff;
      box-shadow: 0px 1px 20px #0003;

      h2 {
        font-size: 16px;
        font-weight: 600;
        letter-spacing: 0.8px;
        background-color: #ff8000;
        border-radius: 10px 10px 0px 0px;
        padding: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        i {
          font-size: 20px;
        }
      }

      div.content {
        border-top: 2px solid #ffffff;
        display: flex;
        align-items: center;
        height: 70%;
        padding: 0px 20px 30px;

        p.amount {
          font-size: 20px;
          font-weight: 600;
          margin: 0;
          color: #333;
        }
      }
    }
  }
}
</style>
