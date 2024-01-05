<script setup>
import { ref } from 'vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Faq from '@/components/Faq.vue';
import Why from '@/components/Why2.vue';
</script>

<template>
    <main>
        <Header />
        <section class="one">
            <div class="container">
                <div class="w50">
                    <h2>How to setup a crypto wallet</h2>
                    <p>A crypto wallet is a place where you can securely keep your crypto. There are
                        many different types of crypto wallets, but the most secured and recommended
                        one is Self-custody wallet</p>
                    <router-link to="/signup"><button class="primary">Get Started</button></router-link>
                </div>
                <div class="w50">
                    <img src="@/assets/learn.svg" alt="">
                </div>
            </div>
        </section>
        <section class="one custody">
            <div class="container">
                <div class="w50 img">
                </div>
                <div class="w50">
                    <h2>Self-custody wallet</h2>
                    <p class="small">A self-custody wallet, like Coinbase Wallet, puts you in complete control of
                        your crypto. Self-custody wallet don't rely on a third party — or a
                        “custodian” — to keep your crypto safe. While they provide the software
                        necessary to store your crypto, the responsibility of remembering and
                        safeguarding your password falls entirely on you. If you lose or forget your
                        password — often referred to as a “private key” or “seed phrase” — there's no
                        way to access your crypto.
                        Why have a self-custody wallet? In addition to being in full control of the
                        security of your crypto, you can also access more advanced crypto activities
                        like yield farming, staking, lending, borrowing, and more.</p>
                    <router-link to="/signup"><button class="primary">Get Started</button></router-link>
                </div>
            </div>
        </section>
        <section class="count">
            <div class="contain">
                <div class="item">
                    <h1>$8B</h1>
                    <p>Quarterly volume traded</p>
                </div>
                <div class="item">
                    <h1>100+</h1>
                    <p>Countries Supported</p>
                </div>
                <div class="item">
                    <h1>$5B</h1>
                    <p>Assets on Platform</p>
                </div>
            </div>
        </section>
        <Why />
        <Faq />
        <Footer />
    </main>
</template>

<style scoped lang="scss">
section.one {
    height: fit-content;
    padding: 0px 50px;

    @media(max-width: 991px) {
        padding: 0px 30px;
    }

    div.container {
        position: relative;
        display: grid;
        grid-template-columns: 1fr 1fr;
        max-width: 1366px;
        margin: auto;
        align-items: center;
        padding: 80px 0px;

        @media(max-width: 991px) {
            display: flex;
            flex-direction: column-reverse;
            padding: 30px 0px 50px;
        }

        div.w50 {
            position: relative;
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;

            @media(max-width: 991px) {
                text-align: center;
            }

            img {
                width: 100%;
                max-width: 600px;
                text-align: center;
                margin: auto;

                @media(max-width: 600px) {
                    min-width: unset !important;
                }
            }
        }

        div.w50.img {
            background-image: url(@/assets/custody.jpg);
            height: 350px;
            background-size: cover;
            margin-right: 20px !important;
            width: auto;

            @media(max-width: 991px) {
                margin-right: 0px;
                width: 100%;
            }

            @media(max-width: 600px) {
                height: 250px;
            }
        }

        h2 {
            color: #111;
            font-size: 32px;
            max-width: 550px;
            z-index: 2;
            position: relative;

            @media(max-width: 991px) {
                font-size: 24px;
                margin: auto;
            }

            span {
                color: #FF8000;
                font-size: 36px;
                text-transform: uppercase;

                @media(max-width: 600px) {
                    font-size: 28px;
                }
            }
        }

        p {
            color: #333;
            font-size: 24px;
            max-width: 550px;

            @media(max-width: 991px) {
                font-size: 20px;
                margin: auto;
            }
        }

        p.small {
            font-size: 16px;
            line-height: 1.5;
        }

        button {
            height: 44px;
            border: none;
            background: linear-gradient(120deg, #FF8000 0%, #ac5804 100%);
            color: #fff;
            padding: 0px 30px;
            border-radius: 22px;
            margin-top: 30px;
        }
    }
}

section.one.custody {
    div.container {
        @media(max-width: 991px) {
            flex-direction: column !important;
            gap: 30px;
        }
    }
}

section.two div.container {
    position: relative;
    z-index: 888;
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: center;
    max-width: 800px;
    margin: auto;
    padding: 80px 50px;

    @media(max-width: 991px) {
        padding: 0px 30px;
        text-align: left;

        h1 {
            font-size: 42px !important;
            line-height: 1.2;
        }
    }

    @media(max-width: 600px) {
        h1 {
            font-size: 30px !important;
        }
    }

    h1 {
        font-size: 48px;
        color: #333;
    }

    p {
        color: #333;
        font-size: 18px;
    }

    button {
        height: 44px;
        color: #fff;
        background: linear-gradient(120deg, #FF8000 0%, #ac5804 100%);
        border: none;
        border-radius: 28px;
        width: fit-content;
        padding: 0px 30px;
        margin: 0px auto 30px;

        @media(max-width: 991px) {
            margin: 0px 0px 50px;
        }
    }
}

section.count {
    background: #000;
    color: #fff;
    padding: 80px 20px 100px;

    div.contain {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 10px;
        margin: auto;
        max-width: 1280px;

        @media(max-width: 600px) {
            grid-template-columns: 1fr;
            gap: 50px;
        }

        div.item {
            text-align: center;

            h1 {
                color: #ffa600;
                font-size: 32px;
                letter-spacing: 2px;
                line-height: 1.8;
            }

            p {
                font-size: 14px;
            }
        }

    }
}</style>