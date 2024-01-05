<script setup>
import { ref } from 'vue';
</script>

<template>
    <main>
        <div class="container">
            <div>
                <img src="@/assets/shield.png" alt="">
            </div>
            <div>
                <h3 class="yellow">Experience superior trading conditions</h3>
                <p class="m">View our impressive trading statistics and find out more about how we execute trading orders.</p>
                <div class="category">
                    <div>
                        <h2 class="yellow">14ms</h2>
                        <p>Ultra-fast <br>Execution</p>
                    </div>
                    <div>
                        <h2 class="yellow">1:500</h2>
                        <p>Maximum <br>Leverage</p>
                    </div>
                    <div>
                        <h2 class="yellow">2100+</h2>
                        <p>Trading <br>Instruments</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
main{
    position: relative;
    background-color: #000;
    height: fit-content;
    div.container{
        max-width: 1366px;
        margin: auto;
        padding: 50px 50px 0px;
        display: flex;
        gap: 80px;
        @media(max-width: 991px){
            display: grid;
            gap: 30px;
            padding: 30px 30px 0px;
            margin-top: 30px;
            &:last-child h3.yellow, p.m, div.category{
                position: relative;
                top: -100px;
            }
        }
        &:first-child{
            position: relative;
            min-height: 400px;
            text-align: center;
            img{
                position: relative;
                top: -100px;
                width: 105%;
                max-width: 300px;
                text-align: center;
            }
        }
        &:last-child{
            color: #fff;
            h3, p{
                max-width: 600px;
                text-align: left;
            }
            .yellow{
                color: #fff;
                font-size: 36px;
                text-align: left;
            }
            div.category{
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                margin: 30px 0px 0px;
                gap: 20px;
                @media(max-width: 600px){
                    grid-template-columns: 1fr;
                    div{
                        width: 100% !important;
                        display: flex;
                        gap: 20px;
                        justify-content: space-between;
                        p{
                            text-align: right;
                        }
                    }
                }
                div{
                    border-left: 2px solid #fff;
                    border-bottom: 2px solid #fff;
                    width: fit-content;
                    padding: 0px 10px 20px 20px;
                }
            }
        }
    }
}
</style>