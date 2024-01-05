<template>
  <main>
    <div class="main">
      <h1>Create Trade</h1>
      <h3>
        Choose your preferred trading plan - create trade - start trading
        instantly
      </h3>
      <div class="container">
        <form action="">
          <input
            type="text"
            name=""
            id="amount"
            v-model="amount"
            placeholder="TRADING AMOUNT"
            autocomplete="off"
          />
          <select name="" id="plan" v-model="plan">
            <option value="">Select Plan-</option>
            <option value="basic">Basic ($150 - $100,000)</option>
            <option value="standard">Standard ($120,000 - $450,000)</option>
            <option value="premium">Premium ($500,000 - Unlimited)</option>
          </select>
          <p>Percentage: {{ percentage }}%</p>
          <p>Duration: {{ days }} days</p>
          <p>Earning Amount: {{ Math.round(earningAmount) || 0 }}</p>
        </form>
        <p class="small">Auto Calculated</p>
        <button @click="createTrade">Create Trade</button>
      </div>
    </div>
    <SuccessModal
      v-if="success"
      desc="Trade has been successfully created"
      @close="success = false"
    />
    <Loader v-if="loading" />
  </main>
</template>

<script setup>
import { ref, computed } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { botAPI } from "../../axios/api";
import Loader from "../../components/Loader.vue";
import SuccessModal from "../../components/SuccessModal.vue";

const plan = ref("");
const amount = ref("");
const days = ref("");
const loading = ref(false);
const success = ref(false);
const percentage = computed(() => {
  return plan.value == "basic"
    ? 1
    : plan.value == "standard"
    ? 1.5
    : plan.value == "premium"
    ? 2
    : "";
});

const earningAmount = computed(() => {
  let duration;
  plan.value == "basic"
    ? (duration = 7)
    : plan.value == "standard"
    ? (duration = 14)
    : plan.value == "premium"
    ? (duration = 28)
    : (duration = 0);
  days.value = duration;
  return (
    (parseFloat(percentage.value) / 100) * parseInt(amount.value) * duration +
    parseInt(amount.value)
  );
});

const createTrade = async () => {
  loading.value = true;
  try {
    const { data } = await botAPI.post(
      "/create-trade",
      {
        level: plan.value,
        duration: days.value,
        rate: percentage.value,
        amount: parseInt(amount.value),
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    loading.value = false;
    success.value = true;
    console.log(data);
  } catch (e) {
    loading.value = false;
    console.log(e);
  }
};
</script>

<style scoped lang="scss">
main {
  z-index: 2;


  div.main {
    position: relative;
    height: 100dvh;
    padding: 30px;
    overflow-y: scroll;
    z-index: 3;
  }

  h1 {
    color: #ffffff;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 30px;
  }

  h3 {
    color: #ffffff;
    background-color: #ff8000;
    padding: 20px 10px;
    margin: 0px 0px 30px;
    text-transform: uppercase;
    font-size: 14px;
  }

  div.container {
    position: relative;
    width: 100%;
    max-width: unset;

    form {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      width: 100%;

      @media (max-width: 600px) {
        grid-template-columns: 1fr;
      }

      input,
      select,
      p {
        height: 64px;
        width: 100%;
        background-color: #ffffff;
        display: flex;
        align-items: center;
        padding: 0px 10px;
        border: none;
        border-radius: 4px;
        outline: none;
      }

      p {
        color: #444;
      }
    }

    p.small {
      font-size: 14px;
      color: #ffffff;
    }

    button {
      background-color: #ff8000;
      color: #ffffff;
      border: none;
      border-radius: 4px;
      height: 44px;
      padding: 0px 20px;
      cursor: pointer;
    }
  }
}
</style>
