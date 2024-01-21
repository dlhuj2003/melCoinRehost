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
        @media(max-width: 600px){
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
        @media(max-width: 600px){
            grid-template-columns: 1fr;
        }
        div{
            padding: 80px 20px;
            display: flex;
            gap: 10px;
            flex-direction: column;
            
        @media(max-width: 600px){
            padding: 30px 20px;
        }
        }
        h2{
            font-size: 28px;
            max-width: 400px;
        }
        p{
            max-width: 400px;
        }
        button{
            height: 44px;
            border-radius: 22px;
            max-width: 60%;
            padding: 0px 20px;
            min-width: 200px;
            
        @media(max-width: 600px){
            max-width: 80%;
        }
        }
        button.primary{
            border: none;
            background-color: #FF4500;
            color: #fff;
        }
    }
}
</style>