<script setup>
import { ref } from 'vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Shield from '@/components/Shield.vue';
import Faq from '@/components/Faq.vue';
import Why from '@/components/Why.vue';
import { Chart } from "vue-tradingview-widgets";
</script>

<template>
  <main>
    <Header />
    <section class="one">
      <div class="container">
        <div class="w50">
          <h2>PROMO</h2>
          <p>$1,500,000 for grab</p>
          <p>Be among the 15 new investors that will stand a chance to win $100,000 each this festive season with 3 simple steps.</p>
          <ul>
            <li>Create an account</li>
            <li>Make an initial minimum deposit of $500</li>
            <li>Refer up to 3 new investors with your referral link</li>
          </ul>
          <div class="float">
            <input type="email" name="" id="" placeholder="Email address">
            <a href="/signup">Get started</a>
          </div>
        </div>
        <div class="w50">
          <img src="@/assets/bitcoin3.png" alt="">
        </div>
      </div>
    </section>
    <div class="chart home">
      <h3>Get <span>Up-To-Date</span> market values</h3>
      <Chart :options="{
        symbol: 'BINANCE:BTCUSDT',
        width: '100%',
        height: '400px',
        autosize: true,
      }" />
    </div>
    <section class="explore">
      <img src="@/assets/crypto2.jpg" alt="">
      <div>
        <h1>Explore our investment plans</h1>
        <p>With different investment plans, our system is modelled to accomodate everyone no matter how much you have to invest.</p>
        <a href="/explore">Explore <i class="bi bi-arrow-right"></i></a>
      </div>
    </section>
    <section>
      <div class="w50">
        <h1>Retire early with our Mellcoin IRA better plan</h1>
        <p>Discover how specific IRA better plan works for investors using an employer's retirement plan.</p>
        <a href="/learn">Learn more</a>
      </div>
      <div class="w50">
        <ul>
          <li><i class="bi bi-check-circle-fill"></i> Enroll in your IRA retirement plan</li>
          <li><i class="bi bi-check-circle-fill"></i> Child support & College plan</li>
          <li><i class="bi bi-check-circle-fill"></i> Non profit organization plan</li>
          <li><i class="bi bi-check-circle-fill"></i> Professional financial advisors</li>
        </ul>
      </div>
    </section>
    <section class="portfolio">
      <h1>Create your retirement portfolio today</h1>
      <p>Mellcoin has a variety of features that make it the best place for your investment journey</p>
      <div class="container">
        <div class="w50">
          <div class="item">
            <div class="icon">
              icon
            </div>
            <div class="txt">
              <h2>Manage your portfolio</h2>
              <p>Invest in cryptocurrency slowly over time by scheduling buys daily, weekly, or monthly</p>
            </div>
          </div>
          <div class="item">
            <div class="icon">
              icon
            </div>
            <div class="txt">
              <h2>Manage your portfolio</h2>
              <p>Invest in cryptocurrency slowly over time by scheduling buys daily, weekly, or monthly</p>
            </div>
          </div>
          <div class="item">
            <div class="icon">
              icon
            </div>
            <div class="txt">
              <h2>Manage your portfolio</h2>
              <p>Invest in cryptocurrency slowly over time by scheduling buys daily, weekly, or monthly</p>
            </div>
          </div>
          <div class="item">
            <div class="icon">
              icon
            </div>
            <div class="txt">
              <h2>Manage your portfolio</h2>
              <p>Invest in cryptocurrency slowly over time by scheduling buys daily, weekly, or monthly</p>
            </div>
          </div>
        </div>
        <div class="w50 right">
          <h1>WE ARE ON A GLOBAL SCALE</h1>
          <p>
            This company is standard cryptocurrency mining company where investors can earn Bitcoin through the legal and assured means of profiting the Blockchain Technology. Over years, we have been chosen by many all around the globe and have been recommended by many regulatory bodies for our quality mining pool and we are on the mission to provide the right full and legal means of earning cryptocurrency through mining. Get rewarded, join the mining network, join Mellcoin today!
          </p>
        </div>
      </div>
    </section>
    <section class="count">
      <div class="contain">
        <div class="item">
          <h1>$8B</h1>
          <p>Quarterly volume traded</p>
        </div>
        <div class="item">
          <h1>100+</h1>
          <p>Countries Supported</p>
        </div>
        <div class="item">
          <h1>$5B</h1>
          <p>Assets on Platform</p>
        </div>
      </div>
    </section>
    <Why />
    <Shield />
    <Faq />
    <Footer />
  </main>
