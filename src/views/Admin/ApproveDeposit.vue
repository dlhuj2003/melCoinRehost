<template>
  <main class="font-roboto">
    <h1>Welcome Admin</h1>
    <!-- <p>{{ $route.params.id }}</p> -->
    <Loader v-if="loading" />
    <div class="dep_wrapper" v-else>
      <span>
        <p class="text-sm">Username</p>
        <h4 class="text-base font-semibold">{{ detail.owner.username }}</h4>
      </span>
      <span>
        <p class="text-sm">Date</p>
        <h4 class="text-base font-semibold">
          {{ new Date(detail.createdAt).toLocaleDateString() }}
        </h4>
      </span>
      <span>
        <p class="text-sm">Email</p>
        <h4 class="text-base font-semibold">{{ detail.owner.email }}</h4>
      </span>
      <span>
        <p class="text-sm">Coin</p>
        <h4 class="text-base font-semibold">{{ detail.crypto }}</h4>
      </span>
      <span>
        <p class="text-sm">Amount</p>
        <h4 class="text-base font-semibold">{{ detail.amount }}</h4>
      </span>

      <span>
        <p class="text-sm">Receipt</p>
        <img :src="detail.receipt" alt="document" />
        <a :href="detail.receipt" download>
          <button class="bg-blue text-white p-2 mt-2 rounded">Download</button>
        </a>
      </span>
      <span class="flex gap-3">
        <button class="approve" @click="approveDeposit">Confirm</button>
        <!-- <button @click="rejectKYC" class="reject">Reject</button> -->
      </span>
    </div>
    <SuccessModal
      :desc="successMsg"
      @close="$router.push('/adminDeposits')"
      v-if="success"
    />
  </main>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { adminAPI } from "../../axios/api";
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
  const token = localStorage.getItem("admin");
  try {
    const res = await adminAPI.get(`/transaction/${route.params.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(res.data);
    detail.value = res.data;
    loading.value = false;
  } catch (e) {
    loading.value = false;
    // router.push("/admin");
    console.log(e);
  }
};

const approveDeposit = async () => {
  loading.value = true;
  const token = localStorage.getItem("admin");
  try {
    const res = await adminAPI.post(
      `/approve_deposit/${route.params.id}`,
      { hello: "jello" },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // router.push("/admin/kyc");
    loading.value = false;
    successMsg.value = "Deposit has been confirmed successfully";
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
          Authorization: `Bearer ${token}`,
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
  min-height: 100vh;
  padding: 20px;
  @media (min-width: 1000px) {
    padding: 0 100px;
  }
}

.dep_wrapper {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

img {
  width: 50vh;
}

button {
  margin-bottom: 20px;
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
