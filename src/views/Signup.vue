<script setup>
import { ref } from "vue";
import { melAPI } from "../axios/api";
import { useRouter } from "vue-router";
import Loader from "@/components/Loader.vue";
import Error from "@/components/Error.vue";

const loading = ref(false);
const error = ref(false);
const errMsg = ref("");

const router = useRouter();

const userDetails = ref({
  email: "",
  tel: "",
  password: "",
  username: "",
  promoCode: "",
});

const register = async () => {
  loading.value = true;
  try {
    const { data } = await melAPI.post("/", {
      ...userDetails.value,
    });
    localStorage.setItem("token", data.token);
    loading.value = false;
    router.push("/dashboard");
    // console.log(data);
  } catch (e) {
    loading.value = false;
    error.value = true;
    errMsg.value = e.response.data.msg || e;
    console.log(e.response.data.msg);
  }
};
</script>

<template>
  <main>
    <div class="main">
      <div class="top">
        <h1><router-link to="/">Home</router-link>/Signup</h1>
      </div>
      <div class="form">
        <img src="@/assets/logo.png" width="200" alt="" />
        <p>Hello there!</p>
        <form @submit.prevent="register">
          <div class="full">
            <label for="name">Username</label>
            <input
              type="text"
              name=""
              id="name"
              placeholder="Enter your username"
              v-model="userDetails.username"
            />
          </div>
          <div class="full">
            <label for="email">Email</label>
            <input
              type="email"
              name=""
              id="email"
              placeholder="Enter your email"
              v-model="userDetails.email"
            />
          </div>
          <div class="full">
            <label for="tel">Phone number</label>
            <input
              type="text"
              name=""
              id="tel"
              placeholder="Enter your phone number"
              v-model="userDetails.tel"
            />
          </div>
          <div class="full">
            <label for="password">Password</label>
            <input
              type="password"
              name=""
              id="password"
              placeholder="Enter your password"
              v-model="userDetails.password"
            />
          </div>
          <div class="full">
            <label for="password">Referal code</label>
            <input
              type="text"
              name=""
              id="referal"
              placeholder="Referal code"
              v-model="userDetails.promoCode"
            />
          </div>
          <Error :err-m-s-g="errMsg" v-if="error" />
          <button>Sign up</button>
        </form>
        <p class="small">
          Already have an account?
          <router-link to="/login">Login here</router-link>
        </p>
      </div>
    </div>
    <Loader v-if="loading" />
  </main>
</template>

<style scoped lang="scss">
main {
  div.main {
    padding-bottom: 50px;
    div.top {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 150px;
      background-color: #000;

      h1 {
        color: #fff;

        a {
          color: #ff8000;
        }
      }
    }

    div.form {
      display: grid;
      gap: 20px;
      width: 100%;
      max-width: 400px;
      margin: 50px auto 0px;
      // border: 1px solid #000;
      box-shadow: 0px 0px 20px #5553;
      border-radius: 20px;
      padding: 30px;

      img {
        margin: auto;
      }

      p {
        text-align: center;
        font-size: 20px;
        font-weight: 600;
      }
    }

    form {
      div.full {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 20px;

        label {
          font-size: 14px;
          color: #555;
        }

        input {
          height: 44px;
          border: 1px solid #999;
          border-radius: 5px;
          padding: 0px 20px;
          outline: none;
        }
      }

      button {
        height: 44px;
        width: 100%;
        background: linear-gradient(120deg, #ff8000 0%, #ac5804 100%);
        border: none;
        color: #fff;
        border-radius: 5px;
      }
    }

    p.small {
      text-align: left !important;
      font-size: 12px !important;
      font-weight: 400;
      margin-bottom: 15px;
      margin-top: -15px;
      a {
        color: #ff8000;
      }
    }
  }
}
</style>
