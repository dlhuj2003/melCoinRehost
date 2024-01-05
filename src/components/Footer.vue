<script setup>
import { ref } from 'vue'
</script>

<template>
    <main>
        <div class="container">
            <div class="foot">
                <router-link to="/">
                    <img src="@/assets/logo.png" width="150" alt="">
                </router-link>
                <p class="tag">...the Future of Cryptocurrency</p>
                <p>Phone: +012345678</p>
                <p>Email: melcoin@email.com</p>
            </div>
            <div class="grid">
                <div>
                    <p class="title">Useful links</p>
                    <router-link to="/terms">
                    Terms and conditions
                </router-link>
                <router-link to="/">
                    Blogs
                </router-link>
                <router-link to="/">
                    About
                </router-link>
                <router-link to="/">
                    Contact us
                </router-link>
                </div>
                <div class="soc">
                    <p class="title">Conect with us</p>
                    <div class="social">
                        <i class="bi bi-telegram"></i>
                        <i class="bi bi-whatsapp"></i>
                        <i class="bi bi-facebook"></i>
                        <i class="bi bi-instagram"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="copy">
            <p>MellCoin &copy; 2023. All rights reserved.</p>
        </div>
    </main>
</template>

<style scoped lang="scss">
main{
    position: relative;
    background-color: #000000;
    color: #fff;
    padding: 50px 50px 10px;
    div.foot{
        p{
            line-height: 1.5;
            font-size: 14px;
            color: #eee;
        }
    }
    div.copy{
        margin: 10px auto 0px;
        p{
            font-size: 12px;
            color: #999;
            border-top: 1px solid #aaa;
            padding: 10px 0px 0px;
        }
    }
    @media(max-width: 600px){
        padding: 50px 20px 10px;
    }
    div.container{
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 30px;
        max-width: 1441px;
        margin: auto;
        @media(max-width: 600px){
            grid-template-columns: 1fr;
        }
    }
    p.tag{
        font-style: italic;
        font-size: 12px;
        letter-spacing: 1.5px;
    }
    div.grid{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        div{
            display: grid;
            p.title{
                font-size: 20px;
                font-weight: 600;
            }
            a{
                font-size: 14px;
                line-height: 2;
                color: #aaa !important;
            }
            div.social{
                display: flex;
                gap: 10px;
                i{
                    font-size: 20px;
                }
            }
        }
    }
    div.soc{
        height: fit-content;
    }
}
</style>