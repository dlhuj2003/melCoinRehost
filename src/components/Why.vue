<script setup>
import { ref } from 'vue'
import Slide from '@/components/Slide.vue'
</script>

<template>
    <main>
        <div class="main grid">
            <div class="w50">
                <div class="bk"></div>
            </div>
            <div class="slide">
                <Slide />
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
main {
    div.main {
        grid-template-columns: 3fr 2fr;
        padding: 20px 50px;
        gap: 0px;
        margin: 0px auto 50px;
        max-width: 1441px;

        @media(max-width: 600px){
            grid-template-columns: 1fr;
            padding: 20px 30px;
            div.w50{
                margin-bottom: 20px;
                div.bk{
                width: calc(100vw - 70px) !important;
            }
            
            }
        }

        div.w50 {
            display: flex;
            align-items: center;

            div.bk {
                height: 100%;
                width: 90%;
                min-height: 300px;
                background-image: url(@/assets/chart.jpg);
                background-size: cover;
                background-repeat: no-repeat;
                border-radius: 10px;
                background-position: right;
            }
        }
        
    }
}
</style>