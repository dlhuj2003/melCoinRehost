<template>
  <main>
    <h2>Trades</h2>
    <div class="table">
      <table>
        <thead>
          <tr>
            <td>S/N</td>
            <td>User</td>
            <td>Trading Amount</td>
            <td>Plan</td>
            <td>Percentage</td>
            <td>Duration</td>
            <td>Earnings</td>
            <td>Total</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(trade, index) in trades"
            :key="index"
            @click="$router.push(`/trade/${trade._id}`)"
          >
            <td>{{ index + 1 }}</td>
            <td>{{ trade.owner.username }}</td>
            <td>{{ trade.amount }}</td>
            <td>{{ trade.level }}</td>
            <td>{{ trade.rate * 100 }}%</td>
            <td>{{ trade.duration }}days</td>
            <td>{{ trade.profit }}</td>
            <td>{{ trade.amount + trade.profit }}</td>
            <td><i class="bi bi-pen"></i></td>
          </tr>
        </tbody>
      </table>
      <Loader v-if="loading" />
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import Loader from "../../components/Loader.vue";
import { adminAPI, getToken } from "@/axios/api";

const loading = ref(true);
const trades = ref([]);

const getTrades = async () => {
  try {
    const { data } = await adminAPI.get("/trades", {
      headers: {
        Authorization: getToken("admin"),
      },
    });
    trades.value = data;
    loading.value = false;
    // console.log(data);
  } catch (e) {
    loading.value = false;
    console.log(e);
  }
};

getTrades();
</script>

<style scoped lang="scss">
main {
  padding: 50px 20px 20px 20px;
  position: relative;
  //   display: grid;
  //   justify-content: center;
  margin: auto;
}

div.table {
  overflow-x: scroll;
  width: 100%;
  display: grid;

  table {
    background-color: #ffffff;
    padding: 20px;
    width: 100%;
    height: fit-content;
    min-width: 700px;

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
      cursor: pointer;

      td {
        padding: 10px 5px;
        width: fit-content;
      }
    }
  }
}
div.modal {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  // display: none;
  justify-content: center;
  align-items: center;
  height: 100vh;
  backdrop-filter: blur(2px);
  background-color: #4444;
  div.edit {
    width: 80%;
    max-width: 300px;
    background-color: #ffffff;
    box-shadow: 0px 2px 5px #4444;
    border-radius: 5px;
    padding: 20px;
    display: grid;
    gap: 15px;
    button {
      height: 40px;
      border: none;
      font-size: 13px;
      border-radius: 4px;
      &.update {
        background-color: #870091;
        color: #ffffff;
      }
      &.close {
        background-color: #e7b5eb;
        color: #870091;
      }
    }
    div.full {
      display: block;
      label {
        font-size: 14px;
      }
      input {
        border: 1px solid #444;
        border-radius: 4px;
        height: 40px;
        outline: none;
        padding: 0px 20px;
        width: 100%;
      }
    }
  }
}
</style>
