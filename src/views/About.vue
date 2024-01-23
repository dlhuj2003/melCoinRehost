<script setup>
import { ref } from 'vue';
import { useRouter } from "vue-router";
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
    <main>
        <Header />
        <section class="one">
            <div class="container">
                <div class="w50">
                    <h3>About us</h3>
                    <h1>
                        Mellcoin is mission-driven to
                        ensure that every product
                        and service we offer can
                        contribute to our clients'
                        investment success.
                    </h1>
                    <h2>
                        Mellcoin isn't owned by shareholders.
                        It's owned by the people who invest in
                        our funds.Our structure drives us
                        toward our goal of offering the best
                        possible advice, investments, and
                        retirement services, as well as insights
                        that clarify investing.
                    </h2>
                </div>
            </div>
        </section>
        <section class="one custody">
            <div class="container">
                <div class="w50">
                    <h2>A client-focused approach</h2>

                    <video width="100%" autoplay="true" src="" controls>
                    </video>
                    <p class="small">
                        Molly Concannon, head of product strategy, and Matthew
                        Brancato, head of Institutional Investor Services, discuss how we
                        develop our diverse investment lineup.
                    </p>
                </div>
                <div class="w50">
                    <p class="title">Video transcript:</p>
                    <ul>
                        <li>
                            Matthew Brancato: An enduring investment idea is one that over the long
                            term improves the chances that an investor will be able to realize their goals.
                            It's good to just start and think about what it is that makes a product
                            enduring in nature and how that separates from the idea of a fad.
                        </li>
                        <li>
                            Molly Concannon: The questions we ask when launching a product are, one is
                            there an enduring investment merit? We want to launch products that have
                            proven to have and if there's economic rationale for real returns. Two.
                            We look at our business strategy. Three, we look at the needs and preferences of
                            our clients, and four we look at our investment capabilities.
                        </li>
                        <li>
                            Matthew Brancato:
                            It's one of the areas that we spend a lot of time on is
                            the existing product lineup. So we're not always looking for the next big thing
                            that we think is going to generate a lot of profitability for the firm because
                            that's not how we're organized. That's not who we are.
                        </li>
                        <li>
                            So from a philosophical standpoint, we really try to keep client needs and
                            preferences at the center of product design, and we carry that all the way
                            through how we steward assets in the context of the ongoing management
                            of our product lineup.
                        </li>
                        <li>
                            There are aspects of our product lineup that have not changed and will not
                            change. Things like diversification, low cost, focus on the long-term areas like
                            that are really core to who we are and will not change.
                        </li>
                        <li>
                            Molly Concannon:
                            It's what will make our client successful and given
                            Mellcoin structure and our alignments with clients. If our clients are
                            successful, that will make mellcoin successful. That's a real differentiator
                            when you compare mellcoin to competitors.
                        </li>
                    </ul>
                    <i class="bi bi-chevron-down"></i>
                </div>
            </div>
        </section>
        <section class="bubbles">
            <h1>Low-cost
                products
                and services
                to meet
                long-term
                investment
                goals</h1>
            <div class="bubbles">
                <div class="bubble">
                    <h2>Investor-first advisory services</h2>
                    <p>
                        Investors' long-term success is tied to both the
                        investments they use and the advice they receive. We
                        believe advice should be tailored to investors' needs, put
                        their interests first, and be offered at a reasonable and
                        transparent all-in fee.
                    </p>
                </div>
                <div class="bubble">
                    <h2>High-quality investments</h2>
                    <p>
                        Because our investors are our owners, we can focus on
                        the long term rather than quarterly results. And we can
                        consistently pass along economies of scale and lower the
                        cost of investing, so our owners keep more of their
                        potential returns.
                    </p>
                </div>
                <div class="bubble">
                    <h2>Effective retirement services and tools</h2>
                    <p>
                        Mellcoin helps individuals, institutions, and financial
                        advisors meet the challenges of retirement. We help
                        individuals with everything from getting started on the
                        road to retirement to generating sustainable income once
                        they get there. We offer companies world-class
                        retirement plans to help them attract and retain
                        employees. And we help advisors serve the retirement
                        needs of individuals and small businesses.
                    </p>
                </div>
                <div class="bubble">
                    <h2>Insights that clarify</h2>
                    <p>
                        mellcoin shares its perspectives through both long-form
                        research, which is generally intended for investment
                        professionals, and short-form commentaries intended for
                        a wide audience of investors and industry participants.
                        We seek, through our communications, to help investors
                        make better investment decisions, to provide context on
                        economic and financial market trends, and to be an
                        effective advocate for improvements in the investment
                        industry.
                    </p>
                </div>
            </div>
        </section>
        <section class="one note">
            <div class="container low">
                <div class="w50">
                    <p>
                        Mellcoin is investor-owned, meaning the fund shareholders own the funds, which in turn own Mellcoin.
                    </p>
                </div>
                <div class="w50">
                    <ul>
                        <li>Notes: </li>
                        <li>
                            Mellcoin's advice services are provided by Mellcoin Advisers, Inc. (“MAI”), a registered
                            investment advisor, or by Mellcoin National Trust Company (“MNTC”), a federally chartered,
                            limited-purpose trust company.
                        </li>
                        <li>

                            The services provided to clients will vary based upon the service selected, including
                            management, fees, eligibility, and access to an advisor. Find MAI's Form CRS and each program's
                            advisory brochure for an overview.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="found">
            <p class="logo">mell<span>C</span>oin</p>
            <p class="txt">
                Mellcoin is a trusted name in
                investing. Founded since 1982,
                ventured into crypto trading in
                2013, and we've put investors first.
            </p>
        </section>
        <Footer />
    </main>
