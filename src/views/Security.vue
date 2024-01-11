<script setup>
import { ref } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
    <Header />
    <main>
        <div class="sec">
            <section class="sec">
                <div class="w50 left">
                    <p class="top">TRUST & SECURITY</p>
                    <h1>Security at Mellcoin</h1>
                    <p>Keeping your accounts secure is our priority. Partnership is the key.</p>
                </div>
                <div class="w50 right"></div>
            </section>
        </div>
        <section class="protect">
            <div>
                <h1>How we protect you</h1>
                <p>
                    Investors come first in everything we do, including our security features. Learn how we protect you and
                    what
                    you can do to keep your accounts safe.
                </p>
                <h1>Website security</h1>
                <p>
                    Our website employs various security features—visible and invisible—to help keep you safe.
                </p>
                <ul>
                    <li>Encryption</li>
                    <li>SSL (Secure Sockets Layer) validation</li>
                    <li>Username and password protection</li>
                    <li>"Time-out" feature to protect user information.</li>
                    <li>Masking digits to protect bank account information.</li>
                </ul>
                <p>
                    We also have a redundant data center in case one data center becomes unavailable, and test attack models
                    within Mellcoin's network.<br><br>
                    Note: A security alert could indicate that either the date on your computer is incorrect or you're using
                    an
                    outdated version of your web browser.
                </p>
            </div>
            <div>
                <h1>In addition to these safeguards, Vanguard will never:</h1>
                <ul>
                    <li>
                        Send an unsolicited email asking you to respond with your personal account information (e.g.,
                        username, password, or Social Security number).
                    </li>
                    <li>
                        Ask for your web password in an email or request your personal information over the phone or by
                        U.S.mail. We may ask for personal information if you've contacted us to report you're having trouble
                        logging on to your Mellcoin account(s).
                    </li>
                </ul>
                <h1>Disclaimer</h1>
                <p>
                    We'll never call you and ask for your password or logon credentials, your Social Security number, or a
                    security code you've received via text or automated call. You should never disclose this information to
                    anyone over the phone. If you suspect someone has gained access to this information, contact our fraud
                    team immediately.
                </p>
            </div>
        </section>
    </main>
    <Footer />
</template>
<style scoped lang="scss">
section.sec {
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 1441px;
    margin: auto;

    @media(max-width: 600px) {
        grid-template-columns: 1fr;
    }

    div.left {
        background-color: rgb(223, 252, 253);
        padding: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        @media(max-width: 600px) {
            padding: 50px 30px;
        }

        p {
            font-size: 18px;
            line-height: 1.5;
        }

        p.top {
            letter-spacing: 2px;
        }

        h1 {
            font-size: 60px;

            @media(max-width: 991px) {
                font-size: 40px;
            }
        }
    }

    div.right {
        background-image: url(@/assets/oldpicture2.jpeg);
        background-repeat: no-repeat;
        background-size: cover;
        height: 500px;
        background-position: center;

        @media(max-width: 991px) {
            height: 400px;
        }
    }
}

section.protect {
    padding: 50px;
    max-width: 1441px;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    @media(max-width: 600px) {
        grid-template-columns: 1fr;
        padding: 50px 30px;
    }

    h1 {
        font-size: 28px;
        margin: 20px 0px 20px;
    }

    p,
    li {
        font-size: 18px;
        line-height: 1.5;
    }

    li {
        margin-left: 30px;
        margin-bottom: 10px;
    }
}</style>