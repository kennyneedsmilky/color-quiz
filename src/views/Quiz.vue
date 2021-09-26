<template>
    <div>
      <h2>Quiz</h2>
    </div>
</template>

<script>
export default {
    name: "Quiz",
    props: {
        isTakingQuiz: Boolean
    },
    data() {
        return {
            
        }
    },  
    mounted() {
        if(this.isTakingQuiz === false) this.$router.push("/");
    },
}
</script>

<style scoped>
    
</style>