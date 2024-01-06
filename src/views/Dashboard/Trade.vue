<template>
  <main>
    <Nav />
    <div class="main">
      <div class="top">
        <h1>Trade</h1>
        <h3>
          We have an optimal range of trading plans for you to choose from
        </h3>
        <div class="plans">
          <div class="item">
            <h2>Basic plan</h2>
            <p class="cost">$150 - $100,000</p>
            <p class="percentage">1% Profit</p>
            <p class="duration">24/7 Customer care</p>
            <p class="duration">4% Referral Bonus</p>
            <button @click="modal = true">Invest</button>
          </div>
          <div class="item">
            <h2>Standard plan</h2>
            <p class="cost">$120,000 - $450,000</p>
            <p class="percentage">1.5% Profit</p>
            <p class="duration">24/7 Customer care</p>
            <p class="duration">4% Referral Bonus</p>
            <button @click="modal = true">Invest</button>
          </div>
          <div class="item">
            <h2>Premium plan</h2>
            <p class="cost">$500,000 - Unlimited</p>
            <p class="percentage">2% Profit</p>
            <p class="duration">24/7 Customer care</p>
            <p class="duration">4% Referral Bonus</p>
            <button @click="modal = true">Invest</button>
          </div>
        </div>
      </div>
      <div class="trademodal" v-if="modal">
        <CreateTrade @closemodal="() => (modal = false)" />
      </div>
      <div v-else></div>
      <Footer />
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import Loader from "../../components/Loader.vue";
import Footer from "@/components/Footer2.vue";
import Nav from "@/components/Nav.vue";
import CreateTrade from "@/components/CreateTrade.vue";

const modal = ref(false);
</script>

<style scoped lang="scss">
main {
  // background-color: #eee;
  z-index: 2;
  div.trademodal {
    position: fixed;
    width: calc(100% - 180px);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    top: 0;
    background-color: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(2px);
    z-index: 5;
    @media (max-width: 710px) {
      width: 100%;
    }
  }

  div.main {
    position: relative;
    height: calc(100dvh - 60px);
    overflow-y: scroll;
    z-index: 3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  a:hover {
    color: #ff8000;
  }

  h1 {
    color: #333;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 30px;
    padding: 30px 30px 0px;
  }

  h3 {
    color: #ffffff;
    background-color: #ff8000;
    padding: 20px 30px;
    margin: 0px 0px 30px;
    text-transform: uppercase;
    font-size: 14px;
  }

  div.plans {
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    width: 100%;
    padding: 0px 30px 50px;
    justify-content: center;

    div.item {
      background-color: #fff;
      min-width: 200px;
      width: 50%;
      max-width: 250px;
      text-align: center;
      box-shadow: 0px 1px 20px #0003;
      border-radius: 10px;
      padding: 0px 0px 20px;

      @media (max-width: 610px) {
        width: 100%;
        max-width: 400px;
      }

      h2 {
        padding: 20px 10px;
        font-size: 16px;
        background-color: #ff8000;
        color: #fff;
        border-radius: 10px 10px 0px 0px;
        margin-bottom: 20px;
      }

      p {
        font-size: 15px;
        color: #333;
        line-height: 2.2;
      }

      button {
        height: 40px;
        padding: 0px 30px;
        background-color: #ff8000;
        border: none;
        color: #fff;
        margin: 10px 0px;
      }
    }
  }
}
</style>
