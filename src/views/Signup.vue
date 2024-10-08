<script setup>
import { ref, watch } from "vue";
import { melAPI } from "../axios/api";
import { useRouter } from "vue-router";
import Loader from "@/components/Loader.vue";
import Error from "@/components/Error.vue";
import Header from "@/components/Header.vue";

const toggleEye = ref(true);
function show() {
  document.getElementById("confirmPassword").type = "text";
  document.getElementById("password").type = "text";
}
function noshow() {
  document.getElementById("confirmPassword").type = "password";
  document.getElementById("password").type = "password";
}
const loading = ref(false);
const error = ref(false);
const errMsg = ref("");
const confirmPassword = ref("");
const router = useRouter();
const userDetails = ref({
  email: "",
  tel: "",
  password: "",
  username: "",
  promoCode: "",
  walletAddress: "",
});

watch(confirmPassword, (newPassword) => {
  if (newPassword !== userDetails.value.password) {
    error.value = true;
    errMsg.value = "Passwords do not match";
  } else {
    error.value = false;
    errMsg.value = "";
  }
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
      <Header />
      <div class="form">
        <!-- <p class="logo">mell<span>c</span>oin</p> -->
        <div class="left">
          <p class="title">Create an account</p>
          <p class="note">
            Be sure to enter your legal name as it appears on your
            government-issued ID.<br /><br />

            Required fields have an asterisk*
          </p>
          <form @submit.prevent="register">
            <div class="tg">
              <div class="full">
                <label for="name">Legal first name*</label>
                <input
                  type="text"
                  name=""
                  id="name"
                  placeholder="Legal first name"
                  v-model="userDetails.first_name"
                />
              </div>
              <div class="full">
                <label for="lastname">Legal last name*</label>
                <input
                  type="text"
                  name=""
                  id="lastname"
                  placeholder="Legal last name"
                  v-model="userDetails.last_name"
                />
              </div>
            </div>
            <div class="full">
              <label for="email">Email*</label>
              <input
                type="email"
                name=""
                id="email"
                placeholder="Enter your email"
                v-model="userDetails.email"
              />
            </div>
            <div class="tg">
              <div class="full">
                <label for="email">Username*</label>
                <input
                  type="text"
                  name=""
                  id="text"
                  placeholder="Username"
                  v-model="userDetails.username"
                />
              </div>
              <div class="full">
                <label for="tel">Phone number*</label>
                <input
                  type="text"
                  name=""
                  id="tel"
                  placeholder="Enter your phone number"
                  v-model="userDetails.tel"
                />
              </div>
            </div>
            <div class="full">
              <label for="coin">Your Bitcoin Wallet Address*</label>
              <input
                type="text"
                name=""
                id="coin"
                placeholder="Your Bitcoin Wallet Address"
                v-model="userDetails.walletAddress"
              />
            </div>
            <div class="full">
              <label for="password">Password*</label>
              <input
                type="password"
                name=""
                id="password"
                placeholder="Minimum of 8 characters"
                v-model="userDetails.password"
              />

              <div class="eye">
                <i
                  class="bi bi-eye"
                  v-if="toggleEye"
                  @click="noshow(), (toggleEye = false)"
                ></i>
                <i
                  class="bi bi-eye-slash"
                  v-else
                  @click="show(), (toggleEye = true)"
                ></i>
              </div>
            </div>
            <div class="full">
              <label for="confirmPassword">Confirm Password*</label>
              <input
                type="password"
                name=""
                id="confirmPassword"
                placeholder="Confirm password"
                v-model="confirmPassword"
              />
              <div class="eye">
                <i
                  class="bi bi-eye"
                  v-if="toggleEye"
                  @click="noshow(), (toggleEye = false)"
                ></i>
                <i
                  class="bi bi-eye-slash"
                  v-else
                  @click="show(), (toggleEye = true)"
                ></i>
              </div>
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
            <p class="check">
              <input type="checkbox" name="" id="" /> I certify that I am 18
              years of age or older and I agree to the
              <span>User agreement</span>
            </p>
            <Error :err-m-s-g="errMsg" v-if="error" />
            <button>Create account</button>
          </form>
          <p class="small">
            Already have an account?
            <router-link to="/login">Sign in</router-link>
          </p>
        </div>
        <div class="right">
          <h1>Do more with Mellcoin, invest right and retire early.</h1>
          <p>Set up your account and verify your photo ID to get started.</p>
          <img src="@/assets/investment.jpg" alt="" />
        </div>
      </div>
    </div>
    <Loader v-if="loading" />
  </main>
</template>

<style scoped lang="scss">
main {
  background-color: aliceblue;

  div.main {
    padding-bottom: 50px;

    div.form {
      display: grid;
      gap: 20px;
      width: 100%;
      max-width: 1200px;
      margin: 50px auto 0px;
      border-radius: 20px;
      padding: 50px;
      grid-template-columns: 1fr 1fr;
      @media (max-width: 600px) {
        margin: 20px auto 0px;
      }

      div.left {
        div.tg {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        p.title {
          font-size: 32px;
          font-weight: 600;
        }

        p.note {
          font-size: 18px;
          margin: 0px 0px 30px;
        }
      }

      div.right {
        position: relative;
        h1 {
          font-size: 40px;
        }

        img {
          width: 100%;
          margin: 10px 0px 0px;
        }
      }

      @media (max-width: 600px) {
        grid-template-columns: 1fr;
        padding: 30px;

        div.right {
          display: none;
        }
      }

      img {
        margin: auto;
      }

      p.check {
        font-size: 16px;
        margin: 0px 0px 10px;

        span {
          color: #d6704b;
        }
      }
    }

    form {
      display: grid;
      grid-template-columns: 1fr;
      min-width: 350px;
      @media (max-width: 600px) {
        min-width: unset;
      }

      div.full {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 20px;
        position: relative;
        div.eye {
          position: absolute;
          right: 20px;
          bottom: 10px;
        }

        label {
          font-size: 16px;
          color: #555;
        }

        input {
          height: 44px;
          border: 1px solid #aaa;
          border-radius: 5px;
          padding: 0px 20px;
          outline: none;
          width: 100%;
          background-color: transparent;
        }
      }

      button {
        height: 44px;
        width: 100%;
        background-color: #d6704b;
        border: none;
        color: #fff;
        border-radius: 22px;
        font-size: 16px;
      }
    }

    p.small {
      text-align: left !important;
      font-size: 16px !important;
      font-weight: 400;
      margin-bottom: 15px;
      margin-top: 10px;

      a {
        color: #d6704b;
      }
    }
  }
}
</style>
