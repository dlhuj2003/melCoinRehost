<template>
  <main>
    <div class="main">
      <div class="top">
        <h1>Profile</h1>
        <div class="container">
          <div class="details">
            <i class="bi bi-person-circle"></i>
            <h3>Personal Info</h3>
            <p><strong>Name:</strong> {{ store.userDetails.first_name }} {{ store.userDetails.last_name }}</p>
            <p><strong>Gender:</strong> {{ store.userDetails }}</p>
            <p><strong>Email:</strong> {{ store.userDetails.email }}</p>
            <p><strong>Phone:</strong> {{ store.userDetails.tel }}</p>
            <p><strong>Country:</strong> {{ store.userDetails.country }}</p>
          </div>
          <div class="notification" id="#notification">
            <h3>Notifications</h3>
            <div class="messages" v-if="notification">
              <p>Account activated</p>
              <p>Deposit complete</p>
              <p>Withdrawal request recieved</p>
              <p>Investment plan activated</p>
            </div>
            <div class="empty" v-else>
              <p>You have no notification message</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    <Loader v-if="loading" />
  </main>
</template>

<script setup>
import { ref } from "vue";
import Loader from "../../components/Loader.vue";
import Footer from "@/components/Footer2.vue";
import { useMelStore } from "../../stores/counter";
const store = useMelStore();
const loading = ref(false);
const notification = ref(false)

</script>

<style scoped lang="scss">
main {
  background-color: #eee;
  z-index: 2;

  div.main {
    position: relative;
    height: 100dvh;
    overflow-y: scroll;
    z-index: 3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 30px;

    div.top {
      padding: 30px;
    }

    h1 {
      color: #333;
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 30px;
    }
    div.container{
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
      @media(max-width: 600px){
        justify-content: center;
      }
      div.notification{
        background-color: #FFF;
        border-radius: 10px;
        padding: 20px;
        height: fit-content;
        h3{
          margin: 0px 0px 10px;
        }
        p{
          font-size: 14px;
          line-height: 1.5;
        }
      }
    }
    div.details {
      background-color: #FFF;
      width: fit-content;
      padding: 20px;
      display: grid;
      gap: 15px;
      border-radius: 10px;
      box-shadow: 0px 2px 20px #3332;

      i {
        text-align: center;
        font-size: 100px;
        color: #555;
      }

      p {
        color: #333;
      }
    }
  }
}
</style>
