import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Learn from "@/views/Learn.vue";
import Explore from "@/views/Explore.vue";
import Signup from "@/views/Signup.vue";
import Login from "@/views/Login.vue";
import Terms from "@/views/Terms.vue";
import About from "@/views/About.vue";
import DashboardLayout from "@/views/Dashboard/index.vue";
import Dashboard from "@/views/Dashboard/Dashboard.vue";
import Trade from "@/views/Dashboard/Trade.vue";
import Security from "@/views/Security.vue";
import Deposit from "@/views/Dashboard/Deposit.vue";
import Withdrawal from "@/views/Dashboard/Withdrawal.vue";
import Investment from "@/views/Dashboard/Investment.vue";
import Plans from "@/views/Plans.vue";
import Balance from "@/views/Dashboard/Balance.vue";
import Transactions from "@/views/Dashboard/Transactions.vue";
import Profile from "@/views/Dashboard/Profile.vue";
import Kyc from "@/views/Dashboard/Kyc.vue";
import Ira from "@/views/Ira.vue";
import Charity from "@/views/Charity.vue";
import Investors from "@/views/Investors.vue";

import DepositVerification from "@/views/Dashboard/DepositVerification.vue";

import AdminLogin from "@/views/AdminLogin.vue";
import AdminLayout from "@/views/Admin/index.vue";
import AdminDashboard from "@/views/Admin/Dashboard.vue";
import User from "../views/Admin/User.vue";
import DepositRequest from "@/views/Admin/Deposit.vue";
import WithdrawalRequest from "@/views/Admin/Withdrawal.vue";
import Trades from "@/views/Admin/Trades.vue";
import EditTrade from "@/views/Admin/EditTrade.vue";
import CoinDetails from "@/views/Admin/coinDetails.vue";
import Addcoin from "@/views/Admin/Addcoin.vue";
import EditTransaction from "@/views/Admin/EditTransaction.vue";
import AdminKyc from "@/views/Admin/ApproveKyc.vue";
import KYCDetail from "@/views/Admin/KYCDetail.vue";
import Coins from "@/views/Admin/Coins.vue";
import ApproveDeposit from "@/views/Admin/ApproveDeposit.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/explore",
      name: "explore",
      component: Explore,
    },
    {
      path: "/plans",
      name: "plans",
      component: Plans,
    },
    {
      path: "/security",
      name: "security",
      component: Security,
    },
    {
      path: "/learn",
      name: "learn",
      component: Learn,
    },
    {
      path: "/ira",
      name: "ira",
      component: Ira,
    },
    {
      path: "/investors",
      name: "investors",
      component: Investors,
    },
    {
      path: "/charity",
      name: "charity",
      component: Charity,
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/terms",
      name: "terms",
      component: Terms,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/dashboard",
      component: DashboardLayout,
      meta: {
        requiresAuth: true,
      },
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
          path: "/verify_deposit",
          name: "Verify deposit",
          component: DepositVerification,
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
        {
          path: "/kyc",
          name: "kyc",
          component: Kyc,
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
      meta: {
        admin: false,
      },
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
          path: "/coins",
          name: "depositrequest",
          component: DepositRequest,
        },
        {
          path: "/coin/:id",
          name: "Coin detail",
          component: CoinDetails,
        },
        {
          path: "/addcoin",
          name: "Add coin",
          component: Addcoin,
        },
        {
          path: "/withdrawalRequest",
          name: "withdrawalrequest",
          component: WithdrawalRequest,
        },
        {
          path: "/withdrawalRequest/:id",
          name: "Edit withdrawalrequest",
          component: EditTransaction,
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
        {
          path: "/adminkyc",
          name: "adminkyc",
          component: AdminKyc,
        },
        {
          path: "/kycDetail/:id",
          name: "kyc Detail",
          component: KYCDetail,
        },
        {
          path: "/adminDeposits",
          name: "Admin deposit",
          component: Coins,
        },
        {
          path: "/depositDetail/:id",
          name: "Admin Deposit detail",
          component: ApproveDeposit,
        },
      ],
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    localStorage.getItem("token") ? next() : next("/login");
  } else {
    next();
  }
});
router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.admin)) {
    localStorage.getItem("admin") ? next() : next("/");
  } else {
    next();
  }
});

export default router;
