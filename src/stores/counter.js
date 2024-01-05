import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import { useRouter } from "vue-router";
import { melAPI } from "../axios/api";

export const useMelStore = defineStore("counter", () => {
  const router = useRouter();
  const userDetails = ref({});
  const loading = ref(false);
  const getUserDetails = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/signin");
    }
    loading.value = true;
    try {
      const res = await melAPI.get(`/details`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(res.data);
      userDetails.value = res.data;
      loading.value = false;
    } catch (error) {
      // router.push("/signin");
      console.log(error);
      loading.value = false;
    }
  };

  return { getUserDetails, userDetails, loading };
});
