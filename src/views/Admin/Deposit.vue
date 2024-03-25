<template>
  <main>
    <h2>Coins</h2>
    <router-link to="/addcoin">
      <button>Add coin</button>
    </router-link>
    <section>
      <div
        v-for="(coin, index) in coins"
        @click="$router.push(`/coin/${coin._id}`)"
      >
        <h5>{{ coin.name }}</h5>
        <hr />
        <p>{{ coin.address }}</p>
      </div>
    </section>
    <Loader v-if="loading" />
  </main>
</template>

<script setup>
import { ref } from "vue";
import Loader from "../../components/Loader.vue";
import { adminAPI, getToken } from "@/axios/api";

const loading = ref(true);
const coins = ref([]);

const getCoins = async () => {
  try {
    const { data } = await adminAPI.get("/get_all_asset", {
      headers: {
        Authorization: getToken("admin"),
      },
    });
    // console.log(data);
    coins.value = data;
    loading.value = false;
  } catch (e) {
    loading.value = false;
    console.log(e);
  }
};

getCoins();
</script>

<style scoped lang="scss">
main {
  padding: 50px 20px 20px 20px;
  position: relative;
  //   margin: auto;
  width: 100%;
  min-height: 100vh;
  overflow: scroll;

  button {
    width: 200px;
    height: 44px;
    background-color: #c76300;
    color: #fff;
    border: none;
    // margin: 0px 0px 10px;
    margin-top: 20px;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  }
}

section {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  @media (max-width: 991px) {
    grid-template-columns: repeat(1, 1fr);
  }
  div {
    padding: 16px;
    background-color: #fff;
    color: #333;
    display: flex;
    flex-direction: column;
    gap: 16px;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  }
}
</style>
