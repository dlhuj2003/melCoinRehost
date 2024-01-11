<script setup>
import { ref } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <main>
    <Header />
    <section class="one">
      <div class="container">
        <div class="w50">
          <h2 style="margin-top: 15px;">How to setup a crypto wallet</h2>
          <p>
            A crypto wallet is a place where you can securely keep your crypto.
            There are many different types of crypto wallets, but the most
            secured and recommended one is Self-custody wallet
          </p>
          <router-link to="/signup"> <button class="primary">Download</button></router-link>
        </div>
        <div class="w50">
          <video width="100%" autoplay="true" src="" controls>
          </video>
        </div>
      </div>
    </section>
    <section class="one custody">
      <div class="container">
        <div class="w50 img"></div>
        <div class="w50">
          <h2>Self-custody wallet</h2>
          <p class="small">
            A self-custody wallet, like Coinbase Wallet, puts you in complete
            control of your crypto. Self-custody wallet don't rely on a third
            party — or a “custodian” — to keep your crypto safe. While they
            provide the software necessary to store your crypto, the
            responsibility of remembering and safeguarding your password falls
            entirely on you. If you lose or forget your password — often
            referred to as a “private key” or “seed phrase” — there's no way to
            access your crypto. Why have a self-custody wallet? In addition to
            being in full control of the security of your crypto, you can also
            access more advanced crypto activities like yield farming, staking,
            lending, borrowing, and more.
          </p>
          <router-link to="/signup"><button class="primary">Get Started</button></router-link>
        </div>
      </div>
    </section>
    <section class="how">
      <h1>How to setup a self custody wallet</h1>
      <div class="container">
        <p><strong>Download a wallet app.</strong> Popular options include Coinbase wallet.</p>
        <p><strong>Create your account.</strong> Unlike a hosted wallet, you don't need to share any personal info to
          create a self-custody wallet. Not even an email address.</p>
        <p><strong>Be sure to write down your private key.</strong>It's presented as a random 12-word
          phrase. Keep it in a secure location. if you lose or forget this 12-word
          phrase you won't be able to access your crypto.</p>
        <p><strong>Transfer your crypto to your wallet.</strong> You'll need to transfer crypto into your self-custody
          wallet.</p>
      </div>
    </section>
    <section class="one send">
      <div class="container">
        <div class="w50">
          <h2>How to send crypto</h2>
          <p>
            Sending crypto to friends and family, and using crypto to pay for goods and services,
            is easy once you get the hang of it.
          </p><br>
          <p>
            Why would you want to send crypto instead of cash? Since crypto is digital, sending
            crypto can be as easy as sending an email. Crypto also doesn't have any physical
            borders the way dollars, pesos, or euros do, so you can send crypto to friends, family,
            or merchants overseas as easily as sending it to someone sitting next to you. Lastly,
            you can send crypto without sharing your personal or banking info, making it more
            secure.
          </p><br>
          <p>
            To send crypto, you'll need the recipient's wallet address. A wallet address is a long
            string of characters, similar to a bank account number, that identifies where the
            crypto should go.
          </p><br>
          <p>
            Once you have the wallet address, you just need to open your crypto wallet, enter
            the wallet address, select how much crypto you want to send, and you're done.<br><br>
            There's usually a small fee to send crypto, called the “gas fee”, but this fee is often
            much lower than other methods like wire transfers or Western Union.
          </p>
          <p class="left">A few things to keep in mind when sending crypto:</p>
          <ol>
            <li>Each type of crypto has its own address, so make sure you're sending bitcoin to a bitcoin address, and
              etherum to an etherum address.</li>
            <li>Once your transaction is verified and confirmed, the crypto will show up in the
              recipient's account. This can take anywhere from a few seconds to a few minutes.</li>
            <li>Sending crypto is easy and affordable - whether your funds are traveling from
              across the room or around the world.</li>
          </ol>
        </div>
        <div class="w50">
          <video width="100%" autoplay="true" src="" controls>
          </video>
        </div>
      </div>
    </section>
    <section class="one send">
      <div class="container">
        <div class="w50">
          <h2>How to buy crypto</h2>
          <p>
            The following steps should work with most cryptocurrency exchanges, investing apps
            and brokerages.
          </p>
          <ol>
            <li><strong>Choose a platform that sells cryptocurrency.</strong><br>
              There are many different crypto exchanges on which you can buy BTC. It's important to consider which are
              available where you live and then decide which exchange is best for your needs. Beginners tend to prefer
              exchanges that are easy to use, while advanced crypto investors often search for exchanges that have low
              fees and advanced charts to help time their trades.</li>
            <li><strong>Connect your crypto platform to a payment method.</strong><br>
              If you're buying from any online platform, such as a crypto exchange, you can most often pay via a bank
              transfer or with a debit or credit card. Bitcoin ATMs accept most major credit cards. PayPal and Venmo allow
              you to buy directly from their app.</li>
            <li><strong>Decide how much Bitcoin you want to buy.</strong><br>
              One full Bitcoin costs tens of thousands of dollars, so most buyers don't typically own a full Bitcoin. It
              is
              normal to own fractions of a Bitcoin. Decide what level of investment in BTC works for you.</li>
            <li><strong>Transfer your Bitcoin to a crypto wallet.</strong><br>
              Unless your Bitcoin is stored on a crypto wallet that you can access, it is essentially not fully owned by
              you. How do you know Bitcoin is 100% yours? You and only you have a 12-24 word password for it.</li>
          </ol>
        </div>
        <div class="w50">

        </div>
      </div>
    </section>
    <section class="one send">
      <div class="container">
        <div class="w50">
          <h2>How to buy Bitcoin</h2>
          <p>
            Some of the most common places to buy Bitcoin are through exchanges or trading apps. These accept
            bank wire transfer or card, which makes purchasing BTC convenient and relatively quick compared to other
            methods.<br><br>
            If you're unsure which exchange might be right for you, please review our list of the best crypto exchanges
            for 2023 to help you decide.
          </p>
          <ul>
            <strong>Most common ways to buy BTC</strong>
            <li>Bitcoin ATM</li>
            <li>Cash app.</li>
            <li>Venmo</li>
            <li>Binance</li>
            <li>PayPal</li>
            <li>Gemini.com</li>
            <li>Cex.io</li>
            <li>Coinbase</li>
            <li>Bitcoin.com</li>
            <li>Kraken</li>
          </ul>
        </div>
        <div class="w50">

        </div>
      </div>
    </section>
    <section class="one send">
      <div class="container">
        <div class="w50">
          <h2>How crypto taxes work</h2>
          <br>
          <p>
            Crypto is considered a digital asset, and the IRS treats it generally like
            stocks, bonds, and other capital assets. Like these assets, the money you gain
            from crypto is taxed at different rates, either as capital gains or as income, depending on
            how you got your crypto and how long you held on to it.<br><br>
            If you're a U.S. taxpayer, you're probably used to seeing your federal and state
            income tax deducted from your pay stubs. The crypto you receive as income (like
            mining, staking, and rewards) is also subject to these same income taxes, which often
            won't be deducted or withheld. When you report your earnings, you'll generally owe
            according to the income tax rate appropriate to your tax bracket. Word of caution: If
            you've earned a lot from crypto activity, it might affect what tax bracket you're in and
            you may end up paying a higher tax rate on some of your earnings.
          </p>
        </div>
        <div class="w50">

        </div>
      </div>
    </section>
    <Footer />
  </main>
