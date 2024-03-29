<script setup>
import { ref } from 'vue'
import { useRouter } from "vue-router";
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
                    <router-link to="/terms">
                        Terms & conditions
                    </router-link>
                    <router-link to="/security">
                        Security
                    </router-link>
                    <router-link to="/investors">
                        Investors
                    </router-link>
                </div>
                <div>
                    <p class="title">Learn</p>
                    <a href="learn#setupwallet">
                        How to set up a crypto wallet
                    </a>
                    <a href="learn#sendcrypto">
                        How to send crypto
                    </a>
                    <a href="learn#taxes">
                        Taxes
                    </a>
                    <a href="learn#setupwallet">
                        Wallet
                    </a>
                </div>
                <div>
                    <p class="title">Support</p>
                    <router-link to="/login">
                        Contact us
                    </router-link>
                    <router-link to="login">
                        ID verification

                    </router-link>
                    <router-link to="/learn">
                        Payment method
                    </router-link>
                    
                        <p title="America, China, France, Germany, Italy, UK, Switzerland">Supported countries</p>
                    
                </div>
                <div>
                    <p class="title">Contact us</p>
                    <a href="mailto://support@mellcoin.com">
                        support@mellcoin.com
                    </a>
                </div>
                <div class="soc">
                    <p class="title">Follow us</p>
                    <div class="social">
                        <a href="https://www.instagram.com/mellcoingroup?igsh=cGV5NXNtb2dsY2Vh&utm_source=qr" target="_blank"><i class="bi bi-instagram"></i></a>
                        <a href="https://www.facebook.com/help/104002523024878/?helpref=uf_share" target="_blank"><i class="bi bi-facebook"></i></a>
                        <!-- <a href="" target="_blank"><i class="bi bi-twitter"></i></a> -->
                        <a href="https://www.tiktok.com/@mellcoingroup?_t=8kyg9xRbA1u" target="_blank">
                            <i class="bi bi-tiktok"></i>
                        </a>
                        <a href="https://www.threads.net/@mellcoingroup" target="_blank"><i class="bi bi-threads"></i></a>
                        <a href="http://www.linkedin.com/in/mellcoin-group-7b3465300" target="_blank"><i class="bi bi-linkedin"></i></a>
                    </div>
                    <p class="logo">mell<span>C</span>oin</p>
                </div>
            </div>
        </div>
        <div class="copy">
            <p>MellCoin &copy; 2024. All rights reserved.</p>
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
                text-decoration-color: #d6704b;
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
                    color: #d6704b;
                }
            }
        }
    }

    div.soc {
        height: fit-content;
    }
    p.logo{
        font-size: 28px;
        margin: 50px 0px 0px;
        width: auto;
        span{
            color: #d6704b;
        }
    }
}</style>