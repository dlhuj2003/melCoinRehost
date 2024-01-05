<script setup>
import { ref } from 'vue'
const active = ref(true)
</script>

<template>
    <main>
        <div class="main">
            <div class="notifications">
                <div class="status">
                    <button class="active" v-if="active">Active</button>
                    <button class="inactive" v-else>Inactive</button>
                </div>
                <router-link to="/profile#notification">
                    <i class="bi bi-bell-fill"></i>
                </router-link>
                <img src="@/assets/logo.png" alt="">
            </div>
        </div>
    </main>
</template>
<style scoped lang="scss">
main{
    height: 60px;
    padding: 0px 30px;
    display: flex;
    align-items: center;
    background-color: #FFF !important;
    position: sticky;
    top: 0;
    box-shadow: 0px 2px 20px #3331;
    overflow: hidden;
    z-index: 555;
    div.main{
        display: flex;
        justify-content: flex-end;
        width: 100%;
        @media(max-width: 710px){
            justify-content: flex-start;
        }
    div.notifications{
        display: flex;
        gap: 15px;
        align-items: center;
        div.status{
            button{
                height: 20px;
                font-size: 10px;
                padding: 0px 10px;
                border: none;
                border-radius: 4px;
            }
            button.active{
                background-color: #bfb;
                color: #090;
            }
            button.inactive{
                background-color: #fbb;
                color: #900;
            }
        }
    }
    div.notifications{
        display: flex;
        gap: 10px;
    display: flex;
    align-items: center;
        img{
            width: 30px;
            height: 30px;
            background-color: #000;
            border-radius: 50%;
        }
    }
    }
}
</style>