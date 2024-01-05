<template>
  <div class="wrapper">
    <div
      class="h-[250px] w-[250px] rounded-md bg-white shadow flex items-center justify-center flex-col"
    >
      <i
        class="bi bi-check2 text-2xl p-4 bg-green-600 rounded-full text-white h-10 w-10 grid place-content-center"
      ></i>
      <h3 class="font-semibold text-lg uppercase">Success</h3>
      <p class="text-sm text-gray-800">{{ desc }}</p>
      <button
        @click="$emit('close')"
        class="bg-transparent border border-gray-500 p-2 w-[90px] mt-2 rounded-md cursor-pointer"
      >
        Close
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  desc: {
    type: String,
    default: "Your action was successful",
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  position: fixed;
  top: 0;
  left: 0;
  background-color: #00000052;
  height: 100vh;
  backdrop-filter: blur(10px);
  width: 100vw;
  z-index: 200;
  display: grid;
  place-content: center;
  color: rgb(0, 0, 0);

  div {
    height: 250px;
    width: 250px;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    padding: 16px;

    i {
      font-size: 1.5rem;
      line-height: 2rem;
      background-color: rgb(22 163 74);
      padding: 16px;
      height: 40px;
      width: 40px;
      color: white;
      display: grid;
      place-content: center;
    }

    h3 {
      font-weight: 600;
      font-size: 18px;
      text-transform: uppercase;
      margin-top: 8px;
    }

    p {
      font-size: 14px;
      color: rgb(31 41 55);
      text-align: center;
    }

    button {
      width: 90px;
      background-color: transparent;
      margin-top: 16px;
      border: 1px solid rgb(107 114 128);
      border-radius: 6px;
      cursor: pointer;
      padding: 8px;
    }
  }
}
</style>
