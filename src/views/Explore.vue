<script setup>
import { ref } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
    <Header />
    <main>
        <section class="one">
            <div class="one">
                <div class="w50">
                    <h1>
                        At Mellcoin
                        you're more than
                        just an investor,
                        you're an owner.
                    </h1>
                    <p>
                        Mellcoin isn't owned by public
                        shareholders. It's owned by the
                        people who invest in our funds.*<br>
                        Our owners have access to
                        personalized financial advice,
                        high-quality investments,
                        retirement tools, and relevant
                        market insights that help you
                        build a future for those you love.
                    </p>
                </div>
                <div class="hov">
                    <p class="title">Become an owner</p>
                    <ul>
                        <li>Enroll in your IRA retirement plan</li>
                        <li>Child support & College plan</li>
                        <li>Non profit organizations plan</li>
                        <li>Professional financial advisors</li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="two">
            <h1>The Value of Ownership</h1>
            <div class="container">
                <div class="item">
                    <p class="title">Aligned interests</p>
                    <p class="txt">Because our investors are our owners, our interests are
                        uniquely aligned, allowing us to focus on you and your goals.</p>
                </div>
                <div class="item">
                    <p class="title">Greater conviction</p>
                    <p class="txt">Because our investors are our owners, we act with conviction
                        on the investment themes that are important to you.</p>
                </div>
                <div class="item">
                    <p class="title">Long-term perspective</p>
                    <p class="txt">Because our investors are our owners, we can focus on the
                        long term rather than quarterly results.</p>
                </div>
                <div class="item">
                    <p class="title">Low costs</p>
                    <p class="txt">Because our investors are our owners, it enables us to
                        consistently pass along economies of scale and lower the cost of investing, so you keep more of your
                        returns.</p>
                </div>
            </div>
        </section>
    </main>
    <Footer />
</template>

<style scoped lang="scss">
section.one {
    background-image: url(@/assets/oldparents1.jpg);
    background-repeat: no-repeat;
    background-size: cover;

    div.one {
        background-color: #000a;
        padding: 50px;
        color: #fff;
    @media(max-width: 600px){
        padding: 30px;
    }

        h1 {
            font-size: 60px;
            @media(max-width: 600px){
                font-size: 40px;
            }
        }

        p {
            font-size: 20px;
            line-height: 1.4;
            @media(max-width: 600px){
                margin: 20px 0px;
            }
        }

        div.w50 {
            width: 50%;
            @media(max-width: 600px){
                width: 100%;
            }
        }

        div.hov {
            position: fixed;
            top: 150px;
            right: 50px;
            background-color: #fff;
            color: #333;
            padding: 30px;
            z-index: 0;
            width: fit-content;
            @media(max-width: 600px){
                position: relative;
                top: 0;
                right: 0;
                left: 0;
                margin: 10px 0px 0px;
            }

            p.title {
                font-size: 24px;
                margin-bottom: 20px;
            }

            ul {
                list-style: none;

                li {
                    margin-bottom: 20px;
                }
            }
        }
    }
}

section.two {
    background-color: aliceblue;
    z-index: 1;
    position: relative;
    padding: 50px;
    @media(max-width: 600px){
                padding: 30px;
            }

    h1 {
        font-size: 40px;
        @media(max-width: 600px){
                font-size: 32px;
            }
    }

    div.container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        margin-top: 20px;
        @media(max-width: 600px){
            grid-template-columns: 1fr;
        }
        div.item{
            p.title{
                font-weight: 600;
                font-size: 30px;
                @media(max-width: 600px){
                font-size: 26px;
            }
            }
        }
    }
}
</style>