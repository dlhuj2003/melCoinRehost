<template>
  <main>
    <section>
      <img
        src="@/assets/logo.png"
        width="200"
        style="margin: 0px auto"
        alt=""
      />
      <p>Welcome back! Admin</p>
      <div class="form" @submit.prevent="login">
        <form>
          <div class="full">
            <label for="email">Email</label>
            <input type="email" name="" id="email" v-model="details.email" />
          </div>
          <div class="full">
            <label for="password">Password</label>
            <input
              type="password"
              name=""
              id="password"
              v-model="details.password"
            />
          </div>
          <Error v-if="error" :errMSG="errMSG" />
          <button>Login</button>
        </form>
      </div>
    </section>
    <Loader v-if="loading" />
  </main>
</template>

<script setup>
import { ref } from "vue";
import Loader from "@/components/Loader.vue";
import Error from "@/components/Error.vue";

import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const error = ref(false);
const errMSG = ref("");
const details = ref({
  email: "",
  password: "",
});
</script>

<style scoped lang="scss">
section {
  max-width: 1320px;
  margin: 0px auto;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;

  h1 {
    font-size: 24px;
    text-align: center;
  }

  p {
    font-size: 14px;
    text-align: center;
    margin: 10px 0px;

    span {
      color: #ff8000;
    }
  }

  div.form {
    form {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 400px;
      margin: 0px auto 200px;

      div.full {
        display: flex;
        flex-direction: column;

        label {
          font-size: 10px;
        }

        input {
          height: 40px;
          border: 1px solid #333;
          border-radius: 4px;
          outline: none;
          margin-bottom: 20px;
          padding: 0px 10px;
        }
      }
    }

    p {
      text-align: left;
      font-size: 12px;
    }

    button {
      height: 40px;
      background-color: #ff8000;
      border: none;
      border-radius: 4px;
      color: #fff;
      font-size: 14px;
      cursor: pointer;
      margin-bottom: 5px;
    }
  }
}
</style>
