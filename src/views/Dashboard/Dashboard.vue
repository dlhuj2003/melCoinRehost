<template>
  <main>
    <div class="main">
      <Nav />
    <router-link to="/kyc">
      <p class="kyc"><i class="bi bi-exclamation-triangle-fill"></i> Please verify your identity by completing the KYC <i class="bi bi-arrow-right"></i></p>
    </router-link>
      <h1>
        Hello! {{ store.userDetails.username }}
        <i class="bi bi-sun" v-if="checkTime"> Good Day</i>
        <i class="bi bi-cloud-moon" v-else> Good Evening</i>
      </h1>
      <Marquee />
      
      <div class="all">
        <div class="item">
          <h2>Total Balance <i class="bi bi-piggy-bank"></i></h2>
          <div class="content">
            <p class="amount">${{ store.userDetails.balance }}</p>
          </div>
        </div>
        <div class="item">
          <h2>Earnings <i class="bi bi-cash"></i></h2>
          <div class="content">
            <p class="amount">${{ store.userDetails.total_earnings }}</p>
          </div>
        </div>
        <div class="item">
          <h2>Referral Bonus <i class="bi bi-coin"></i></h2>
          <div class="content">
            <p class="amount">$ {{ store.userDetails.referrals * 15 }}</p>
          </div>
        </div>
        <div class="item">
          <h2>Promo Bonus <i class="bi bi-coin"></i></h2>
          <div class="content">
            <p class="amount">$ {{ store.userDetails.promo }}</p>
          </div>
        </div>
        <div class="item">
          <h2>Referral Code <i class="bi bi-link"></i></h2>
          <div class="content">
            <p class="amount" id="referal">
              {{ store.userDetails.referralCode }}
            </p>
            <i
              class="bi bi-clipboard"
              style="color: #c76300"
              @click="copy(store.userDetails.referralCode)"
              v-if="!copied"
            ></i>
            <i class="bi bi-check2" style="color: #c76300" v-else></i>
          </div>
        </div>
      </div>
      <div class="chart">
        <Chart
          :options="{
            symbol: 'BINANCE:BTCUSDT',
            width: '100%',
            height: '80%',
            autosize: true,
          }"
        />
      </div>
      <Footer />
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from "vue";
import { Chart } from "vue-tradingview-widgets";
import Marquee from "@/components/Marquee.vue";
import Footer from "@/components/Footer2.vue";
import Nav from "@/components/Nav.vue";
import { useMelStore } from "../../stores/counter";
const store = useMelStore();
const copied = ref(false);

// store.getUserDetails();
async function copy(text) {
  try {
    await navigator.clipboard.writeText(text);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 3000);
  } catch (e) {
    console.log(e);
  }
}

const checkTime = computed(() => {
  const time = new Date().getHours();
  if (time < 17 && time > 5) {
    return true;
  } else {
    return false;
  }
});
</script>

<style scoped lang="scss">
main {
  background-color: #eee;
  z-index: 2;
  p.kyc{
    padding: 20px;
    margin: 10px 30px;
    border: 1px dashed #c76300;
    width: fit-content;
    font-size: 14px;
    border-radius: 3px;
    background-color: #ffe5cc;
    color: #555;
    display: flex;
    align-items: center;
    gap: 8px;
    i{
      color: #b6722e;
      font-size: 18px;
    }
    @media(max-width: 600px){
      font-size: 12px;
      margin: 10px 20px;
      padding: 10px;
      i{
        font-size: 14px;
      }
    }
  }

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
    margin-bottom: 20px;
    padding: 10px 30px 0px;
  }

  div.chart {
    margin: 20px 20px 0px;
    height: 600px !important;

    @media (max-width: 600px) {
      height: 400px !important;
    }
  }

  div.all {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 30px;
    margin: 30px auto;
    padding: 30px;

    @media (max-width: 1150px) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: 930px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 550px) {
      grid-template-columns: 1fr;
    }

    div.item {
      background-color: #c76300;
      max-height: 120px;
      min-width: 200px;
      max-width: 450px;
      padding: 0;
      color: #ffffff;

      h2 {
        font-size: 16px;
        color: #ffffff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px;

        i {
          font-size: 20px;
        }
      }

      div.content {
        border: 2px solid #c76300;
        background-color: #fff;
        display: flex;
        align-items: center;
        height: 60px;
        padding: 15px;
        gap: 8px;

        i {
          margin: 0;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
        }

        p.amount {
          color: #000;
        }
      }
    }
  }
}
</style>
