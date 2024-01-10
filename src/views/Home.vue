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
          <br>
          <p>Be among the 15 new investors that will stand a chance to win $100,000 each this festive season with 3 simple
            steps.</p>
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
    <div class="pad">
      <section class="explore">
        <img src="@/assets/crypto2.jpg" alt="">
        <div>
          <h1>Explore our investment plans</h1>
          <p>With different investment plans, our system is modelled to accomodate everyone no matter how much you have to
            invest.</p>
          <a href="/explore">Explore <i class="bi bi-arrow-right"></i></a>
        </div>
      </section>
    </div>
    <section class="ira">
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
    <div class="chart home">
      <h3>Get <span>Up-To-Date</span> market values</h3>
      <Chart :options="{
        symbol: 'BINANCE:BTCUSDT',
        width: '100%',
        height: '400px',
        autosize: true,
      }" />
    </div>
    <div class="bgpad">
      <section class="portfolio">
        <h1>Create your retirement portfolio today</h1>
        <p>Mellcoin has a variety of features that make it the best place for your investment journey</p>
        <div class="container">
          <div class="w50">
            <div class="item">
              <div class="icon">
                <i class="bi bi-briefcase-fill"></i>
              </div>
              <div class="txt">
                <h2>Manage your portfolio</h2>
                <p>Invest in cryptocurrency slowly over time by scheduling buys daily, weekly, or monthly</p>
              </div>
            </div>
            <div class="item">
              <div class="icon">
                <i class="bi bi-piggy-bank-fill"></i>
              </div>
              <div class="txt">
                <h2>Manage your portfolio</h2>
                <p>Invest in cryptocurrency slowly over time by scheduling buys daily, weekly, or monthly</p>
              </div>
            </div>
            <div class="item">
              <div class="icon">
                <i class="bi bi-graph-up-arrow"></i>
              </div>
              <div class="txt">
                <h2>Manage your portfolio</h2>
                <p>Invest in cryptocurrency slowly over time by scheduling buys daily, weekly, or monthly</p>
              </div>
            </div>
            <div class="item">
              <div class="icon">
                <i class="bi bi-phone"></i>
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
              This company is standard cryptocurrency mining company where investors can earn Bitcoin through the legal
              and
              assured means of profiting the Blockchain Technology. Over years, we have been chosen by many all around the
              globe and have been recommended by many regulatory bodies for our quality mining pool and we are on the
              mission to provide the right full and legal means of earning cryptocurrency through mining. Get rewarded,
              join
              the mining network, join Mellcoin today!
            </p>
          </div>
        </div>
      </section>
    </div>
    <div class="trust">

      <section class="start">
        <h1>The most trusted cryptocurrency platform</h1>
        <p>Here are few reasons why you should choose Mellcoin</p>
        <div class="grid">
          <div class="item">
            <i class="bi bi-person-fill"></i>
            <p class="big">Secure Storage</p>
            <p>We store vast majority of the digital
              assets in secure offline storage.</p>
            <p class="red">Learn how Mellcoin keeps your funds save
              and secure </p>
          </div>
          <div class="item">
            <i class="bi bi-bank2"></i>
            <p class="big">Protected assets</p>
            <p>Our risk management measures are
              designed to protect your assets</p>
            <p class="red">Learn about how your assets are protected </p>
          </div>
          <div class="item">
            <i class="bi bi-cash-coin"></i>
            <p class="big">Indutry best practices</p>
            <p>Mellcoin supports a variety of the most
              popular digital currencies.</p>
            <p class="red">Learn how we implement industry best practices
              for account security</p>
          </div>
        </div>
      </section>
    </div>
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
    <section class="start">
      <h1>Get started in a few minutes</h1>
      <p>Mellcoin supports a variety of the most popular digital curriencies</p>
      <div class="grid">
        <div class="item">
          <i class="bi bi-person-fill"></i>
          <p>Sign up</p>
        </div>
        <div class="item">
          <i class="bi bi-bank2"></i>
          <p>Invest</p>
        </div>
        <div class="item">
          <i class="bi bi-cash-coin"></i>
          <p>Watch your profit grow</p>
        </div>
      </div>
    </section>
    <!-- <Why />
    <Shield /> -->
    <!-- <Faq /> -->
    <Footer />
  </main>
</template>

