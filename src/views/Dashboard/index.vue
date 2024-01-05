<template>
  <div class="flex">
    <DashboardNav />
    <div class="view relative left-48">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { RouterLink, RouterView, useRouter } from "vue-router";
import DashboardNav from "@/components/DashboardNav.vue";
import { useMelStore } from "../../stores/counter";
const router = useRouter();
const store = useMelStore();

store.getUserDetails();

const checkUser = () => {
  if (!localStorage.getItem("token")) {
    router.push("/login");
  }
};

checkUser();
</script>

<style scoped lang="scss">
.flex {
  display: flex;
  width: 100%;
  background-color: #f2f3f5;
}

.view {
  width: calc(100vw - 180px);

  @media (max-width: 710px) {
    width: 100vw;
  }
}
</style>
