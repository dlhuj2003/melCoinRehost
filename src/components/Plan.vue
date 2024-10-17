<script setup>
import { ref } from 'vue'
import { useRouter } from "vue-router";
</script>

<template>
    <main>
        <div class="main">
        <h3>
          We have an optimal range of trading plans for you to choose from
        </h3>
            <div class="plans">
                <div class="item">
                    <h2>2.5% <br>Basic plan</h2>
                    <p class="cost">Min. investment: $150</p>
                    <p class="percentage">Max. investment: $100,000</p>
                    <p class="duration">Contract Expires in: 48 Hours</p>
                    <p class="duration">10% Referral Bonus</p>
                    <p class="duration">24/7 Customer Care</p>
                    <router-link to="/login"><button>Get Started</button></router-link>
                </div>
                <div class="item">
                    <h2>3.5%<br>Standard plan</h2>
                    <p class="cost">Min. investment: $120,000</p>
                    <p class="percentage">Max. investment: $450,000</p>
                    <p class="duration">Contract Expires in: 48 Hours</p>
                    <p class="duration">10% Referral Bonus</p>
                    <p class="duration">24/7 Customer Care</p>
                    <router-link to="/login"><button>Get Started</button></router-link>
                </div>
                <div class="item">
                    <h2>5%<br>Premium plan</h2>
                    <p class="cost">Min. investment: $500,000</p>
                    <p class="percentage">Max. investment: Unlimited</p>
                    <p class="duration">Contract Expires in: 48 Hours</p>
                    <p class="duration">10% Referral Bonus</p>
                    <p class="duration">24/7 Customer Care</p>
                    <router-link to="/login"><button>Get Started</button></router-link>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
div.main {

  h3 {
    color: #ffffff;
    background-color: #d6704b;
    padding: 20px 30px;
    margin: 0px 0px 30px;
    text-transform: uppercase;
    font-size: 14px;
    text-align: center;
  }
    div.plans {
        display: flex;
        gap: 30px;
        flex-wrap: wrap;
        width: 100%;
        padding: 0px 30px 50px;
        justify-content: center;

        div.item {
            background: linear-gradient(#de744d, white);
            min-width: 200px;
            width: 50%;
            max-width: 250px;
            text-align: center;
            box-shadow: 2px 2px 5px #000c;
            border-radius: 10px;
            padding: 0px 0px 20px;

            @media (max-width: 610px) {
                width: 100%;
                max-width: 400px;
            }

            h2 {
                padding: 20px 10px;
                font-size: 16px;
                // background-color: #d6704b;
                color: #fff;
                border-radius: 10px 10px 0px 0px;
                margin-bottom: 20px;
                text-transform: uppercase;
            }

            p {
                font-size: 15px;
                color: #333;
                line-height: 2.2;
            }

            button {
                height: 40px;
                padding: 0px 40px;
                border-radius: 20px;
                background-color: #d6704b;
                border: none;
                color: #fff;
                margin: 10px 0px;
                transition: 0.3s;
                cursor: pointer;
                &:hover{
                    padding: 0px 50px;
                }
            }
        }
    }
}
</style>