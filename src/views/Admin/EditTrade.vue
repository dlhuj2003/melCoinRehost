<template>
  <main>
    <div class="top">
      <i class="bi bi-person-circle"></i>
    </div>
    <form @submit.prevent="updTrade">
      <div class="full">
        <label for="eth">Trade amount</label>
        <input
          type="text"
          inputmode="numeric"
          v-model="trade.amount"
          id="eth"
        />
      </div>
      <div class="full">
        <label for="eth">Profit</label>
        <input
          type="text"
          inputmode="numeric"
          v-model="trade.profit"
          id="eth"
        />
      </div>
      <div class="full">
        <label for="btc">Duration</label>
        <input
          type="text"
          inputmode="numeric"
          v-model="trade.duration"
          id="btc"
        />
      </div>
      <div class="full">
        <label for="bnb">Trade rate</label>
        <input type="text" inputmode="numeric" v-model="trade.rate" id="bnb" />
      </div>
      <button>Save changes</button>
      <button type="button" @click="delTrade">Delete Trade</button>
      <router-link to="/admintrades">
        <button>Back</button>
      </router-link>
    </form>
    <Loader v-if="loading" />
  </main>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import Loader from "../../components/Loader.vue";
import { adminAPI, getToken } from "@/axios/api";
const etherum = ref("0");
const bitcoin = ref("0");
const usdt = ref("0");
const bnb = ref("0");
const email = ref("user@email.com");
const loading = ref(true);

const route = useRoute();
const router = useRouter();
const trade = ref({});

const getTrade = async () => {
  try {
    const { data } = await adminAPI.get(`/trades/${route.params.id}`, {
      headers: {
        Authorization: getToken("admin"),
      },
    });
    // console.log(data);
    loading.value = false;
    trade.value = data;
  } catch (e) {
    loading.value = false;
    console.log(e);
  }
};

const updTrade = async () => {
  loading.value = true;
  try {
    const { data } = await adminAPI.patch(
      `/trades/${route.params.id}`,
      {
        ...trade.value,
      },
      {
        headers: {
          Authorization: getToken("admin"),
        },
      }
    );
    // console.log(data);
    router.push("/admintrades");
    loading.value = false;
  } catch (e) {
    loading.value = false;
    console.log(e);
  }
};

const delTrade = async () => {
  loading.value = true;
  try {
    const { data } = await adminAPI.delete(`/trades/${route.params.id}`, {
      headers: {
        Authorization: getToken("admin"),
      },
    });
    // console.log(data);
    router.push("/admintrades");
    loading.value = false;
  } catch (e) {
    loading.value = false;
    console.log(e);
  }
};

getTrade();
</script>

<style scoped lang="scss">
main {
  padding: 20px;
  div.top {
    display: flex;
    gap: 5px;
  }
  div.full {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin: 0px 0px 20px;
    input {
      height: 40px;
      padding: 0px 10px;
      border: 1px solid #222;
      outline: none;
    }
  }
  button {
    width: 100%;
    height: 44px;
    background-color: #ff8000;
    color: #fff;
    border: none;
    margin: 0px 0px 10px;
  }
}
</style>
