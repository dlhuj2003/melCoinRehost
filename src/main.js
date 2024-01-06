import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import VueSplide from "@splidejs/vue-splide";

const app = createApp(App);

app.config.globalProperties.$filters = {
  formatDate(date) {
    // const time = new Date(date || "")
    return new Intl.DateTimeFormat("en-us", {
      day: "2-digit",
      month: "short",
      // year: "numeric",
    }).format(new Date(date || ""));
  },
};

app.use(createPinia());
app.use(router);
app.use(VueSplide);

app.mount("#app");