</template>

<style scoped lang="scss">
main{
  background-color: #eaf6fc;
}
section.one {
  height: fit-content;
  padding: 0px 50px;

  @media(max-width: 991px) {
    padding: 0px 30px;
  }

  div.container {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 1366px;
    margin: auto;
    align-items: center;
    padding: 80px 0px;

    @media(max-width: 991px) {
      display: flex;
      flex-direction: column-reverse;
      padding: 30px 0px 50px;
    }

    div.w50 {
      position: relative;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      h2{
        background-color: #ff4500;
      }

      @media(max-width: 991px) {
        text-align: center;
      }

      img {
        width: 100%;
        max-width: 600px;
        margin: auto;

        @media(max-width: 600px) {
          min-width: unset !important;
        }
      }
    }

    h2 {
      color: #111;
      font-size: 32px;
      max-width: 550px;
      z-index: 2;
      position: relative;

      @media(max-width: 991px) {
        font-size: 24px;
        margin: auto;
      }

      span {
        color: #FF8000;
        font-size: 36px;
        text-transform: uppercase;

        @media(max-width: 600px) {
          font-size: 28px;
        }
      }
    }

    p {
      color: #333;
      font-size: 24px;
      max-width: 550px;

      @media(max-width: 991px) {
        font-size: 20px;
        margin: auto;
      }
    }

    button {
      height: 44px;
      border: none;
      background: linear-gradient(120deg, #FF8000 0%, #ac5804 100%);
      color: #fff;
      padding: 0px 30px;
      border-radius: 22px;
      margin-top: 30px;
    }
  }
}

div.chart {
  height: fit-content;
  padding: 30px;
  max-width: 1441px;
  margin: 20px auto;

  h3 {
    margin: 10px 0px 20px;
    font-size: 32px;
    color: #333;

    span {
      color: #FF8000;
    }

    @media(max-width: 600px) {
      font-size: 24px;
    }
  }

  div {
    min-height: 400px;

    div {
      height: 500px !important;
    }
  }
}

section.two div.container {
  position: relative;
  z-index: 888;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  max-width: 800px;
  margin: auto;
  padding: 80px 50px;

  @media(max-width: 991px) {
    padding: 0px 30px;
    text-align: left;

    h1 {
      font-size: 42px !important;
      line-height: 1.2;
    }
  }

  @media(max-width: 600px) {
    h1 {
      font-size: 30px !important;
    }
  }

  h1 {
    font-size: 48px;
    color: #333;
  }

  p {
    color: #333;
    font-size: 16px;
    line-height: 1.5;
  }

  button {
    height: 44px;
    color: #fff;
    background: linear-gradient(120deg, #FF8000 0%, #ac5804 100%);
    border: none;
    border-radius: 28px;
    width: fit-content;
    padding: 0px 30px;
    margin: 0px auto 30px;

    @media(max-width: 991px) {
      margin: 0px 0px 50px;
    }
  }
}

section.count {
  background: #000;
  color: #fff;
  padding: 80px 20px 100px;

  div.contain {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
    margin: auto;
    max-width: 1280px;

    @media(max-width: 600px) {
      grid-template-columns: 1fr;
      gap: 50px;
    }

    div.item {
      text-align: center;

      h1 {
        color: #ffa600;
        font-size: 32px;
        letter-spacing: 2px;
        line-height: 1.8;
      }

      p {
        font-size: 14px;
      }
    }

  }
}</style>