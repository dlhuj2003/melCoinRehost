<template>
  <main>
    <nav class="body-menu">
      <div class="logo">
        <router-link to="/">
          <p class="logo">mell<span>C</span>oin</p>
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
      <div class="end">
        <p class="username">@{{ store.userDetails.username }}</p>
        <!-- <a href="mailto:support@etherdometech.com"
          ><p class="logout">Contact Support</p></a
        > -->
        <p class="logout" @click="logout">Logout</p>
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
          <p class="logo">mell<span>C</span>oin</p>
        </router-link>
      </div>
      <div class="font-inter routerLinks">
        <router-link
          v-for="(link, index) in links"
          :key="index"
          :to="link.to"
          class="routerLink"
          @click="close"
        >
          <i :class="link.icon"></i>
          {{ link.name }}
        </router-link>
      </div>
      <div class="end">
        <p class="username">@{{ store.userDetails.username }}</p>
        <p class="logout" @click="logout">Logout</p>
      </div>
    </nav>
  </main>
</template>

<script setup>
import { useMelStore } from "@/stores/counter";
import { ref } from "vue";
import { RouterLink, RouterView, useRouter } from "vue-router";
const router = useRouter();
const store = useMelStore();
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
    name: "Dashboard",
    to: "/dashboard",
    icon: "bi bi-grid-fill",
  },
  {
    name: "Trade",
    to: "/trade",
    icon: "bi bi-cash-coin",
  },
  {
    name: "Deposit",
    to: "/deposit",
    icon: "bi bi-save",
  },
  {
    name: "Withdrawal",
    to: "/withdrawal",
    icon: "bi bi-coin",
  },
  {
    name: "Balance",
    to: "/balance",
    icon: "bi bi-piggy-bank",
  },
  {
    name: "Investment",
    to: "/investment",
    icon: "bi bi-diagram-2-fill",
  },
  {
    name: "Transactions",
    to: "/transactions",
    icon: "bi bi-currency-exchange",
  },
  {
    name: "Profile",
    to: "/profile",
    icon: "bi bi-person-circle",
  },
]);
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Inter&display=swap");

* {
  font-family: "Inter";
}

a {
  font-weight: 700;
  font-size: 13px;
  padding: 8px 13px;
  text-decoration: none;
  color: #333;
  height: 35px;
  margin-bottom: 4px;
}

p.username {
  color: #ff8000;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1.1px;
  margin: 0;
}
div.end {
  position: absolute;
  display: grid;
  gap: 15px;
  bottom: 5px;
  left: 10px;
  height: fit-content;
  p.logout {
    background-color: #ff8000;
    color: #fff;
    text-align: center;
    padding: 5px 20px;
    border-radius: 5px;
    margin: -10px 0px 0px;
    cursor: pointer;
    transition: 0.3s;
    font-size: 14px;
    &:hover {
      transition: 0.3s;
      letter-spacing: 0.5px;
    }
  }
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
    display: block;
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
  background: #c76300;
}

.body-menu {
  width: 180px;
  height: 100dvh;
  background: #fff;
  padding: 10px 0px;
  position: relative;
  z-index: 9;

  @media (max-width: 710px) {
    display: none;
  }
}

.logo {
  width: 90%;
  padding: 10px;
  text-align: center;
  margin: 0px auto 30px;
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
