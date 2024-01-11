<script setup>
import { ref } from 'vue'
</script>

<template>
    <main>
        <div class="container">
            <div class="grid">
                <div>
                    <p class="title">company</p>
                    <router-link to="/about">
                        About us
                    </router-link>
                    <router-link to="/">
                        Careers
                    </router-link>
                    <router-link to="/security">
                        Security
                    </router-link>
                    <router-link to="/">
                        Investors
                    </router-link>
                </div>
                <div>
                    <p class="title">Learn</p>
                    <router-link to="/terms">
                        How to set up a crypto wallet
                    </router-link>
                    <router-link to="/">
                        How to send crypto
                    </router-link>
                    <router-link to="/">
                        Taxes
                    </router-link>
                    <router-link to="/">
                        What is Bitcoin
                    </router-link>
                    <router-link to="/">
                        What is Crypto
                    </router-link>
                    <router-link to="/">
                        What is Blockchain
                    </router-link>
                    <router-link to="/">
                        Wallet
                    </router-link>
                </div>
                <div>
                    <p class="title">Support</p>
                    <router-link to="/terms">
                        Help center
                    </router-link>
                    <router-link to="/">
                        Contact us
                    </router-link>
                    <router-link to="/">
                        ID verification
                    </router-link>
                    <router-link to="/">
                        Payment method
                    </router-link>
                    <router-link to="/">
                        Supported countries
                    </router-link>
                </div>
                <div class="soc">
                    <p class="title">Follow us</p>
                    <div class="social">
                        <i class="bi bi-instagram"></i>
                        <i class="bi bi-facebook"></i>
                        <i class="bi bi-twitter"></i>
                        <i class="bi bi-threads"></i>
                        <i class="bi bi-linkedin"></i>
                    </div>
                    <p class="logo">mell<span>C</span>oin</p>
                </div>
            </div>
        </div>
        <div class="copy">
            <p>MellCoin &copy; 2023. All rights reserved.</p>
        </div>
    </main>
</template>

<style scoped lang="scss">
main {
    position: relative;
    background-color: #000000 !important;
    color: #fff;
    padding: 50px 50px 10px;

    div.foot {
        p {
            line-height: 1.5;
            font-size: 14px;
            color: #eee;
        }
    }

    div.copy {
        margin: 10px auto 0px;

        p {
            font-size: 12px;
            color: #999;
            border-top: 1px solid #aaa;
            padding: 10px 0px 0px;
        }
    }

    @media(max-width: 600px) {
        padding: 50px 20px 10px;
    }

    div.container {
        display: grid;
        grid-template-columns: 1fr;
        gap: 30px;
        max-width: 1441px;
        margin: auto;

        @media(max-width: 600px) {
            grid-template-columns: 1fr;
        }
    }

    p.tag {
        font-style: italic;
        font-size: 12px;
        letter-spacing: 1.5px;
    }

    div.grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 20px;
        @media(max-width: 991px){
            grid-template-columns: 1fr 1fr 1fr;
        }
        @media(max-width: 600px){
            grid-template-columns: 1fr 1fr;
        }

        div {
            display: grid;

            p.title {
                font-size: 20px;
                font-weight: 600;
                text-decoration: underline;
                text-decoration-color: #ff4500;
            }

            a {
                font-size: 14px;
                line-height: 2;
                color: #aaa !important;
            }

            div.social {
                display: flex;
                margin: 10px 0px 0px;
                gap: 10px;

                i {
                    font-size: 20px;
                    color: #ff4500;
                }
            }
        }
    }

    div.soc {
        height: fit-content;
    }
    p.logo{
        font-size: 28px;
        margin-top: 50px;
        span{
            color: #ff4500;
        }
    }
}</style>