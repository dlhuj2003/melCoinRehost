<template>
    <main>
        <div class="overviewTotal___x8co8">
            <div class="overviewTotalInfo___pIvDJ">
                <div class="overviewTotalInfoTitle___Miv3A">Est. total value</div>
                <div class="overviewTotalInfoSum___B6xZu"><span class="totalBalance___h0v_E">0
                        USD</span><span class="totalBTC___PMT3q">≈0 BTC</span></div>
                <div style="color: rgb(0, 176, 112); visibility: visible;">Today's profit: 0 </div>
            </div>
            <div>
                <div style="display: flex; justify-content: center; align-items: center; width: 100%; height: 228px;">
                    <div style="text-align: center;">Your balance is at 0.<p style="margin-top: 15px;">
                            <router-link to="/deposit" class="ant-btn t-button ant-btn-primary"><span>Deposit</span></router-link>
                        </p>
                    </div>
                </div>
                <div class="periodBtn___Faqsx">
                    <div
                        class="ant-radio-group ant-radio-group-outline t-radio-group tRadioGroup___IBkpP tRadioGroup_separate___Wq2xz">
                        <label class="ant-radio-button-wrapper ant-radio-button-wrapper-checked"><span
                                class="ant-radio-button ant-radio-button-checked"><input type="radio"
                                    class="ant-radio-button-input" value="30" checked=""><span
                                    class="ant-radio-button-inner"></span></span><span>30D</span></label><label
                            class="ant-radio-button-wrapper"><span class="ant-radio-button"><input type="radio"
                                    class="ant-radio-button-input" value="90"><span
                                    class="ant-radio-button-inner"></span></span><span>90D</span></label><label
                            class="ant-radio-button-wrapper"><span class="ant-radio-button"><input type="radio"
                                    class="ant-radio-button-input" value="180"><span
                                    class="ant-radio-button-inner"></span></span><span>180D</span></label><label
                            class="ant-radio-button-wrapper"><span class="ant-radio-button"><input type="radio"
                                    class="ant-radio-button-input" value="365"><span
                                    class="ant-radio-button-inner"></span></span><span>1Y</span></label>
                    </div>
                    <div class="periodProfit___YEFAa"><span>30Dbalance change:</span><span
                            style="color: rgb(0, 176, 112);">0 </span></div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import { ref } from 'vue'

</script>

<style scoped lang="scss"></style>