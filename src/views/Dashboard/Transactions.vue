<script setup>
import { ref } from "vue";
import Footer from "@/components/Footer2.vue";
import Nav from "@/components/Nav.vue";
import { melAPI, getToken } from "@/axios/api";
import Loader from "@/components/Loader.vue";

const transactions = ref([]);
const loading = ref(true);
const getTransactions = async () => {
  try {
    const { data } = await melAPI.get("/transactions", {
      headers: {
        Authorization: getToken("user"),
      },
    });
    transactions.value = data;
    loading.value = false;
    // console.log(data);
  } catch (e) {
    console.log(e);
  }
};

getTransactions();
</script>

<template>
  <main>
    <div class="main">
      <div>
        <Nav />
        <div class="top">
          <h1>Transactions</h1>
          <h3>Your recent transactions are displayed here</h3>
          <div class="table">
            <table>
              <thead>
                <tr>
                  <td>Amount</td>
                  <td>Type</td>
                  <td>Coin</td>
                  <td>Status</td>
                  <td>Date</td>
                </tr>
              </thead>
              <tbody v-for="(transaction, index) in transactions" :key="index">
                <tr :for="index">
                  <td>${{ transaction.amount }}</td>
                  <td>{{ transaction.type }}</td>
                  <td>{{ transaction.crypto }}</td>
                  <td>{{ transaction.status }}</td>
                  <td>{{ $filters.formatDate(transaction.createdAt) }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Loader v-if="loading" />
      <Footer />
    </div>
  </main>
</template>

<style scoped lang="scss">
main {
  background-color: #eee;
  z-index: 1;

  div.main {
    position: relative;
    height: 100dvh;
    overflow-y: scroll;
    z-index: 3;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    div.top {
      padding: 30px;
    }

    div.table {
      background-color: #fff;
      width: 100%;
      overflow-x: scroll;
      box-shadow: 0px 2px 30px #3333;
      border-radius: 10px;

      table {
        color: #333;
        width: 100%;
        min-width: 550px;

        thead {
          tr {
            border-bottom: 3px solid #fff9;
          }

          td {
            font-weight: 600;
            font-size: 14px;
            padding: 10px;
          }
        }

        tbody {
          tr {
            border-top: 1px solid #eee5;
          }

          td {
            font-size: 14px;
            padding: 10px;
          }
        }
      }
    }
  }

  h1 {
    color: #333;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 30px;
  }

  h3 {
    color: #fff;
    margin: 0px 0px 30px;
    font-size: 16px;
    background-color: #ff8000;
    padding: 20px 10px;
  }
}
</style>
