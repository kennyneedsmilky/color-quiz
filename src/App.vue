<template>
  <router-view class="router-view" :isTakingQuiz="this.isTakingQuiz" @ready-quiz="this.readyQuiz" />
</template>

<script>
export default {
  data() {
    return {
      isTakingQuiz: false
    }
  },
  methods: {
    readyQuiz() {
      this.isTakingQuiz = true;
    }
  },
}

</script>

<style>
@import url("./assets/css/main.css");
.router-view {
  height: calc(100vh);
  
}
</style>
