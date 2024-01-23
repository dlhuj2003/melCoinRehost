<script setup>
import { ref } from "vue";
import Loader from "@/components/Loader.vue";
import SuccessModal from "@/components/SuccessModal.vue";
import { melAPI, getToken } from "@/axios/api";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
const depositdetails = ref({
  amount: "",
  crypto: route.query.coin,
  type: "deposit",
  receipt: "",
});

const imgPreview = ref("");

const success = ref(false);
const loading = ref(false);

function previewFile(file) {
  const reader = new FileReader();

  reader.addEventListener(
    "load",
    () => {
      // convert image file to base64 string
      //   console.log(reader.result);
      imgPreview.value = reader.result;
    },
    false
  );

  if (file) {
    reader.readAsDataURL(file);
  }
}

const selectFileSELFIE = (e) => {
  depositdetails.value.receipt = e.target.files[0];
  previewFile(e.target.files[0]);
};
const verifyKYC = async () => {
  //   console.log(userdetails.value);
  loading.value = true;
  const token = localStorage.getItem("token");
  try {
    const { data } = await melAPI.post(
      "/deposit",
      { ...depositdetails.value },
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
      <div class="form">
        <form @submit.prevent="verifyKYC">
          <div class="full">
            <label for="name">Amount Deposited</label>
            <input
              type="text"
              id="name"
              inputmode="numeric"
              required
              v-model="depositdetails.amount"
            />
          </div>
          <div class="full">
            <label for="coin">Coin Deposited</label>
            <input
              type="text"
              id="coin"
              required
              v-model="depositdetails.crypto"
            />
          </div>
          <div class="full pic">
            <p class="label">Upload reciept</p>
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
          <img
            :src="imgPreview"
            alt="deposit reciept"
            v-if="imgPreview != ''"
            class="lg:col-span-2 border w-full h-fit"
          />

          <!-- <div class="rad">
            <input type="checkbox" name="" id="correct" />
            <label style="font-size: 12px">
              All the information I have entered is correct
            </label>
          </div> -->
          <button>Submit</button>
        </form>
      </div>
    </section>
    <SuccessModal
      desc="Your deposit reciept has been uploaded"
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
      color: #ff8000;
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
        border: 1px dashed #ff8000;
        background-color: #ffddbc;
        height: 56px;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 11px;
        color: #ff8000;
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
