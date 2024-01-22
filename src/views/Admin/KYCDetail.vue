<template>
  <main class="font-roboto">
    <h1>Welcome Admin</h1>
    <!-- <p>{{ $route.params.id }}</p> -->
    <Loader v-if="loading" />
    <div class="wrapper-kyv" v-else>
      <span>
        <p class="text-sm">Name</p>
        <h4 class="text-base font-semibold">{{ detail.name }}</h4>
      </span>
      <span>
        <p class="text-sm">Date of birth</p>
        <h4 class="text-base font-semibold">
          {{ new Date(detail.dob).toLocaleDateString() }}
        </h4>
      </span>
      <span>
        <p class="text-sm">Phone number</p>
        <h4 class="text-base font-semibold">{{ detail.tel }}</h4>
      </span>
      <span>
        <p class="text-sm">Country</p>
        <h4 class="text-base font-semibold">{{ detail.country }}</h4>
      </span>
      <span>
        <p class="text-sm">State</p>
        <h4 class="text-base font-semibold">{{ detail.state }}</h4>
      </span>
      <span>
        <p class="text-sm">City</p>
        <h4 class="text-base font-semibold">{{ detail.city }}</h4>
      </span>
      <span>
        <p class="text-sm">Zipcode</p>
        <h4 class="text-base font-semibold">{{ detail.zipcode }}</h4>
      </span>
      <span>
        <p class="text-sm">Address</p>
        <h4 class="text-base font-semibold">{{ detail.address }}</h4>
      </span>
      <span>
        <p class="text-sm">Document</p>
        <img :src="detail.document" alt="document" />
        <a :href="detail.document" download>
          <button class="bg-blue text-white p-2 mt-2 rounded">Download</button>
        </a>
      </span>
      <span>
        <p class="text-sm">Selfie</p>
        <img :src="detail.selfie" alt="selfie" />
        <a :href="detail.selfie" download>
          <button class="bg-blue text-white p-2 mt-2 rounded">Download</button>
        </a>
      </span>

      <span class="btn">
        <button class="approve" @click="approveKYC">Approve</button>
        <button @click="rejectKYC" class="reject">Reject</button>
      </span>
    </div>
    <SuccessModal
      :desc="successMsg"
      @close="$router.push('/adminKYC')"
      v-if="success"
    />
  </main>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { adminAPI, getToken } from "../../axios/api";
import Loader from "../../components/Loader.vue";
import SuccessModal from "../../components/SuccessModal.vue";
const balance = 356980;
const detail = ref();
const router = useRouter();
const route = useRoute();
const loading = ref(true);
const success = ref(false);
const successMsg = ref("");

const getDetails = async () => {
  loading.value = true;
  try {
    const res = await adminAPI.get(`/kyc-details/${route.params.id}`, {
      headers: {
        Authorization: getToken("admin"),
      },
    });
    console.log(res.data);
    detail.value = res.data;
    loading.value = false;
  } catch (e) {
    loading.value = false;
    // router.push("/admin");
    console.log(e);
  }
};

const approveKYC = async () => {
  loading.value = true;
  const token = localStorage.getItem("admin");
  try {
    const res = await adminAPI.post(
      `/approve-kyc/${route.params.id}`,
      { hello: "jello" },
      {
        headers: {
          Authorization: getToken("admin"),
        },
      }
    );
    // router.push("/admin/kyc");
    loading.value = false;
    successMsg.value = "KYC has been approved successfully";
    success.value = true;
  } catch (e) {
    loading.value = false;
    console.log(e);
  }
};

const rejectKYC = async () => {
  loading.value = true;
  const token = localStorage.getItem("admin");
  try {
    const res = await adminAPI.post(
      `/reject-kyc/${route.params.id}`,
      { hello: "jello" },
      {
        headers: {
          Authorization: getToken("admin"),
        },
      }
    );
    // router.push("/admin/kyc");
    loading.value = false;
    success.value = true;
    successMsg.value = "KYC has been rejected";
  } catch (e) {
    loading.value = false;
    console.log(e);
  }
};

getDetails();
</script>

<style scoped lang="scss">
main {
  padding: 20px;
  display: flex;
  flex-direction: column;
  @media (min-width: 1000px) {
    padding: 0 100px;
  }
}

.wrapper-kyv {
  gap: 20px;
  display: flex;
  flex-direction: column;

  img {
    width: 50vh;
  }
}

.btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding-bottom: 20px;
}

h1 {
  font-size: 24px;
  margin: 0px 0px 50px;
  color: #444;
}

.deposit {
  text-transform: uppercase;
}

ul {
  width: 100%;
  max-width: 800px;
  margin: auto;
  gap: 10px;
  display: grid;
  a:hover {
    color: unset;
  }

  li {
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 1px 10px #2223;
    padding: 20px 10px 5px;
    border-radius: 4px;
    // align-items: center;
    gap: 5px;

    p {
      line-height: 1.5;
    }
    h2 {
      font-size: 16px;
    }
  }
}

button {
  background-color: rgb(1 66 106);
  color: #fff;
  padding: 8px;
  border: none;
  margin-top: 8px;
  border-radius: 4px;
}

.reject {
  background-color: rgb(220 38 38);
  width: 100%;
}

.approve {
  background-color: rgb(1 66 106);
  width: 100%;
}
</style>
