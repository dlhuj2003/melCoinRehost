<template>
  <div class="flex">
    <AdminNav />
    <div class="view relative left-48">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { RouterLink, RouterView, useRouter } from "vue-router";
import AdminNav from "@/components/AdminNav.vue";

const router = useRouter();
// onMounted(() => {
//   const admin = localStorage.getItem("admin");
//   if (!admin) {
//     router.push("/");
//     return;
//   }
// });
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
