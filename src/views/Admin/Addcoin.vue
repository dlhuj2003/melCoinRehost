<template>
  <main>
    <div class="top">
      <h2>Coin details</h2>
    </div>
    <form @submit.prevent="addCoin">
      <div class="full">
        <label for="name">Coin</label>
        <input type="text" name="" v-model="coin.name" id="name" />
      </div>
      <div class="full">
        <label for="address">Wallet address</label>
        <input type="text" name="" v-model="coin.address" id="address" />
      </div>
      <button>Save changes</button>
      <!-- <button>Delete account</button> -->
      <router-link to="/coins">
        <button>Back</button>
      </router-link>
    </form>
    <SuccessModal
      desc="coin added successfully"
      @close="$router.push('/coins')"
      v-if="success"
    />
    <Loader v-if="loading" />
  </main>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import Loader from "../../components/Loader.vue";
import { adminAPI, getToken } from "@/axios/api";
import SuccessModal from "@/components/SuccessModal.vue";
const loading = ref(false);
const success = ref(false);

const route = useRoute();
const router = useRouter();
const coin = ref({
  name: "",
  address: "",
});

const addCoin = async () => {
  loading.value = true;
  try {
    const { data } = await adminAPI.post(
      `/add_asset`,
      {
        ...coin.value,
      },
      {
        headers: {
          Authorization: getToken("admin"),
        },
      }
    );
    loading.value = false;
    console.log(data);
    success.value = true;
    // router.push("/admin");
    loading.value = false;
  } catch (e) {
    loading.value = false;
    console.log(e);
  }
};
</script>

<style scoped lang="scss">
main {
  padding: 20px;
  height: 100vh;
  overflow-y: scroll;
  div.top {
    display: flex;
    gap: 5px;
    margin: 20px 0;
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
