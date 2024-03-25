<template>
  <div class="slip">
    <div class="w">
      <div class="top">
        <h2>{{ coin }}</h2>
        <i class="bi bi-x-lg" @click="$emit('close')"></i>
      </div>
      <div class="full">
        <label for="amount">Amount</label>
        <input type="text" v-model="amount" id="amount" />
      </div>
      <div class="full">
        <label for="wallet">Wallet</label>
        <input type="text" v-model="wallet" id="wallet" />
      </div>
      <Error v-if="err" :err-m-s-g="errMSG" />
      <button class="primary" @click="requestWithdrawal">
        Request withdrawal
      </button>
    </div>
    <SuccessModal
      v-if="success"
      desc="Your withdrawal request was successful"
      @close="close"
    />

    <Loader v-if="loading" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Loader from "./Loader.vue";
import SuccessModal from "./SuccessModal.vue";
import Error from "./Error.vue";
import { melAPI } from "@/axios/api";

const props = defineProps({
  coin: {
    type: String,
    required: true,
  },
  close: {
    type: Function,
  },
});
const amount = ref();
const wallet = ref("");
const loading = ref(false);
const success = ref(false);
const err = ref(false);
const errMSG = ref("");

const close = () => {
  success.value = false;
  props.close();
};

const requestWithdrawal = async () => {
  loading.value = true;
  try {
    const {
      data: { msg },
    } = await melAPI.post(
      "/withdraw",
      {
        amount: amount.value,
        wallet: wallet.value,
        coin: props.coin,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    // console.log(msg);
    success.value = true;
    loading.value = false;

    // props.close();
  } catch (e) {
    errMSG.value = e.response.data.msg;
    err.value = true;
    loading.value = false;
    console.log(e);
  }
};
</script>

<style lang="scss" scoped>
div.slip {
  position: fixed;
  top: 0;
  left: 0;
  background-color: #222a;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
  z-index: 99;
  div.w {
    background-color: #ffffff;
    width: 90%;
    max-width: 400px;
    padding: 20px;
    border-radius: 10px;
    div.top {
      display: flex;
      justify-content: space-between;
      margin: 0px 0px 20px;
      align-items: center;
      i {
        background-color: #222a;
        color: #ffffff;
        line-height: 2;
        padding: 2px 10px;
        border-radius: 25px;
        cursor: pointer;
      }
    }
    div.full {
      display: flex;
      flex-direction: column;
      gap: 5px;
      margin: 0px 0px 20px;
      label {
        font-size: 14px;
        color: #444;
      }
      input {
        height: 44px;
        border: 1px solid #222;
        padding: 0px 10px;
        color: #222;
        outline: none;
        border-radius: 4px;
      }
    }
    button.primary {
      height: 40px;
      width: 100%;
      font-size: 13px;
      color: #ffffff;
      background-color: #c76300;
      border: none;
      cursor: pointer;
    }
  }
}
</style>