</template>

<style scoped lang="scss">
section.bubbles {
    background-color: #ffe6cc;
    padding: 20px 50px;

    h1 {
        text-align: center;
        margin: 50px auto 30px;
    }

    @media(max-width: 600px) {
        padding: 20px 20px;
    }

    div.bubbles {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        margin: 0px auto 40px;
        width: 100%;
        max-width: 1100px;

        @media(max-width: 600px) {
            grid-template-columns: 1fr;
        }

        div.bubble {
            background-color: #FFF;
            padding: 20px;
            border-radius: 10px;

            h2 {
                color: #6d3600;
                font-size: 22px;
            }

            p {
                line-height: 1.5;
            }
        }
    }
}

section.one {
    height: fit-content;
    padding: 0px 50px;
    background-color: #ff4500;
    color: #fff;


    @media(max-width: 991px) {
        padding: 0px 30px;
    }

    div.container.low {
        @media(max-width: 991px) {
            flex-direction: row;
            gap: 10px;
            justify-content: flex-start;
            align-items: flex-start;

            div.w50 {
                text-align: left;
            }
        }

        @media(max-width: 710px) {
            flex-direction: column;
        }
    }

    div.container {
        position: relative;
        display: grid;
        grid-template-columns: 3fr 2fr;
        max-width: 1366px;
        margin: auto;
        align-items: center;
        padding: 80px 0px;

        @media(max-width: 991px) {
            display: flex;
            flex-direction: column-reverse;
            padding: 30px 0px 50px;
        }

        div.w50 {
            position: relative;
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: left !important;

            h1 {
                font-size: 42px;
                line-height: 1.5;
            }

            h2 {
                color: #fff;
                font-size: 24px;
                font-weight: 400;
                line-height: 1.5;
                margin-top: 20px;
            }


            @media(max-width: 991px) {
                text-align: center;
            }

        }

        div.w50.img {
            background-image: url(@/assets/custody.jpg);
            height: 350px;
            background-size: cover;
            margin-right: 20px !important;
            width: auto;

            @media(max-width: 991px) {
                margin-right: 0px;
                width: 100%;
            }

            @media(max-width: 600px) {
                height: 250px;
            }
        }

        h2 {
            color: #111;
            font-size: 32px;
            max-width: 550px;
            z-index: 2;
            position: relative;

            @media(max-width: 991px) {
                font-size: 24px;
                margin: auto;
            }

            span {
                color: #FF8000;
                font-size: 36px;
                text-transform: uppercase;

                @media(max-width: 600px) {
                    font-size: 28px;
                }
            }
        }

        p {
            color: #333;
            font-size: 24px;
            max-width: 550px;

            @media(max-width: 991px) {
                font-size: 20px;
                margin: auto;
            }
        }

        p.small {
            font-size: 16px;
            line-height: 1.5;
        }

        button {
            height: 44px;
            border: none;
            background: linear-gradient(120deg, #FF8000 0%, #ac5804 100%);
            color: #fff;
            padding: 0px 30px;
            border-radius: 22px;
            margin-top: 30px;
        }
    }
}

section.one.custody {
    div.container {
        @media(max-width: 991px) {
            flex-direction: column !important;
            gap: 30px;

            p,
            li,
            p.title {
                text-align: left !important;
            }
        }


        div.w50 {

            video {
                width: 100%;
                padding: 20px;
            }

            p.title {
                text-align: left !important;
                color: #fff;
                margin: 0px 0px 10px;
            }

            ul {
                list-style: none;
                height: 400px;
                overflow-y: scroll;

                li {
                    margin: 0px 0px 20px;
                }
            }

            ::-webkit-scrollbar {
                width: 10px;
            }

            /* Track */
            ::-webkit-scrollbar-track {
                box-shadow: inset 0 0 5px grey;
                border-radius: 10px;
            }

            /* Handle */
            ::-webkit-scrollbar-thumb {
                background: rgb(151, 151, 151);
                border-radius: 30px;
            }
        }

        p.small {
            color: #fff;
            margin: 30px 0px 0px;
        }
    }
}

section.two div.container {
    position: relative;
    z-index: 888;
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: center;
    max-width: 800px;
    margin: auto;
    padding: 80px 50px;

    @media(max-width: 991px) {
        padding: 0px 30px;
        text-align: left;

        h1 {
            font-size: 42px !important;
            line-height: 1.2;
        }
    }

    @media(max-width: 600px) {
        h1 {
            font-size: 30px !important;
        }
    }

    h1 {
        font-size: 48px;
        color: #333;
    }

    p {
        color: #333;
        font-size: 18px;
    }

    button {
        height: 44px;
        color: #fff;
        background: linear-gradient(120deg, #FF8000 0%, #ac5804 100%);
        border: none;
        border-radius: 28px;
        width: fit-content;
        padding: 0px 30px;
        margin: 0px auto 30px;

        @media(max-width: 991px) {
            margin: 0px 0px 50px;
        }
    }
}

section.count {
    background: #000;
    color: #fff;
    padding: 80px 20px 100px;

    div.contain {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 10px;
        margin: auto;
        max-width: 1280px;

        @media(max-width: 600px) {
            grid-template-columns: 1fr;
            gap: 50px;
        }

        div.item {
            text-align: center;

            h1 {
                color: #ffa600;
                font-size: 32px;
                letter-spacing: 2px;
                line-height: 1.8;
            }

            p {
                font-size: 14px;
            }
        }

    }
}

section.note {
    p {
        color: #fff !important;
    }

    ul {
        list-style: none;

        li {
            margin: 0px 0px 20px;
        }
    }
}

section.found {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 30px;
    max-width: 800px;
    margin: 30px auto;
    gap: 20px;
    @media(max-width: 450px){
    grid-template-columns: 1fr;
    margin: 10px auto;
    }

    p.logo {
        font-size: 32px;
        font-weight: 600;

        span {
            font-size: 40px;
            color: #ff4500;
        }
    }
}</style>