<template>
  <main>
    <Nav />
    <div class="main">
      <div class="top">
        <Plan />
      </div>
      <div class="trademodal" v-if="modal">
        <CreateTrade @closemodal="() => (modal = false)" />
      </div>
      <div v-else></div>

      <div class="top">
        <h1>Current Investments</h1>
        <h3>Your active investment and trade history are here</h3>
        <div class="table">
          <table>
            <thead>
              <tr>
                <td>Plan</td>
                <td>Amount</td>
                <td>Start date</td>
                <td>duration</td>
                <td>Stop Date</td>
                <td>Profit</td>
              </tr>
            </thead>

            <tbody v-for="(investments, index) in investment" :key="index">
              <tr>
                <td>{{ investments.level }}</td>
                <td>${{ investments.amount }}</td>
                <td>{{ $filters.formatDate(investments.createdAt) }}</td>
                <td>{{ investments.duration }}</td>
                <td>{{ $filters.formatDate(investments.due_date) }}</td>
                <td>${{ investments.profit }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
    
  </main>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import Loader from "../../components/Loader.vue";
import Footer from "@/components/Footer2.vue";
import Nav from "@/components/Nav.vue";
import CreateTrade from "@/components/CreateTrade.vue";
import { melAPI } from "@/axios/api";
import Plan from "@/components/Plan.vue"

const modal = ref(false);
const investment = ref([]);
const token = localStorage.getItem("token");

const getInvestments = async () => {
  try {
    const { data } = await melAPI.get("/get-trades", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    investment.value = data;
    console.log(data);
  } catch (e) {
    console.log(e);
  } finally {
    loading.value = false;
  }
};

getInvestments();
</script>

<style scoped lang="scss">
main {
  // background-color: #eee;

  z-index: 2;
  div.trademodal {
    position: fixed;
    width: calc(100% - 180px);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    top: 0;
    background-color: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(2px);
    z-index: 5;
    @media (max-width: 710px) {
      width: 100%;
    }
  }

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
    color: #c76300;
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
    background-color: #c76300;
    padding: 20px 30px;
    margin: 0px 0px 30px;
    text-transform: uppercase;
    font-size: 14px;
  }

  div.plans {
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    width: 100%;
    padding: 0px 30px 50px;
    justify-content: center;

    div.item {
      background-color: #fff;
      min-width: 200px;
      width: 50%;
      max-width: 250px;
      text-align: center;
      box-shadow: 0px 1px 20px #0003;
      border-radius: 10px;
      padding: 0px 0px 20px;

      @media (max-width: 610px) {
        width: 100%;
        max-width: 400px;
      }

      h2 {
        padding: 20px 10px;
        font-size: 16px;
        background-color: #c76300;
        color: #fff;
        border-radius: 10px 10px 0px 0px;
        margin-bottom: 20px;
      }

      p {
        font-size: 15px;
        color: #333;
        line-height: 2.2;
      }

      button {
        height: 40px;
        padding: 0px 30px;
        background-color: #c76300;
        border: none;
        color: #fff;
        margin: 10px 0px;
      }
    }
  }
  div.table {
    background-color: #fff;
    // width: 100%;
    overflow-x: scroll;
    box-shadow: 0px 2px 30px #3333;
    border-radius: 10px;
    margin: 0px 20px 50px;

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