<style scoped lang="scss">
main {
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
      text-align: center;

      h2 {
        background-color: #ff4500;
        width: fit-content;
        padding: 15px 100px;
        font-size: 40px;
        color: #f7f4f4;
        border-radius: 50%;
        text-align: center;
        margin: 0px auto 10px;

        @media(max-width: 600px) {
          padding: 15px 60px;
        }
      }

      p {
        font-weight: 600;
        margin: 0px auto;
      }

      ul {
        text-align: left;
        margin: 20px 0px;

        li {
          margin: 10px 0px;
        }
      }

      div.float {
        display: flex;
        gap: 5px;
        width: 100%;

        input {
          height: 44px;
          border: 1px solid #999;
          padding: 0px 20px;
          width: 80%;
          max-width: 200px;
        }

        a {
          height: 44px;
          padding: 0px 20px;
          display: flex;
          align-items: center;
          background-color: #ff4500;
          color: #fff;
          font-size: 14px;

          @media(max-width: 600px) {
            padding: 0px 10px;
          }
        }
      }

      @media(max-width: 991px) {
        text-align: center;
      }

      img {
        width: 100%;
        max-width: 300px;
        margin: auto;

        @media(max-width: 600px) {
          min-width: unset !important;
          margin-bottom: 20px;
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

div.pad {
  padding: 30px;

  @media(max-width: 600px) {
    padding: 20px;
  }
}

section.explore {
  display: flex;
  gap: 20px;
  background-color: #000;
  color: #fff;
  max-width: 1300px;
  margin: auto;
  border-radius: 10px;
  padding: 40px;

  @media(max-width: 600px) {
    flex-direction: column;
    padding: 20px;
  }

  img {
    width: 50%;
    max-width: 200px;
    border-radius: 10px;
    height: auto;

    @media(max-width: 991px) {
      width: fit-content;
      height: fit-content;
      min-width: 100px;
    }

    @media(max-width: 600px) {
      width: 100%;
      min-width: none;
      text-align: center;
      margin: auto;
    }
  }

  div {
    h1 {
      font-size: 46px;
      margin: 0px 0px 20px;
      font-weight: 500;

      @media(max-width: 991px) {
        font-size: 36px;
      }

      @media(max-width: 777px) {
        font-size: 28px;
        margin: 0px 0px 10px;
      }
    }

    p {
      font-size: 28px;
      margin-bottom: 20px;

      @media(max-width: 991px) {
        font-size: 24px;
      }

      @media(max-width: 777px) {
        font-size: 20px;
      }
    }

    a {
      background-color: #ff4500;
      padding: 10px 20px;
      border-radius: 5px;
      display: flex;
      gap: 20px;
      width: fit-content;

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
  background: #ff4500;
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
        color: #fff;
        font-size: 32px;
        letter-spacing: 2px;
        line-height: 1.8;
      }

      p {
        font-size: 14px;
      }
    }

  }
}

section.ira {
  display: grid;
  grid-template-columns: 5fr 6fr;
  gap: 20px;
  max-width: 1300px;
  margin: 20px auto;

  @media(max-width: 600px) {
    grid-template-columns: 1fr;
  }

  div.w50 {
    padding: 20px;

    &:first-of-type {
      max-width: 400px;
    }

    h1 {
      font-size: 28px;
      font-weight: 500;
      margin-bottom: 20px;
    }

    a {
      padding: 10px 20px;
      background-color: #ff4500;
      border: none;
      color: #fff;
      border-radius: 10px;
    }

    p {
      font-size: 16px;
      margin-bottom: 15px;
      margin: 0px 0px 30px;
    }

    ul {
      list-style: none;

      li {
        display: flex;
        gap: 20px;
        margin-bottom: 10px;
        border-radius: 10px;
        padding: 20px;
        transition: 0.3s;

        &:hover {
          box-shadow: 2px 2px 2px #676767;
          background-color: #e0f0fd;
          transition: 0.3s;
        }
      }
    }
  }
}

div.bgpad {
  background-image: url(@/assets/backgroundbitcoin.jpeg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;

  section.portfolio {
    background-color: #e5f2fae6;
    padding: 50px;

    @media(max-width: 600px) {
      padding: 50px 30px;
    }

    h1 {
      text-align: center;
      font-size: 38px;
      font-weight: 500;
      margin: 0px 0px 10px;
      letter-spacing: 2px;
    }

    p {
      text-align: center;
    }

    div.container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin: 30px auto 20px;
      justify-content: space-between;
      gap: 10px;
      max-width: 1300px;

      @media(max-width: 600px) {
        grid-template-columns: 1fr;
      }

      div.w50 {
        padding: 5px;

        &:first-of-type {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr;
          gap: 10px;

          div.item {
            display: flex;
            gap: 10px;
            margin: 0px 0px 0px;
            // border: 1px solid #aaa;
            padding: 10px;
            border-radius: 10px;

            @media(max-width: 600px) {

              border: 1px solid #aaa;
            }

            div.icon {
              display: flex;
              height: fit-content;

              i {
                background-color: #E0F0FD;
                padding: 10px;
                font-size: 22px;
                border-radius: 50%;
                color: #ff4500;
              }
            }

            div.txt {
              display: grid;

              h2 {
                text-align: left;
                margin-bottom: 10px;
                font-size: 20px;
              }

              p {
                text-align: left;
                font-size: 15px;
                line-height: 1.3;
              }
            }
          }
        }
      }

      div.right {
        padding: 20px;
        border: 1px solid #999;
        border-radius: 20px;
        max-width: 700px;
        height: fit-content;

        h1 {
          text-align: left;
          font-size: 28px;
        }

        p {
          text-align: left;
          line-height: 1.5;
        }
      }
    }
  }
}

section.start {
  max-width: 1366px;
  margin: auto;
  padding: 80px 30px;

  h1 {
    text-align: center;
  }

  p {
    text-align: center;
    font-size: 18px;
    margin: 20px 0px 0px;
  }

  div.grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 50px 0px 0px;

    @media(max-width: 600px) {
      grid-template-columns: 1fr;
    }

    div.item {
      text-align: center;
      padding: 20px;
      display: grid;
      gap: 10px;

      p {
        text-transform: uppercase;
      }

      i {
        font-size: 36px;
        color: #ff4500;
      }
    }
  }
}
div.trust{
  section.start{
    i{
      background-color: #e0f0fd;
      width: fit-content;
      text-align: center;
      margin: auto;
      padding: 30px;
      border-radius: 50%;
    }
    p{
      font-size: 14px;
      margin: 0px 0px 10px;
    }
    p.big{
      font-size: 16px;
    }
    p.red{
      font-size: 14px;
      color: #ff4500 !important;
    }
  }
}
</style>