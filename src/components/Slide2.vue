<script setup>
import { ref } from 'vue'
// import '@splidejs/vue-splide/css';
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
                            <h4 class="title">Download</h4>
                            <p>Download a wallet app. Popular options include Coinbase Wallet
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
                            <h4 class="title">Create account</h4>
                            <p>Create your account. Unlike a hosted wallet, you don’t need to share
                                any personal info to create a self-custody wallet. Not even an email address.
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
                            <h4 class="title">Security</h4>
                            <p>Be sure to write down your private key.It’s presented as a random 12-word
                                phrase. Keep it in a secure location. if you lose or forget this 12-word
                                phrase you won't be able to access your crypto
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
                            <h4 class="title">Transfer</h4>
                            <p>
                                Transfer crypto to your wallet. You'll need to transfer crypto into your self-custody
                                wallet.
                            </p>
                        </div>
                    </div>
                </SplideSlide>
            </Splide>
        </div>
    </main>
</template>

<style scoped lang="scss">
div.main {
    height: 100% !important;
}

div.item {
    padding: 0;
    width: 90%;
    height: 100%;

    div.item-icon {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background: linear-gradient(120deg, #c76300 0%, #ac5804 100%);
        display: flex;
        justify-content: center;
        align-items: center;
        color: #FFF;
        margin-bottom: 20px;

        i {
            font-size: 45px;
        }
    }

    div.content {
        h4.title {
            font-size: 18px;
            line-height: 1.5;
        }

        p {
            line-height: 1.5;
        }
    }
}
</style>