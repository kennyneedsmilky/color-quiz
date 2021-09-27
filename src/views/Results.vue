<template>
    <div class="page__border page__border--centered">
      <div class="results__banner">Results</div>
      <p>Your Score is</p>
      <p class="results__quiz-score-label">{{ quizScore }}</p>
      <p v-if="quizScore === 100">Perfect! Good Job!</p>
      <p v-else-if="quizScore >= 80">Great!</p>
      <p v-else-if="quizScore >= 70">Good. Let's try again.</p>
      <p v-else >You must study more!</p>
      <div class="results__btn-cont">
          <button-generic :btnTxt="'Try Again'" :linkTxt="'/'"></button-generic>
      </div>
    </div>
</template>

<script>
import ButtonGeneric from "../components/ButtonGeneric.vue";
export default {
    name: "Results",
    props: {
        quizTaken: Boolean,
        quizScore: Number
    },
    components: {
        ButtonGeneric
    },
    data() {
        return {
            tookQuiz: this.quizTaken
        }
    },
    mounted() {
        if(this.tookQuiz === false) {
            this.$router.push("/");
            return;
        }
    }
}
</script>

<style scoped>
    .page__border--centered {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        font-size: 36px;
        font-weight: bold;
    }

    .results__banner {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        left: 0;
        top: 0;
        width: 50%;
        padding: 0.25rem;
        background-color: var(--color-default-03);
        color: var(--color-default-01);
    }

    .results__quiz-score-label {
        font-size: 72px;
    }

    .results__btn-cont {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 50%;
    }
</style>