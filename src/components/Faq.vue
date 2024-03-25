<script setup>
import { ref } from 'vue'
const top1 = ref(false);
const top2 = ref(false);
const top3 = ref(false);
const top4 = ref(false);
const top5 = ref(false);
</script>

<template>
    <main>
        <div class="container">
            <div class="ms">
                <h2>Some of the things you may want to know</h2>
                <p>We answered questions so you don't have to ask.</p>
                <button>More</button>
            </div>
            <div>
                <div class="item">
                    <div class="top top1" @click="top1 = !top1">
                        <p class="que">What is a crypto wallet?</p>
                        <i class="bi bi-chevron-up" v-if="top1"></i>
                        <i class="bi bi-chevron-down" v-else></i>
                    </div>
                    <p class="content" v-if="top1">
                        A crypto wallet is a place where you can securely keep your crypto. There are
                        many different types of crypto wallets, but the most secured and recommended
                        one is Self-custody wallet.
                    </p>
                    <div v-else></div>
                </div>
                <div class="item">
                    <div class="top top1" @click="top2 = !top2">
                        <p class="que">How to send crypto</p>
                        <i class="bi bi-chevron-up" v-if="top2"></i>
                        <i class="bi bi-chevron-down" v-else></i>
                    </div>
                    <p class="content" v-if="top2">
                        Sending crypto to friends and family, and using crypto to pay for goods and services,
                        is easy once you get the hang of it.
                        Why would you want to send crypto instead of cash? Since crypto is digital, sending
                        crypto can be as easy as sending an email. Crypto also doesn't have any physical
                        borders the way dollars, pesos, or euros do, so you can send crypto to friends, family,
                        or merchants overseas as easily as sending it to someone sitting next to you. Lastly,
                        you can send crypto without sharing your personal or banking info, making it more
                        secure.
                        To send crypto, you'll need the recipient's wallet address. A wallet address is a long
                        string of characters, similar to a bank account number, that identifies where the
                        crypto should go.
                        Since crypto wallet addresses are long, they're often shown as a QR code that you
                        can scan in your crypto app.
                        Once you have the wallet address, you just need to open your crypto wallet, enter
                        the wallet address, select how much crypto you want to send, and you're done.
                        There's usually a small fee to send crypto, called the “gas fee”, but this fee is often
                        much lower than other methods like wire transfers or Western Union.
                    </p>
                    <div v-else></div>
                </div>
                <div class="item">
                    <div class="top top1" @click="top3 = !top3">
                        <p class="que">Where to buy Bitcoin </p>
                        <i class="bi bi-chevron-up" v-if="top3"></i>
                        <i class="bi bi-chevron-down" v-else></i>
                    </div>
                    <p class="content" v-if="top3">
                        Some of the most common places to buy Bitcoin are through exchanges or trading apps. These accept
                        bank wire transfer or card, which makes purchasing BTC convenient and relatively quick compared to
                        other
                        methods.
                        If you're unsure which exchange might be right for you, please review our list of the best crypto
                        exchanges for 2023 to help you decide.
                    </p>
                    <div v-else></div>
                </div>
                <div class="item">
                    <div class="top top1" @click="top4 = !top4">
                        <p class="que">How crypto taxes work?</p>
                        <i class="bi bi-chevron-up" v-if="top4"></i>
                        <i class="bi bi-chevron-down" v-else></i>
                    </div>
                    <p class="content" v-if="top4">
                        Crypto is considered a digital asset, and the IRS treats it generally like
                        stocks, bonds, and other capital assets. Like these assets, the money you gain
                        from crypto is taxed at different rates, either as capital gains or as income, depending on
                        how you got your crypto and how long you held on to it.
                        If you're a U.S. taxpayer, you're probably used to seeing your federal and state
                        income tax deducted from your pay stubs. The crypto you receive as income (like
                        mining, staking, and rewards) is also subject to these same income taxes, which often
                        won't be deducted or withheld. When you report your earnings, you'll generally owe
                        according to the income tax rate appropriate to your tax bracket. Word of caution: If
                        you've earned a lot from crypto activity, it might affect what tax bracket you're in and
                        you may end up paying a higher tax rate on some of your earnings.
                    </p>
                    <div v-else></div>
                </div>
                <div class="item">
                    <div class="top top1" @click="top5 = !top5">
                        <p class="que">Why have a self-custody wallet?</p>
                        <i class="bi bi-chevron-up" v-if="top5"></i>
                        <i class="bi bi-chevron-down" v-else></i>
                    </div>
                    <p class="content" v-if="top5">
                        In addition to being in full control of the
                        security of your crypto, you can also access more advanced crypto activities
                        like yield farming, staking, lending, borrowing, and more.
                    </p>
                    <div v-else></div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
main {
    position: relative;
    color: #333;
    padding: 50px;

    @media(max-width: 600px) {
        padding: 50px 30px;
    }

    div.container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 30px;
        max-width: 1441px;
        margin: auto;

        @media(max-width: 600px) {
            grid-template-columns: 1fr;
        }

        div.ms {
            h2 {
                font-size: 32px;
                line-height: 1.2;
            }

            p {
                font-size: 20px;
                margin: 20px 0px 10px;
            }

            button {
                height: 44px;
                padding: 0px 30px;
                margin: 20px 0px 0px;
                border-radius: 22px;
                background-color: #c76300;
                border: none;
                color: #fff;
            }
        }

        div.item {
            border-bottom: 1px solid #fff4;
            height: fit-content;
            padding: 10px 0px;
            margin-bottom: 20px;

            div.top {
                display: flex;
                justify-content: space-between;
                gap: 20px;

                p {
                    font-size: 20px;
                    font-weight: 600;
                }
            }

            p.content {
                border-radius: 10px;
                padding: 10px 0px;
                margin: 5px 0px;
                line-height: 1.6;
                font-size: 18px;
            }
        }
    }
}
</style>