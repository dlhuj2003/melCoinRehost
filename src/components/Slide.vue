<script setup>
import { ref } from 'vue'
import '@splidejs/vue-splide/css';
import { Splide, SplideSlide } from '@splidejs/vue-splide'

</script>

<template>
    <main>
        <div class="main">
            <Splide :options="{ rewind: true, autoplay: true, speed: 1000 }" aria-label="">
                <SplideSlide>
                    <div class="item">
                        <div class="item-icon">
                            <i class="bi bi-coin ic"></i>
                        </div>
                        <div class="content">
                            <h4 class="title">Assured Profits</h4>
                            <p>Offer Accurate signals and informations 
                                to ensure Guaranteed 90%
                                profits on all trades and ensure prosper 
                                risk management on all trades to minimize losses.
                            </p>
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div class="item">
                        <div class="item-icon">
                            <i class="bi bi-clock ic"></i>
                        </div>
                        <div class="content">
                            <h4 class="title">24/7 Support</h4>
                            <p>We provide 24/7 customer support through 
                                Live Chat and e-mail.Our support 
                                representatives are always 
                                available to answer any questions.
                            </p>
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div class="item">
                        <div class="item-icon">
                            <i class="bi bi-shield ic"></i>
                        </div>
                        <div class="content">
                            <h4 class="title">Strong Protection</h4>
                            <p>We use a dedicated server with DDOS-Guard, 
                                with the highest level of DDOS protection 
                                to ensure that your 
                                cryptocurrencies are always safe with us..
                            </p>
                        </div>
                    </div>
                </SplideSlide>
            </Splide>
        </div>
    </main>
</template>

<style scoped lang="scss">
div.main{
    height: 100% !important;
}
div.item{
    padding: 0;
    width: 90%;
    height: 100%;
    div.item-icon{
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background: linear-gradient(120deg, #c76300 0%, #ac5804 100%);
        display: flex;
        justify-content: center;
        align-items: center;
        color: #FFF;
        margin-bottom: 20px;
        i{
            font-size: 45px;
        }
    }
    div.content{
        h4.title{
            font-size: 18px;
            line-height: 1.5;
        }
        p{
            line-height: 1.5;
        }
    }
}
</style>