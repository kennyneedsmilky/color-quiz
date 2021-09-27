<template>
    <div class="button-quiz-answer__cont">
      <button class="button-quiz-answer__button" :disabled="disabledBtns" @click="this.checkAnswer">{{ btnName }}</button>
    </div>
</template>

<script>
export default {
    name: "ButtonQuizAnswer",
    props: {
        btnName: String,
        disabledBtns: Boolean
    },
    emits: [
        "checkAnswer"
    ],
    data() {
        return {
        }
    },
    methods: {
        checkAnswer() {
            this.$emit("checkAnswer", this.btnName );
        }
    }
}
</script>

<style scoped>
    .button-quiz-answer__cont {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }

    .button-quiz-answer__button {
        border: none;
        padding: var(--padding-default);
        background-color: var(--color-default-03);
        box-shadow: var(--shadow-button);
        margin: var(--margin-default-01);
        width: 160px;
        height: 92px;
        color: var(--color-default-01);
        font-size: 24px;
        font-weight: bold;
    }

    .button-quiz-answer__button:active {
        background-color: var(--color-theme-01);
        box-shadow: var(--shadow-button-hover);
    }

    .button-quiz-answer__button:disabled {
        opacity: 0.5;
    }

    @media (hover: hover) {
        .button-quiz-answer__button:hover {
            background-color: var(--color-theme-01);
            box-shadow: var(--shadow-button-hover);
        }
    }
</style>