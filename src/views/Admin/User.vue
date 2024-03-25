<template>
  <main>
    <div class="top">
      <i class="bi bi-person-circle"></i>
      <p>{{ user.username }} (user)</p>
    </div>
    <form @submit.prevent="updUser">
      <div class="full">
        <label for="total">Total balance</label>
        <input type="text" name="" v-model="user.balance" id="total" />
      </div>
      <div class="full">
        <label for="eth">Etherum</label>
        <input type="text" name="" v-model="user.eth" id="eth" />
      </div>
      <div class="full">
        <label for="btc">Bitcoin</label>
        <input type="text" name="" v-model="user.btc" id="btc" />
      </div>
      <div class="full">
        <label for="usdt">USDT</label>
        <input type="text" name="" v-model="user.usdttrc20" id="usdt" />
      </div>
      <div class="full">
        <label for="bnb">BNB</label>
        <input type="text" name="" v-model="user.bnbbsc" id="bnb" />
      </div>
      <div class="full">
        <label for="promo">Promo</label>
        <input type="text" name="" v-model="user.promo" id="promo" />
      </div>
      <div class="full">
        <label for="email">Name</label>
        <input type="text" name="" v-model="user.name" id="name" />
      </div>
      <div class="full">
        <label for="email">Email</label>
        <input type="text" name="" v-model="user.email" id="email" />
      </div>
      <div class="full">
        <label for="email">Phone</label>
        <input type="text" name="" v-model="user.phone" id="phone" />
      </div>
      <div class="radio">
        <div class="flex">
          <input type="radio" name="status" id="active" v-model="user.status">
          <label for="active">Active</label>
        </div>
        <div class="flex">
          <input type="radio" name="status" id="inactive" v-model="user.status">
          <label for="inactive">Inactive</label>
        </div>
      </div>
      <button>Save changes</button>
      <!-- <button>Delete account</button> -->
      <router-link to="/admin">
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
const user = ref({});


const getUser = async () => {
  try {
    const { data } = await adminAPI.get(`/users/${route.params.id}`, {
      headers: {
        Authorization: getToken("admin"),
      },
    });
    // console.log(data);
    loading.value = false;
    user.value = data;
  } catch (e) {
    loading.value = false;
    console.log(e);
  }
};

const updUser = async () => {
  loading.value = true;
  try {
    const { data } = await adminAPI.patch(
      `/users/${route.params.id}`,
      {
        ...user.value,
      },
      {
        headers: {
          Authorization: getToken("admin"),
        },
      }
    );
    // console.log(data);
    router.push("/admin");
    loading.value = false;
  } catch (e) {
    loading.value = false;
    console.log(e);
  }
};

getUser();
</script>

<style scoped lang="scss">
main {
  padding: 20px;
  height: 100vh;
  overflow-y: scroll;
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
    background-color: #c76300;
    color: #fff;
    border: none;
    margin: 0px 0px 10px;
  }
}
</style>
