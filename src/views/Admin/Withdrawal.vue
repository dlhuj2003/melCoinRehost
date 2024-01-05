<template>
  <main>
    <h2>Withdrawals</h2>
    <div class="table">
      <table>
        <thead>
          <tr>
            <td>S/N</td>
            <td>User</td>
            <td>Currency</td>
            <td>Amount</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(withdrawal, index) in withdrawals" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ withdrawal.owner.username }}</td>
            <td style="text-transform: uppercase">{{ withdrawal.crypto }}</td>
            <td>${{ withdrawal.amount }}</td>
            <td>{{ withdrawal.status }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <Loader v-if="loading" />
  </main>
</template>

<script setup>
import { ref } from "vue";
import Loader from "../../components/Loader.vue";

const loading = ref(true);
const withdrawals = ref([]);

const getWithdrawals = async () => {
  try {
    const { data } = await adminAPI.get("/transactions?type=withdrawal", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("admin")}`,
      },
    });
    // console.log(data);
    withdrawals.value = data;
    loading.value = false;
  } catch (e) {
    loading.value = false;
    console.log(e);
  }
};

getWithdrawals();
</script>

<style scoped lang="scss">
main {
  padding: 50px 20px 20px 20px;
  position: relative;
  //   display: grid;
  //   justify-content: center;
  margin: auto;
  overflow-x: scroll;
}

div.table {
  overflow-x: scroll;
  width: 100%;
  //   display: grid;

  table {
    background-color: #ffffff;
    padding: 20px;
    width: 100%;
    height: fit-content;
    min-width: 700px;
    overflow: scroll;

    thead {
      td {
        font-weight: 600;
        background-color: #dbdbdb;

        &:first-of-type {
          width: 45px;
        }
      }
    }

    tr {
      border-bottom: 1px solid #4444;
      text-align: center;

      td {
        padding: 10px 5px;
        width: fit-content;

        button {
          font-size: 14px;
          padding: 0px 10px;
          background-color: #870091;
          color: #ffffff;
          border: none;
          height: 30px;
          border-radius: 4px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
