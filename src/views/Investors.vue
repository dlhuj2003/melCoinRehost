<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router';
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
    <Header />
    <section class="one">
        <div class="container">
            <div class="left">
                <h1>Find the right path to your future</h1>
                <p>Get there on your own terms</p>
                <button>Plan with Mellcoin</button>
            </div>
            <div class="right">

            </div>
        </div>
    </section>
    <section class="two">
        <div class="container">
            <div class="left">
                <h2>Our number one goal is to help you reach yours</h2>
                <p>Securely access your account or create a new one using the appropriate link</p>
            </div>
            <div class="right">
                <button class="primary">Log in</button>
                <button class="secondary">Open an account</button>
                <a href="">Sign up for online account access</a>
            </div>
        </div>
    </section>
    <section class="three">
        <h1>Guiding you on your journey</h1>
        <div class="container">
            <div class="item">
                <div class="img">

                </div>
                <h3>Explore professional advice</h3>
                <p>We offer expert help at the low cost you'd expect from mellcoin</p>
            </div>
            <div class="item">
                <div class="img">

                </div>
                <h3>Is advice right for you?</h3>
                <p>Use our free guide to help see which advice option may be best for your financial journey</p>
            </div>
            <div class="item">
                <div class="img">

                </div>
                <h3>Do it on your own</h3>
                <p>Ready to plan your financial future? We have what you need to be a successful DIY investor</p>
            </div>
        </div>
    </section>
    <section class="four">
        <div class="container">
            <div class="left">
                <h2>You're in good company.</h2>
                <p>Our unique, investor-owned structure keeps us focused on your needs first. Your goals are always our
                    goals.</p>
                <a href="">See why we're different</a>
            </div>
            <div class="right">
                <div class="txt">
                    <p>Mellcoin is made up of more than 50 million investors, all with unique stories and individual goals.
                    </p>
                </div>
            </div>
        </div>
    </section>
    <Footer />
</template>

<style scoped lang="scss">
section.one {
    background-color: #ffe7eb;

    div.container {
        max-width: 1200px;
        margin: auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;

        @media(max-width: 600px) {
            grid-template-columns: 1fr;
        }

        div {
            padding: 20px;
        }

        div.left {
            display: flex;
            flex-direction: column;
            justify-content: center;

            h1 {
                font-size: 48px;
                max-width: 400px;
                font-weight: 600;
            }

            p {
                font-size: 24px;
                margin: 5px 0px 10px;
            }

            button {
                height: 44px;
                width: fit-content;
                padding: 0px 20px;
                border-radius: 22px;
                border: none;
                background-color: #ff4500;
                color: #fff;
            }
        }

        div.right {
            background-image: url(@/assets/cbannermobile.jpg);
            height: 400px;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }
    }
}

section.two {
    background-color: #eee;

    div.container {
        max-width: 1200px;
        margin: auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;

        @media(max-width: 600px) {
            grid-template-columns: 1fr;
        }

        div {
            padding: 80px 20px;
            display: flex;
            gap: 10px;
            flex-direction: column;

            @media(max-width: 600px) {
                padding: 30px 20px;
            }
        }

        h2 {
            font-size: 28px;
            max-width: 400px;
        }

        p {
            max-width: 400px;
        }

        button {
            height: 44px;
            border-radius: 22px;
            max-width: 60%;
            padding: 0px 20px;
            min-width: 200px;

            @media(max-width: 600px) {
                max-width: 80%;
            }
        }

        button.primary {
            border: none;
            background-color: #FF4500;
            color: #fff;
        }
    }
}

section.three {
    padding: 30px;

    h1 {
        margin: 20px auto;
        max-width: 1200px;
    }

    div.container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        max-width: 1200px;
        margin: 20px auto;
        gap: 20px;

        @media(max-width: 991px) {
            grid-template-columns: 1fr 1fr;
        }

        @media(max-width: 600px) {
            grid-template-columns: 1fr;
        }

        div.item {
            div.img {
                height: 250px;
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
            }
            &:first-of-type{
                div.img{
                background-image: url(@/assets/oldpicture2.jpeg);
                }
            }
            &:nth-of-type(2){
                div.img{
                background-image: url(@/assets/investment.jpg);
                }
            }
            &:nth-of-type(3){
                div.img{
                background-image: url(@/assets/childrenspics.jpg);
                }
            }

            h3 {
                margin: 10px 0px;
                font-size: 18px;
            }

            p {
                font-size: 14px;
            }
        }
    }
}

section.four {
    padding: 30px;

    div.container {
        max-width: 900px;
        margin: auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        @media(max-width: 600px){
            grid-template-columns: 1fr;
        }
        div{
            p{
                width: 80%;
                max-width: 280px;
                line-height: 1.5;
            }
        }
        div.left{
            h2{
                margin: 0px 0px 20px;
            }
            p{
                margin: 0px 0px 10px;
            }
            a{
                color: #FF4500;
            }
        }
        div.right{
            background-image: url(@/assets/oldpicture2.jpeg);
            height: 250px;
            background-size: cover;
            background-position: center;
            div.txt{
                background-color: #0007;
                height: 100%;
                display: flex;
                align-items: flex-end;
                padding: 30px;
                p{
                    color: #FFF;
                }
            }
        }
    }
}</style>