<script setup>
import { ref } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
    <Header />
    <main>
        <section class="landing">
            <div>
                <h4>WELCOME TO mellcoin</h4>
                <h1>Learn about money</h1>
                <h4>
                    Looking for simple answers to life's complex financial questions? Welcome to our online learning
                    center—your new go-to destination for quick-hit, easy-to-understand education that will help you stay on
                    top of your financial game!
                </h4>
            </div>
        </section>
        <nav>
            <div class="menu">
                <a href="#featured">Featured</a>
                <a href="#financial">Financial planning</a>
                <a href="#saving">Saving for retirement</a>
                <a href="#living">Living in retirement</a>
            </div>
        </nav>
        <div class="access">
            <div class="container">
                <div class="left">
                    <p>Access secure features</p>
                    <button>LOG ON</button>
                </div>
                <div class="right">
                    <p>Not registered for online access? <a href="/signup">Let's go</a></p>
                    <p>Not enrolled in your plan? <a href="/signup">Let's get started</a></p>
                    <p>Already have online access to a mellcoin account? Use that username and password.</p>
                </div>
            </div>
        </div>
        <section class="three" id="featured">
            <h1>Featured</h1>
            <div class="grid">
                <div class="item">
                    <div class="img one"></div>
                    <div class="txt">
                        <h2>Financial planning</h2>
                        <p>
                            How do you feel about your ability to handle today's financial needs while also saving for the
                            future? No matter what your answer is, creating financial goals can help you know what you are
                            trying to accomplish and where you stand. You'll also be able to identify the steps you need to
                            take to successfully meet those goals. And that can give you the peace of mind that comes with
                            financial wellness.
                        </p>
                    </div>
                </div>
                <div class="item">
                    <div class="img two"></div>
                    <div class="txt">
                        <h2>Saving for retirement</h2>
                        <p>
                            As you get closer to age 73 and retirement, you've probably heard about required minimum
                            distributions (RMDs). You may have also wondered how RMDs will affect you and your retirement
                            savings. If you're familiar with the basics of RMDs, now is the time to start planning for them.
                            This article provides helpful information and tips to get you started.
                        </p>
                    </div>
                </div>
                <div class="item">
                    <div class="img three"></div>
                    <div class="txt">
                        <h2>Living in retirement</h2>
                        <p>
                            Retiring and relocating typically unlocks $100,000 in home equity for retirement, mellcoin
                            research finds.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="three" id="financial">
            <h1>Financial planning</h1>
            <div class="grid">
                <div class="item">
                    <div class="img one1"></div>
                    <div class="txt">
                        <h2>Savings</h2>
                        <p>
                            Saving money is a fundamental aspect of financial planning, forming the cornerstone of a secure
                            financial future. Whether you're saving for a rainy day, a major purchase, or your retirement,
                            cultivating a habit of saving is essential. In this article, we'll explore the importance of
                            saving, different types of savings goals, and strategies to help you save effectively.
                        </p>
                    </div>
                </div>
                <div class="item">
                    <div class="img two1"></div>
                    <div class="txt">
                        <h2>Investment</h2>
                        <p>
                            Investing is a powerful tool for growing your wealth and achieving your financial goals. Unlike
                            saving, which preserves the value of money, investing aims to increase its value over time. By
                            putting your money to work in various financial instruments such as stocks, bonds, and mutual
                            funds, you have the potential to earn returns that outpace inflation and help you build a more
                            prosperous future.
                        </p>
                    </div>
                </div>
                <div class="item">
                    <div class="img three1"></div>
                    <div class="txt">
                        <h2>Budgeting</h2>
                        <p>
                            Budgeting is crucial for effective financial planning, including retirement planning. It
                            involves tracking income and expenses, differentiating between needs and wants, setting
                            financial goals, allocating funds, and monitoring and adjusting the budget regularly. Budgeting
                            helps manage finances efficiently, save for retirement, and achieve financial goals.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="three" id="saving">
            <h1>Saving for retirement</h1>
            <div class="grid">
                <div class="item">
                    <div class="img one2"></div>
                    <div class="txt">
                        <h2>Why should you plan for retirement?</h2>
                        <p>
                            Whether you opt for an employer-sponsored 401(k) plan, an individual retirement account (IRA),
                            or other retirement savings vehicles, the important thing is to start saving now. With the power
                            of compounding on your side, even small contributions can grow significantly over time. Don't
                            wait until tomorrow; start saving for retirement today and take control of your financial
                            future.
                        </p>
                    </div>
                </div>
                <div class="item">
                    <div class="img two2"></div>
                    <div class="txt">
                        <h2>How to plan for retirement?</h2>
                        <p>
                            Calculate the gap between your retirement income goal and your current savings. Choose
                            investments that match your risk tolerance and time horizon. Regularly review and adjust your
                            plan as needed. Consider seeking advice from a financial advisor for a personalized retirement
                            plan.
                        </p>
                    </div>
                </div>
                <div class="item">
                    <div class="img three2"></div>
                    <div class="txt">
                        <h2>When should you start planning?</h2>
                        <p>
                            It's never too early to start planning for retirement. The earlier you start saving and
                            investing for retirement, the more time your money has to grow through the power of compounding.
                            However, it's also never too late to begin planning.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="three" id="living">
            <h1>Living in retirement</h1>
            <div class="grid">
                <div class="item">
                    <div class="img one3"></div>
                    <div class="txt">
                        <h2>How to create a retirement plan?</h2>
                        <p>
                            To create a retirement plan, start by setting retirement goals and assessing your current
                            financial situation. Calculate your retirement gap and develop a savings strategy to reach your
                            goals. Choose retirement accounts and invest wisely. Regularly review and adjust your plan, and
                            consider seeking professional advice for a personalized retirement plan.
                        </p>
                    </div>
                </div>
                <div class="item">
                    <div class="img two3"></div>
                    <div class="txt">
                        <h2>Why you need a retirement plan</h2>
                        <p>
                            A retirement plan is important for financial security, protecting savings from inflation, peace
                            of mind, goal setting, tax benefits, and planning for longevity. It ensures you have enough
                            money to maintain your desired lifestyle when you retire.
                        </p>
                    </div>
                </div>
                <div class="item">
                    <div class="img three3"></div>
                    <div class="txt">
                        <h2>To retire well, should you move?</h2>
                        <p>
                            Moving in retirement is a personal decision and is not always necessary. Some people choose to
                            move to a different location for various reasons, such as downsizing, reducing living expenses,
                            or being closer to family.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <Footer />
