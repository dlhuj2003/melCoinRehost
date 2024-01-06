<template>
  <main>
    <nav class="body-menu">
      <div class="logo">
        <router-link to="/">
          <img src="@/assets/logo.png" alt="" />
        </router-link>
      </div>
      <div class="font-inter routerLinks">
        <router-link
          v-for="(link, index) in links"
          :key="index"
          :to="link.to"
          class="routerLink"
        >
          <i :class="link.icon"></i>
          {{ link.name }}
        </router-link>
      </div>
    </nav>
    <div class="mobile button">
      <button @click="open" id="open">
        <i class="bi bi-list"></i>
      </button>
      <button @click="close" id="close" style="display: none">
        <i class="bi bi-x"></i>
      </button>
    </div>
    <nav class="body-menu" id="mob">
      <div class="logo">
        <router-link to="/">
          <img src="@/assets/logo.png" alt="" />
        </router-link>
      </div>
      <div class="font-inter routerLinks">
        <router-link
          v-for="(link, index) in links"
          :key="index"
          :to="link.to"
          class="routerLink"
        >
          <i :class="link.icon"></i>
          {{ link.name }}
        </router-link>
      </div>
    </nav>
  </main>
</template>

<script setup>
import { ref } from "vue";

function open() {
  document.getElementById("open").style.display = "none";
  document.getElementById("close").style.display = "block";
  document.getElementById("mob").style.left = "0";
  document.getElementById("mob").style.transistion = "0.5s";
}
function close() {
  document.getElementById("open").style.display = "block";
  document.getElementById("close").style.display = "none";
  document.getElementById("mob").style.left = "-200px";
  document.getElementById("mob").style.transistion = "0.5s";
}

const links = ref([
  {
    name: "Users",
    to: "/admin",
    icon: "bi bi-grid-fill",
  },
  {
    name: "Coins",
    to: "/coins",
    icon: "bi bi-coin",
  },
  {
    name: "Withdrawals",
    to: "/withdrawalRequest",
    icon: "bi bi-coin",
  },
  {
    name: "Trades",
    to: "/admintrades",
    icon: "bi bi-gear",
  },
]);
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Inter&display=swap");

* {
  font-family: "Inter";
}

main {
  //position: sticky;
  top: 0;
  left: 0;
}

a {
  font-weight: 700;
  font-size: 13px;
  padding: 13px;
  text-decoration: none;
  color: #ffffff;
  height: 40px;
  margin-bottom: 5px;
}

.mobile {
  display: none;
  height: fit-content;
  position: absolute;
  z-index: 999;
  top: 20px;
  right: 40px;
  width: 44px;
  font-size: 20px;
  button {
    background-color: #ff8000;
    border: 1px solid #fff !important;
    color: #ffffff;
    padding: 10px 20px;
    border: none;
    font-size: 24px;
  }

  @media (max-width: 710px) {
    display: block !important;
  }
}

#mob {
  position: absolute;
  left: -200px;
  top: 0;
  display: block;
  z-index: 999;
  transition: 0.5s;

  @media (max-width: 710px) {
    transition: 0.5s;
  }
}

a.router-link-exact-active {
  color: #ffffff;
  background: #be6002;
}

.body-menu {
  width: 180px;
  height: 100vh;
  background: #ff8000;
  padding: 16px 0px;

  @media (max-width: 710px) {
    display: none;
  }
}

.logo {
  width: 90%;
  padding: 10px;
  text-align: center;
  margin: 0px auto 40px;
  background-color: #ffffff;
  border-radius: 10px;
}

.logo img {
  width: 80%;
}

.routerLinks {
  display: flex;
  flex-direction: column;
}

.routerLink i {
  margin-right: 6px;
}
</style>
