<template>
  <router-view class="router-view" 
    :isTakingQuiz="this.isTakingQuiz" 
    :quizTaken="this.quizTaken"
    :quizScore="this.quizScore"
    @ready-quiz="this.readyQuiz"
    @quiz-finished="this.quizFinished" 
    @set-quiz-score="this.setQuizScore"
  />
</template>

<script>
export default {
  data() {
    return {
      isTakingQuiz: false,
      quizTaken: false,
      quizScore: 0
    }
  },
  methods: {
    readyQuiz() {
      this.isTakingQuiz = true;
    },
    quizFinished() {
      this.quizTaken = true;
    },
    setQuizScore(finalScore) {
      this.quizScore = finalScore;
    }
  },
}

</script>

<style>
@import url("./assets/css/main.css");

.router-view {
  height: calc(100vh);
}

/* Use this to make the pages in router view set right. */
.page__border {
  padding: var(--padding-default);
  margin: var( --padding-margin-reset);
}
</style>
