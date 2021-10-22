<template>
  <div class="page__border home">
    <div class="home__title-cont">
      <h2 class="home__title-txt">Color Quiz</h2>
    </div>
    <div class="home__bottom-cont">
      <button-generic :btnTxt="'Start'" :linkTxt="'quiz'"></button-generic>
    </div>
  </div>
</template>

<script>
import ButtonGeneric from "../components/ButtonGeneric.vue";
export default {
  name: "Home",
  emits: ["readyQuiz"],
  components: {
    ButtonGeneric,
  },
  mounted() {
    this.$emit("readyQuiz");
  },
};
</script>

<style scoped>
.home {
  padding: var(--padding-border-reset);
}

.home__title-cont,
.home__bottom-cont {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
}

.home__title-cont {
  background-image: linear-gradient(#ffffff80, #ffffff80),
    url("../assets/img/home-bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.home__title-txt {
  font-size: 64px;
  font-weight: bolder;
}
</style>
