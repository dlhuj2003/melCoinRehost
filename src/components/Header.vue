<template>
  <main>
    <div class="main">
      <router-link to="/" style="display: flex; align-items: center">
        <p class="logo">mell<span>C</span>oin</p>
      </router-link>
      <ul class="desktop">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/explore">Explore</router-link>
        </li>
        <li>
          <router-link to="/learn">Learn</router-link>
        </li>
        <li class="sup">
          <p>Support</p>
          <ul id="support">
            <li>
              <router-link to="learn">Help center</router-link>
            </li>
            <router-link to="/login"><li>Contact us</li></router-link>
            <li>
              <router-link to="/login">ID verification</router-link>
            </li>
            <!-- <li class="p">
              <p class="pay">Payment methods</p>
              <div class="x">
                <p class="payment">
                  We recieve payment with 3 major cryptocurrencies
                </p>
                <ol class="alpha">
                  <li>Bitcoin</li>
                  <li>Etherum</li>
                  <li>USDT</li>
                </ol>
              </div>
            </li> -->
          </ul>
        </li>
        <li>
          <router-link to="/ira">IRA</router-link>
        </li>
        <li>
          <router-link to="/charity">Charity</router-link>
        </li>
        <li>
          <router-link to="/about">Company</router-link>
        </li>
      </ul>
      <div class="buttons desktop">
  <div class="gtranslate_wrapper">
    
  </div>
        <router-link to="/login"><button class="secondary">Sign in</button></router-link>
        <router-link to="/signup">
          <button class="primary">Get started</button></router-link>
      </div>
      <div class="mobe">
        <div class="mobile" v-if="mobileMenu">
          <router-link to="/">
            <p class="logo" style="margin-bottom: 20px">
              mell<span>C</span>oin
            </p>
          </router-link>
          <ul>
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link to="/explore">Explore</router-link>
            </li>
            <li>
              <router-link to="/learn">Learn</router-link>
            </li>
            <li class="sup">
          <p>Support</p>
          <ul id="support">
            <li>
              <router-link to="learn">Help center</router-link>
            </li>
            <li>Contact us</li>
            <li>
              <router-link to="/login">ID verification</router-link>
            </li>
            <!-- <li class="p">
              <p class="pay">Payment methods</p>
              <div class="x">
                <p class="payment">
                  We recieve payment with 3 major cryptocurrencies
                </p>
                <ol class="alpha">
                  <li>Bitcoin</li>
                  <li>Etherum</li>
                  <li>USDT</li>
                </ol>
              </div>
            </li> -->
          </ul>
        </li>
            <li>
              <router-link to="/ira">IRA</router-link>
            </li>
            <li>
              <router-link to="/charity">Charity</router-link>
            </li>
            <li>
              <router-link to="/about">Company</router-link>
            </li>
          </ul>

          <div class="buttons">
            <div class="gtranslate_wrapper"></div>
            <router-link to="/login"><button class="secondary">Sign in</button></router-link>
            <router-link to="/signup">
              <button class="primary">Get started</button></router-link>
          </div>
        </div>
        <div v-else></div>
      </div>
    </div>

    <div class="toggle">
      <i class="bi bi-x" v-if="mobileMenu" @click="mobileMenu = false"></i>
      <i class="bi bi-list" v-else @click="mobileMenu = true"></i>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import Translate from "./Translate.vue";
const mobileMenu = ref(false);
const globe = ref(false);
</script>

<style scoped lang="scss">

