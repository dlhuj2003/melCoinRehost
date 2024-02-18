<script setup>
import { ref } from "vue";
import Loader from "@/components/Loader.vue";
import SuccessModal from "@/components/SuccessModal.vue";
import { melAPI, getToken } from "@/axios/api";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
const userdetails = ref({
  name: "",
  dob: "",
  gender: "",
  country: "",
  state: "",
  city: "",
  zipcode: "",
  address: "",
  selfie: "",
});

const success = ref(false);
const loading = ref(false);

const selectFileID = (e) => {
  userdetails.value.id = e.target.files[0];
};

const selectFileSELFIE = (e) => {
  userdetails.value.selfie = e.target.files[0];
};
const verifyKYC = async () => {
  //   console.log(userdetails.value);
  loading.value = true;
  const token = localStorage.getItem("token");
  try {
    const { data } = await melAPI.post(
      "/kyc",
      { ...userdetails.value },
      {
        headers: {
          Authorization: getToken("user"),
          "content-Type": "multipart/form-data",
        },
      }
    );
    console.log(data);
    // router.push(`/dashboard`);
    loading.value = false;
    success.value = true;
  } catch (e) {
    console.log(e);
  }
};
</script>

<template>
  <main>
    <section class="kyc">
      <img
        src="@/assets/logo.png"
        width="200"
        style="margin: 0px auto"
        alt=""
      />
      <p>Sign up now, EARN up to <span>1125 USDT</span></p>
      <div class="form">
        <form @submit.prevent="verifyKYC">
          <div class="full">
            <label for="name">Fullname</label>
            <input type="text" id="name" required v-model="userdetails.name" />
          </div>
          <div class="full">
            <label for="dob">Date of Birth</label>
            <input type="date" id="dob" required v-model="userdetails.dob" />
          </div>
          <div class="full">
            <label for="gender">Gender</label>
            <select name="" id="gender" required v-model="userdetails.gender">
              <option value=""></option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div class="full">
            <label for="country">Country</label>
            <input
              type="text"
              id="country"
              required
              v-model="userdetails.country"
            />
          </div>
          <div class="full">
            <label for="state">State</label>
            <input
              type="text"
              id="state"
              required
              v-model="userdetails.state"
            />
          </div>
          <div class="full">
            <label for="city">City</label>
            <input type="text" id="city" required v-model="userdetails.city" />
          </div>
          <div class="full">
            <label for="zipcode">Zipcode</label>
            <input
              type="text"
              id="zipcode"
              required
              v-model="userdetails.zipcode"
            />
          </div>

          <div class="full">
            <label for="address">Address</label>
            <input
              type="text"
              id="state"
              required
              v-model="userdetails.address"
            />
          </div>
          <div class="full pic">
            <p class="label">Upload picture</p>
            <input
              type="file"
              name=""
              accept="imagr/*"
              required
              @change="selectFileSELFIE"
              id="picture"
              hidden
            />
            <label for="picture">Click to add image</label>
          </div>
          <div class="full">
            <p style="font-weight: 600; font-size: 12px; line-height: 1">
              Document upload
            </p>
            <p style="font-size: 12px">
              In order to complete this KYC please upload any of the following
              personal document.
              <span
                >Please ensure the uploaded document is valid to avoid delays in
                verifying your account</span
              >
            </p>
            <div class="rad">
              <input type="radio" name="id" id="passport" />
              <label for="passport">Passport</label>
            </div>
            <div class="rad">
              <input type="radio" name="id" id="nin" />
              <label for="nin">National card</label>
            </div>
            <div class="rad">
              <input type="radio" name="id" id="driver" />
              <label for="driver">Driver's license</label>
            </div>
            <input
              type="file"
              name=""
              id=""
              required
              class="clr"
              @change="selectFileID"
            />
          </div>
          <div class="rad">
            <input type="checkbox" name="" id="correct" />
            <label style="font-size: 12px">
              All the information I have entered is correct
            </label>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </section>
    <SuccessModal
      desc="KYC has been successfully submited"
      v-if="success"
      @close="$router.push('/dashboard')"
    />
    <Loader v-if="loading" />
  </main>
</template>

<style scoped lang="scss">
main {
  overflow-y: scroll;
  height: 100vh;
}
section.kyc {
  max-width: 1320px;
  margin: 0px auto;
  padding: 80px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 24px;
    text-align: center;
  }

  p {
    font-size: 14px;
    text-align: center;
    margin: 10px 0px;

    span {
      color: #c76300;
    }
  }

  div.form {
    form {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 400px;
      margin: 0px auto;

      div.full {
        display: flex;
        flex-direction: column;

        label {
          font-size: 10px;
          margin: 0px 0px 5px;
        }

        input,
        select {
          height: 40px;
          border: 1px solid #333;
          border-radius: 4px;
          outline: none;
          margin-bottom: 20px;
          padding: 0px 10px;
        }
      }
    }
    div.pic.full {
      label {
        border: 1px dashed #c76300;
        background-color: #ffddbc;
        height: 56px;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 11px;
        color: #c76300;
        text-transform: uppercase;
        letter-spacing: 2px;
        cursor: pointer;
      }
    }

    p {
      text-align: left;
      font-size: 12px;
    }

    button {
      height: 40px;
      width: 100%;
      background-color: #c76300;
      border: none;
      border-radius: 4px;
      color: #fff;
      font-size: 14px;
      cursor: pointer;
      margin-bottom: 5px;
    }
  }
}

div.rad {
  display: flex;
  align-items: center;

  input {
    margin-bottom: 0 !important;
    height: 30px !important;
  }

  label {
    margin-left: 10px;
  }
}

input.clr {
  border: none !important;
  padding: 0 !important;
  margin: 10px 0px 0px !important;
  font-size: 14px !important;
}
</style>
