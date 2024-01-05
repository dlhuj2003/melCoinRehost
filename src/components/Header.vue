<template>
    <main>
        <div class="main">

            <router-link to="/">
                <img src="@/assets/logo.png" alt="">
            </router-link>
            <ul class="desktop">
                <li>
                    <router-link to="/">Explore</router-link>
                </li>
                <li>
                    <router-link to="/learn">Learn</router-link>
                </li>
                <li>
                    <router-link to="/about">About</router-link>
                </li>
                <li>
                    <router-link to="/">Contact us</router-link>
                </li>
            </ul>
            <div class="buttons desktop">
                <router-link to="/login"><button class="secondary">Sign in</button></router-link>
                <router-link to="/signup"> <button class="primary">Sign up</button></router-link>
            </div>
            <div class="mobe">
                <div class="mobile" v-if="mobileMenu">
                    <router-link to="/">
                        <img src="@/assets/logo.png" alt="">
                    </router-link>
                    <ul>
                        <li>
                            <router-link to="/">Explore</router-link>
                        </li>
                        <li>
                            <router-link to="/learn">Learn</router-link>
                        </li>
                        <li>
                            <router-link to="/about">About</router-link>
                        </li>
                        <li>
                            <router-link to="/contact">Contact us</router-link>
                        </li>
                    </ul>
                    <div class="buttons">
                        <router-link to="/login"><button class="secondary">Sign in</button></router-link>
                        <router-link to="/signup"> <button class="primary">Sign up</button></router-link>
                    </div>
                </div>
                <div v-else>
                </div>
            </div>
        </div>

        <div class="toggle">
            <i class="bi bi-x" v-if="mobileMenu" @click="mobileMenu = false"></i>
            <i class="bi bi-list" v-else @click="mobileMenu = true"></i>
        </div>
    </main>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
const mobileMenu = ref(false);

</script>

<style scoped lang="scss">
div.mobe {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}

@media(max-width: 991px) {
    .desktop {
        display: none !important;
    }

    div.mobe {
        display: block;
    }

    div.toggle {
        display: block !important;
    }
}

div.toggle {
    display: none;
}

i {
    color: #FF8000;
    font-size: 36px;
    position: absolute;
    right: 30px;
    top: 10px;
    z-index: 998;
    cursor: pointer;
}

div.mobile {
    display: block;
    position: absolute;
    top: 0;
    padding: 20px;
    background-color: #fff;
    width: 100%;

    ul {
        display: grid !important;
        gap: 20px !important;
        margin-bottom: 20px;
    }
}

main {
    background: #fff;
    z-index: 999 !important;
    position: sticky;
    top: 0;
    padding: 0px 50px;
    box-shadow: 0px 5px 10px #3331;

    @media(max-width: 600px) {
        padding: 0px 20px;
    }
}

div.main {
    background: none;
    position: relative;
    display: flex;
    justify-content: space-between;
    max-width: 1366px;
    margin: auto;
    height: 70px;
    align-items: center;

    img {
        width: 150px;
    }

    ul {
        list-style: none;
        display: flex;
        gap: 30px;

        li {
            color: #FF8000;
        }
    }

    div.buttons {
        display: flex;
        gap: 10px;

        button {
            height: 44px;
            border-radius: 22px;
            font-size: 13px;
            padding: 0px 20px;
            color: #fff;
            cursor: pointer;
        }

        button.primary {
            background: linear-gradient(120deg, #FF8000 0%, #ac5804 100%);
            border: none;
        }

        button.secondary {
            border: 2px solid #FF8000;
            background-color: transparent;
            color: #FF8000;
        }
    }
}
</style>