main {
  background: #f7f4f4 !important;
  z-index: 999 !important;
  position: sticky;
  top: 0;
  padding: 0px 50px;
  // box-shadow: 0px 5px 10px #3331;

  @media (max-width: 600px) {
    padding: 0px 0px;
  }
  
div.main {
  background: none;
  position: relative;
  display: flex;
  justify-content: space-between;
  max-width: 1366px;
  margin: auto;
  height: 70px;
  align-items: center;

  img {
    width: 150px;
  }

  ul {
    list-style: none;
    display: flex;
    gap: 30px;

    li {
      color: #000;
      font-weight: 700;
      &:hover{
        color: cadetblue;
      }
    }
    div.x li{
      &:hover{
        color: #000;
        cursor: text;
      }
    }
  }

  div.buttons {
    display: flex;
    gap: 10px;
    align-items: center;
    position: relative;
    padding-left: 150px;

    i {
      position: relative;
      left: 0;
      top: 0;
      font-size: 20px;
    }

    button {
      height: 40px;
      border-radius: 22px;
      font-size: 16px;
      padding: 0px 20px;
      color: #fff;
      font-weight: 700;
      cursor: pointer;
        transition: 0.5s;
      &:hover{
        transform: scale(1.1);
        transition: 0.5s;
      }
    }

    button.primary {
      background: #d6704b;
      border: none;
    }

    button.secondary {
      border: none;
      background-color: #e0dfdf;
      color: #000;
    }
  }
}
}
div.mobe {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

p.logo {
  @media (max-width: 600px) {
    margin-left: 20px;
  }
}

div.lan {
  position: relative;

  @media (max-width: 600px) {
    display: none;
  }

  ul.lang {
    position: absolute;
    display: grid;
    grid-template-columns: 1fr;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    top: 40px;

    li {
      padding: 0px 10px;
      cursor: pointer;
    }
  }
}


div.toggle {
  display: none;
}

i {
  color: #000;
  font-size: 36px;
  position: absolute;
  right: 30px;
  top: 10px;
  z-index: 998;
  cursor: pointer;

  &:hover {
    color: #d6704b;
  }
}

div.mobile {
  display: block;
  position: absolute;
  top: 0;
  padding: 20px;
  background-color: #fff;
  width: 100%;

  ul {
    display: grid !important;
    gap: 20px !important;
    margin-bottom: 20px;
  }
  ul#support{
    display: none;
  }

  div.lan {
    display: block;
  }
}

@media (max-width: 991px) {
  .desktop {
    display: none !important;
  }

  div.mobe {
    display: block;
  }

  div.toggle {
    display: block !important;
  }
}


li.sup {
  position: relative;
  cursor: pointer;
  &:hover ul#support{
    display: grid;
  }

  ul#support {
    display: none;
    position: absolute;
    background-color: #fff;
    padding: 20px;
    top: 20px;
    border-radius: 10px;
    box-shadow: 0px 5px 20px #0002;
    gap: 20px;
    min-width: 180px;
    &:hover{
      display: grid;
    }

    li.p {
      position: relative;

      div.x {
        display: none;
        padding: 20px 0px 0px;
        transition: 1s;
        &:hover{ 
          display: block;
        }
        p.payment {
          line-height: 1.5 !important;
        }
        ol.alpha li{
          margin: 0px 20px;
          line-height: 1.5;
        }
      }
    }

    p.pay {
      cursor: pointer;
      position: relative;
      z-index: 5;

      &:hover~div.x {

        display: block;
        transition: 1s;

      }

      ol {
        padding: 0px 20px;
      }
    }
  }
}
@media(max-width: 600px){
  li.sup {
  position: relative;
  cursor: pointer;
  &:hover ul#support{
    display: grid !important;
  }

  ul#support {
    display: none !important;
    position: absolute;
    background-color: #fff;
    padding: 20px;
    top: 20px;
    border-radius: 10px;
    box-shadow: 0px 5px 20px #0002;
    gap: 20px;
    min-width: 180px;
    &:hover{
      display: grid !important;
    }

    li.p {
      position: relative;

      div.x {
        display: none;
        padding: 20px 0px 0px;
        transition: 1s;
        &:hover{ 
          display: block;
        }
        p.payment {
          line-height: 1.5 !important;
        }
        ol.alpha li{
          margin: 0px 20px;
          line-height: 1.5;
        }
      }
    }

    p.pay {
      cursor: pointer;
      position: relative;
      z-index: 5;

      &:hover~div.x {

        display: block;
        transition: 1s;

      }

      ol {
        padding: 0px 20px;
      }
    }
  }
}
}
</style>
