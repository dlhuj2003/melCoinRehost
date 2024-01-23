<template>
  <section>
    <div class="address">
      <div v-if="!showQR" class="amount">
        <div class="full">
          <label for="amount">{{ coinDetails.coin }} amount in dollars</label>
          <input type="text" v-model="amount" id="amount" />
        </div>
        <button @click="deposit">Continue</button>
        <button @click="$emit('close')">Cancel</button>
      </div>
      <div v-else>
        <div class="top">
          <h2>{{ coinDetails.coin }}</h2>
          <i class="bi bi-x-lg" @click="$emit('close')"></i>
        </div>
        <div class="address_copy">
          <p class="txt">{{ coinDetails.address }}</p>
          <i
            class="bi bi-files"
            @click="copy(coinDetails.address)"
            v-if="!copied"
          ></i>
          <i class="bi bi-check2" v-else></i>
        </div>
        <button
          @click="$router.push(`/verify_deposit?coin=${coinDetails.coin}`)"
        >
          I have paid
        </button>
        <button @click="$emit('close')">Cancel</button>
      </div>
    </div>
    <Loader v-if="loading" text="loading up wallet details" />
  </section>
</template>

<script setup>
import { ref } from "vue";
import Loader from "./Loader.vue";
import { useMelStore } from "../stores/counter";
const amount = ref();
const copied = ref(false);
const showQR = ref(false);
const loading = ref(false);

const store = useMelStore();
const props = defineProps({
  coinDetails: {
    type: Object,
    required: true,
  },
});

const deposit = async () => {
  const token = localStorage.getItem("token");
  loading.value = true;
  try {
    showQR.value = true;
    loading.value = false;
  } catch (e) {
    console.log(e);
    loading.value = false;
  }
};

async function copy(text) {
  await navigator.clipboard.writeText(text);
  copied.value = true;
  setTimeout(() => (copied.value = false), 3000);
}
</script>

<style lang="scss" scoped>
div.address {
  position: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000a;
  top: 0;
  left: 0;
  backdrop-filter: blur(3px);
  z-index: 99;

  i {
    cursor: pointer;
  }

  .address_copy {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  button {
    margin-top: 10px;
    padding: 10px 8px;
    border: none;
    color: #ffffff;
    background: #ff8000;
    border-radius: 8px;
    margin-right: 10px;
    cursor: pointer;
    width: 100%;

    &:last-of-type {
      color: #ff8000;
      background: #000;
    }
  }

  .amount {
    label {
      color: #1a1919;
    }
    div.full {
      text-align: left;
      display: flex;
      flex-direction: column;
      gap: 5px;
      padding: 5px;
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
    button {
      margin-top: 10px;
      padding: 10px 8px;
      border: none;
      color: #ffffff;
      background: #ff8000;
      border-radius: 8px;
      margin-right: 10px;
      cursor: pointer;
      width: 100%;

      &:last-of-type {
        color: #ff8000;
        background: #000;
      }
    }
  }
  div {
    text-align: center;
    border-radius: 10px;
    max-width: 300px;
    height: fit-content;
    padding: 20px;
    background-color: #ffffff;

    input {
      border: 1px solid #1a1919;
      padding: 8px;
      border-radius: 4px;

      &:focus {
        outline: none;
      }
    }
    div.top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0;
      i {
        background-color: #000a;
        border-radius: 50%;
        font-size: 18px;
        color: #ffffff;
        padding: 2px 7px 0px;
        line-height: 1.7;
      }
    }
  }

  img {
    width: 250px;
  }

  p {
    font-size: 12px;
    color: #222;
    letter-spacing: -1px;
    &::selection {
      background-color: #ff8000;
    }
  }
  i.bi-files {
    font-size: 24px;
  }
}
</style>
