<template>
  <main>
    <div class="top">
      <h2>Transaction details</h2>
    </div>
    <form>
      <div class="full">
        <label for="name">Amount</label>
        <input type="text" name="" v-model="transaction.amount" id="name" />
      </div>
      <div class="full">
        <label for="coin">Coin</label>
        <input type="text" name="" v-model="transaction.crypto" id="coin" />
      </div>
      <div class="full">
        <label for="address">Wallet address</label>
        <input type="text" name="" v-model="transaction.wallet" id="address" />
      </div>
      <div class="full">
        <label for="status">Status</label>
        <input type="text" name="" v-model="transaction.status" id="status" />
      </div>
      <!-- <button>Save changes</button> -->
      <button @click="appTrx" type="button">Approve withdrawal</button>
      <router-link to="/withdrawalRequest">
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
const loading = ref(true);

const route = useRoute();
const router = useRouter();
const transaction = ref({});

const getTrx = async () => {
  try {
    const { data } = await adminAPI.get(`/transaction/${route.params.id}`, {
      headers: {
        Authorization: getToken("admin"),
      },
    });
    // console.log(data);
    loading.value = false;
    transaction.value = data;
  } catch (e) {
    loading.value = false;
    console.log(e);
  }
};

// const updTrx = async () => {
//   loading.value = true;
//   try {
//     const { data } = await adminAPI.patch(
//       `/transaction/${route.params.id}`,
//       {
//         ...transaction.value,
//       },
//       {
//         headers: {
//           Authorization: getToken("admin"),
//         },
//       }
//     );
//     loading.value = false;
//     console.log(data);
//     // router.push("/admin");
//     loading.value = false;
//   } catch (e) {
//     loading.value = false;
//     console.log(e);
//   }
// };
const appTrx = async () => {
  loading.value = true;
  try {
    const { data } = await adminAPI.post(
      `/approve/${route.params.id}`,
      {
        status: "Successful",
      },
      {
        headers: {
          Authorization: getToken("admin"),
        },
      }
    );
    loading.value = false;
    console.log(data);
    // router.push("/admin");
    loading.value = false;
  } catch (e) {
    loading.value = false;
    console.log(e);
  }
};

getTrx();
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
    background-color: #c76300;
    color: #fff;
    border: none;
    margin: 0px 0px 10px;
  }
}
</style>
