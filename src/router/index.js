import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Learn from '@/views/Learn.vue';
import Signup from '@/views/Signup.vue';
import Login from '@/views/Login.vue';
import Terms from '@/views/Terms.vue';
import About from '@/views/About.vue';
import DashboardLayout from "@/views/Dashboard/index.vue";
import Dashboard from "@/views/Dashboard/Dashboard.vue";
import Trade from "@/views/Dashboard/Trade.vue";
import Deposit from "@/views/Dashboard/Deposit.vue";
import Withdrawal from "@/views/Dashboard/Withdrawal.vue";
import Investment from "@/views/Dashboard/Investment.vue";
import Balance from "@/views/Dashboard/Balance.vue";
import Transactions from "@/views/Dashboard/Transactions.vue";
import Profile from "@/views/Dashboard/Profile.vue";


import AdminLogin from "@/views/AdminLogin.vue";
import AdminLayout from "@/views/Admin/index.vue";
import AdminDashboard from "@/views/Admin/Dashboard.vue";
import User from "../views/Admin/User.vue";
import DepositRequest from "@/views/Admin/Deposit.vue";
import WithdrawalRequest from "@/views/Admin/Withdrawal.vue";
import Trades from "@/views/Admin/Trades.vue";
import EditTrade from "@/views/Admin/EditTrade.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/learn',
      name: 'learn',
      component: Learn
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/terms',
      name: 'terms',
      component: Terms
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: "/dashboard",
      component: DashboardLayout,
      children: [
        {
          path: "",
          name: "dashboard",
          component: Dashboard,
        },
        {
          path: "/trade",
          name: "trade",
          component: Trade,
        },
        {
          path: "/deposit",
          name: "deposit",
          component: Deposit,
        },
        {
          path: "/withdrawal",
          name: "withdrawal",
          component: Withdrawal,
        },
        {
          path: "/investment",
          name: "investment",
          component: Investment,
        },
        {
          path: "/balance",
          name: "balance",
          component: Balance,
        },
        {
          path: "/transactions",
          name: "transactions",
          component: Transactions,
        },
        {
          path: "/profile",
          name: "profile",
          component: Profile,
        },
      ],
    },
    
    {
      path: "/adminLogin",
      name: "adminLogin",
      component: AdminLogin,
    },
    {
      path: "/admin",
      component: AdminLayout,
      children: [
        {
          path: "",
          name: "admin",
          component: AdminDashboard,
        },
        {
          path: "/user/:id",
          name: "user",
          component: User,
        },
        {
          path: "/depositRequest",
          name: "depositrequest",
          component: DepositRequest,
        },
        {
          path: "/withdrawalRequest",
          name: "withdrawalrequest",
          component: WithdrawalRequest,
        },
        {
          path: "/admintrades",
          name: "trades",
          component: Trades,
        },
        {
          path: "/trade/:id",
          name: "Edit trade",
          component: EditTrade,
        },
      ],
    },
  ]
})

export default router
