<template>
  <main>
    <Nav />
    
  </main>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import Loader from "../../components/Loader.vue";
import Footer from "@/components/Footer2.vue";
import Nav from "@/components/Nav.vue";

const loading = ref(true);

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

  
}
</style>
