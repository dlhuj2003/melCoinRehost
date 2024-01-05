<template>
  <main>
    <h1>Welcome Admin</h1>
    <ul>
      <p>Users</p>
      <router-link
        v-for="(user, index) in users"
        :key="index"
        :to="`/user/${user._id}`"
      >
        <li>
          <p>{{ user.username }}</p>
          <p>${{ user.balance }}</p>
        </li>
      </router-link>
    </ul>
    <Loader v-if="loading" />
  </main>
</template>

<script setup>
import { ref } from "vue";
import Loader from "../../components/Loader.vue";
const balance = 356980;
const loading = ref(false);
const users = ref([
  {
    username: 'user1',
    balance: '10000'
  },
  {
    username: 'user1',
    balance: '10000'
  },
]);

// const getUsers = async () => {
//   try {
//     const { data } = await adminAPI.get("/users", {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("admin")}`,
//       },
//     });
//     // console.log(data);
//     users.value = data;
//     loading.value = false;
//   } catch (e) {
//     loading.value = false;
//     console.log(e);
//   }
// };

// getUsers();
</script>

<style scoped lang="scss">
main {
  min-height: 100vh;
  padding: 20px;
}

h1 {
  font-size: 24px;
  margin: 0px 0px 50px;
  color: #444;
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
    align-items: center;

    p {
      line-height: 1.5;
    }
  }
}
</style>