</template>

<style scoped lang="scss">
section.landing {
    background-color: #c20029;
    color: #FFF;
    padding: 100px 50px;

    @media(max-width: 991px) {
        padding: 50px 0px;
    }

    div {
        max-width: 1366px;
        margin: auto;
        padding: 0px 50px;

        @media(max-width: 991px) {
            padding: 30px;
        }

        h4 {
            font-size: 28px;
            line-height: 1.5;
        }

        h1 {
            font-size: 72px;
            margin: 20px 0px;
        }
    }
}

nav {
    background-color: #fff;
    padding: 10px;
    position: sticky;
    top: 70px;

    @media(max-width: 991px) {
        display: none;
    }

    div.menu {
        max-width: 1366px;
        margin: auto;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;

        a {
            text-align: center;
            font-weight: 600;
        }
    }
}

div.access {
    background-color: #3f4444;
    padding: 50px 30px;
    color: #fff;

    div.container {
        max-width: 1366px;
        margin: auto;
        padding: 30px 80px;
        display: flex;
        gap: 20px;
        flex-wrap: wrap;

        @media(max-width: 991px) {
            padding: 0px;
        }

        div.left {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 30px;
            flex-wrap: wrap;
            min-width: 300px;
            max-width: 600px;
            margin-bottom: 30px;

            p {
                font-size: 24px;
                font-weight: 600;
            }

            button {
                height: 56px;
                padding: 0px 30px;
                width: 50%;
                border-radius: 28px;
                font-size: 16px;
                font-weight: 600;
            }
        }

        div.right {
            padding: 0px 20px;
            border-left: 1px solid #FFF;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap: 20px;
            max-width: 380px;
        }
    }
}

section.three {
    max-width: 1366px;
    margin: -100px auto 0px;
    padding: 120px 80px 0px;

    @media(max-width: 991px) {
        padding: 150px 30px 0px;
    }

    h1 {
        font-size: 28px;
        margin: 0px 0px 30px;
    }

    div.grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 20px;
        margin: 10px 0px 30px;

        @media(max-width: 991px) {
            grid-template-columns: 1fr 1fr;
        }

        @media(max-width: 600px) {
            grid-template-columns: 1fr;
        }

        div.item {
            box-shadow: 0px 0px 10px #0002;

            div.img {
                height: 250px;
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
            }

            div.one {
                background-image: url(@/assets/note.png);
            }

            div.two {
                background-image: url(@/assets/clock.png);
            }

            div.three {
                background-image: url(@/assets/globe.svg);
            }

            div.one1 {
                background-image: url(@/assets/fin1.jpg);
            }

            div.two1 {
                background-image: url(@/assets/fin2.jpg);
            }

            div.three1 {
                background-image: url(@/assets/fin3.jpg);
            }

div.one2 {
    background-image: url(@/assets/fin4.jpg);
}

div.two2 {
    background-image: url(@/assets/fin5.jpg);
}

div.three2 {
    background-image: url(@/assets/fin6.jpg);
}
div.one3 {
    background-image: url(@/assets/fin7.jpg);
}

div.two3 {
    background-image: url(@/assets/fin8.jpg);
}

div.three3 {
    background-image: url(@/assets/fin9.jpg);
}

            div.txt {
                padding: 20px;

                h2 {
                    font-size: 20px;
                }

                p {
                    font-size: 14px;
                    line-height: 1.4;
                    margin: 10px 0px 0px;
                }
            }
        }
    }
}</style>