</template>

<style scoped lang="scss">
section.one.send {

  ul {
    strong {
      font-size: 24px;
      line-height: 2;
    }

    li {
      font-size: 24px;
      color: #ff4500;
      margin: 0px 0px 10px;
      @media(max-width: 600px){
          font-size: 18px;
        }
    }
  }

  div.container {
    display: flex;
    flex-direction: column-reverse;
    gap: 20px;
    padding: 50px 0px;

    p {
      max-width: unset;
      text-align: left;
      @media(max-width: 600px){
          font-size: 18px;
        }
    }

    @media(max-width: 991px) {

      p,
      li {
        text-align: left !important;
        margin: 20px 0px;
        
      }
    }

    ol {
      margin: 20px 20px 0px;

      li {
        margin: 0px 0px 20px;
        font-size: 24px;
        @media(max-width: 600px){
          font-size: 18px;
        }
      }
    }
  }
}
section.how{
  padding: 0px 50px;
  max-width: 1461px;
  margin: auto;
  @media(max-width: 600px){
          padding: 0px 30px;
        }
  h1{
    font-size: 28px;
    margin: 0px 0px 10px;
  }
  div.container{
    max-width: 800px;
    p{
      font-size: 24px;
      line-height: 1.5;
      margin: 0px 0px 10px;
      @media(max-width: 600px){
          font-size: 18px;
        }
    }
  }
}
section.one {
  height: fit-content;
  padding: 0px 50px;

  @media (max-width: 991px) {
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

    @media (max-width: 991px) {
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

      @media (max-width: 991px) {
        text-align: center;
      }

      img {
        width: 100%;
        max-width: 600px;
        text-align: center;
        margin: auto;

        @media (max-width: 600px) {
          min-width: unset !important;
        }
      }
    }

    div.w50.img {
      background-image: url(@/assets/custody.jpg);
      height: 350px;
      background-size: cover;
      margin-right: 20px !important;
      width: auto;

      @media (max-width: 991px) {
        margin-right: 0px;
        width: 100%;
      }

      @media (max-width: 600px) {
        height: 250px;
      }
    }

    h2 {
      color: #111;
      font-size: 32px;
      max-width: 550px;
      z-index: 2;
      position: relative;

      @media (max-width: 991px) {
        font-size: 24px;
        margin: auto;
      }

      span {
        color: #ff8000;
        font-size: 36px;
        text-transform: uppercase;

        @media (max-width: 600px) {
          font-size: 28px;
        }
      }
    }

    p {
      color: #333;
      font-size: 24px;
      max-width: 550px;

      @media (max-width: 991px) {
        font-size: 20px;
        margin: auto;
      }
    }

    p.small {
      font-size: 16px;
      line-height: 1.5;
    }

    button {
      height: 44px;
      border: none;
      background: #ff4500;
      color: #fff;
      padding: 0px 30px;
      border-radius: 22px;
      margin-top: 30px;
    }
  }
}

section.one.custody {
  div.container {
    @media (max-width: 991px) {
      flex-direction: column !important;
      gap: 30px;
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

  @media (max-width: 991px) {
    padding: 0px 30px;
    text-align: left;

    h1 {
      font-size: 42px !important;
      line-height: 1.2;
    }
  }

  @media (max-width: 600px) {
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
    font-size: 18px;
  }

  button {
    height: 44px;
    color: #fff;
    background: linear-gradient(120deg, #ff8000 0%, #ac5804 100%);
    border: none;
    border-radius: 28px;
    width: fit-content;
    padding: 0px 30px;
    margin: 0px auto 30px;

    @media (max-width: 991px) {
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

    @media (max-width: 600px) {
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
