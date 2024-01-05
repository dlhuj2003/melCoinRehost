<template>
  <main>
    <Nav />
    <div class="main">
      <div class="top">
        <h1>Investment</h1>
        <h3>Your active investment and trade history are here</h3>
        <div class="table">
          <table>
            <thead>
              <tr>
                <td>Plan</td>
                <td>Amount</td>
                <td>Start date</td>
                <td>Status</td>
                <td>Stop Date</td>
                <td>Profit</td>
              </tr>
            </thead>

            <tbody v-for="(investments, index) in Investment" :key="index">
              <tr :for="index">
                <td>{{ investments.plan }}</td>
                <td>${{ investments.amount }}</td>
                <td>{{ investments.startDate }}</td>
                <td>{{ investments.status }}</td>
                <td>{{ investments.stopDate }}</td>
                <td>${{ investments.profit }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
      <Loader v-if="loading" />
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import Loader from "../../components/Loader.vue";
import Footer from "@/components/Footer2.vue";
import Nav from "@/components/Nav.vue";
import { melAPI } from "@/axios/api";

const loading = ref(true);

const token = localStorage.getItem("token");

const getInvestments = async () => {
  try {
    const { data } = await melAPI.get("/get-trades", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(data);
  } catch (e) {
    console.log(e);
  } finally {
    loading.value = false;
  }
};

getInvestments();

const investment = ref([]);
</script>

<style scoped lang="scss">
main {
  background-color: #eee;
  z-index: 2;

  div.main {
    position: relative;
    height: calc(100dvh - 60px);
    overflow-y: scroll;
    z-index: 3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  a:hover {
    color: #ff8000;
  }

  h1 {
    color: #333;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 30px;
    padding: 30px 30px 0px;
  }

  h3 {
    color: #ffffff;
    background-color: #ff8000;
    padding: 20px 30px;
    margin: 0px 0px 30px;
    text-transform: uppercase;
    font-size: 14px;
  }

  div.table {
    background-color: #fff;
    // width: 100%;
    overflow-x: scroll;
    box-shadow: 0px 2px 30px #3333;
    border-radius: 10px;
    margin: 0px 20px;

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
</style>
