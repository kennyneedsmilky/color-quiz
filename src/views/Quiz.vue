<template>
    <div class="page__border">
      <div class="quiz__section">
          <div class="quiz__pic" :style="[ this.image ? { backgroundImage: 'url(' + require('@/assets/img/' + this.image + '.jpg') + ')' } : {backgroundImage: 'none'} ]"></div>
      </div>
      <div class="quiz__section">
          <p class="quiz__info-txt">Choose the right color.</p>
          <div class="quiz__sub-section">
            <button-quiz-answer :btnName="this.answerChoiceA" @check-answer="this.checkAnswer"></button-quiz-answer>
            <button-quiz-answer :btnName="this.answerChoiceB" @check-answer="this.checkAnswer"></button-quiz-answer>
          </div>
          <div class="quiz__sub-section">
            <button-quiz-answer :btnName="this.answerChoiceC" @check-answer="this.checkAnswer"></button-quiz-answer>
            <button-quiz-answer :btnName="this.answerChoiceD" @check-answer="this.checkAnswer"></button-quiz-answer>
          </div>
          <p class="quiz__info-txt">Question # {{ this.questionsCurrent }} of {{ this.questionsTotal }}</p>
      </div>
    </div>
</template>

<script>
import { colorQuizData } from "../colorQuizData.js";
import ButtonQuizAnswer from "../components/ButtonQuizAnswer.vue";
export default {
    name: "Quiz",
    props: {
        isTakingQuiz: Boolean
    },
    emits: [
        "quizFinished", "setQuizScore"
    ],
    components: {
        ButtonQuizAnswer
    },
    data() {
        return {
            quizList: null,
            image: "white",
            answerChoiceA: "white",
            answerChoiceB: "red",
            answerChoiceC: "green",
            answerChoiceD: "blue",
            answerCorrect: "white",
            questionsCurrent: 0,
            questionsTotal: 0
        }
    },
    methods: {
        shuffleColorQuizData() {
            const colorQuizDataBuffer = [...colorQuizData];
            const shuffledData = [];
            for (let i = 0; i < colorQuizData.length; i++) {
                const pickedNumber = Math.floor(Math.random() * colorQuizDataBuffer.length);
                // Must push the picked item into the shuffleData.
                shuffledData.push(colorQuizDataBuffer[pickedNumber]);
                colorQuizDataBuffer.splice(pickedNumber, 1);
            }
            this.quizList = [...shuffledData];
        },
        resetQuiz() {
            this.image = "";
            this.answerChoiceA = "";
            this.answerChoiceB = "";
            this.answerChoiceC = "";
            this.answerChoiceD = "";
            this.questionsCorrect = 0;
            this.questionsCurrent = 0;
            this.questionsTotal = this.quizList.length;
        },
        newQuiz() {
            this.shuffleColorQuizData();
            this.resetQuiz();
            this.newQuestion();
        },
        newQuestion() {
            // Clear all previous answers
            this.answerChoiceA = "";
            this.answerChoiceB = "";
            this.answerChoiceC = "";
            this.answerChoiceD = "";
            const usedChoices = [];
            this.image = this.quizList[this.questionsCurrent].color;
            usedChoices.push(this.image);
            // Set the right answer choice in one of the buttons.
            const rightAnswerChoiceSet = Math.floor(Math.random() * 3);
            if (rightAnswerChoiceSet === 0) this.answerChoiceA = this.image;
            if (rightAnswerChoiceSet === 1) this.answerChoiceB = this.image;
            if (rightAnswerChoiceSet === 2) this.answerChoiceC = this.image;
            if (rightAnswerChoiceSet === 3) this.answerChoiceD = this.image;
            // Set 3 wrong answers.
            if (this.answerChoiceA === "") {
                this.answerChoiceA = this.setRandomColor(usedChoices);
                usedChoices.push(this.answerChoiceA);
            }
            if (this.answerChoiceB === "") {
                this.answerChoiceB = this.setRandomColor(usedChoices);
                usedChoices.push(this.answerChoiceB);
            }
            if (this.answerChoiceC === "") {
                this.answerChoiceC = this.setRandomColor(usedChoices);
                usedChoices.push(this.answerChoiceC);
            }
            if (this.answerChoiceD === "") {
                this.answerChoiceD = this.setRandomColor(usedChoices);
                usedChoices.push(this.answerChoiceD);
            }
            this.questionsCurrent ++;
        },
        setRandomColor(usedChoices) {
            let decided = false;
            let randomChoice = Math.floor(Math.random() * this.quizList.length);
            let randomColor = this.quizList[randomChoice].color;

            while (decided === false) {
                if (usedChoices.filter(x => x === randomColor).length >= 1) {
                    randomChoice = Math.floor(Math.random() * this.quizList.length);
                    randomColor = this.quizList[randomChoice].color;
                } else {
                    decided = true;
                }
            }
            return randomColor;
        },
        checkAnswer(btnAnswerChoice) {
            // Check to see if the button color matches the picture.
            if(btnAnswerChoice === this.image) {
                this.questionsCorrect++;
            }

            if (this.questionsCurrent < this.questionsTotal) {
                this.newQuestion();
            } else {
                this.$emit("setQuizScore", Math.floor(this.questionsCorrect / this.questionsTotal * 100));
                this.$emit("quizFinished");
                this.$router.push("/results");
            }
        }
    },
    mounted() {
        if(this.isTakingQuiz === false) {
            this.$router.push("/");
            return;
        }

        this.newQuiz();
    },
}
</script>

<style scoped>
    .quiz__section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 50%;
    }

    .quiz__sub-section {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        height: 50%;
    }

    .quiz__pic {
        width: 274px;
        height: 250px;
        background-color: var(--color-default-02);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        box-shadow: 5px 5px 5px #64646480;
    }

    .quiz__info-txt {
        font-size: 36px;
        font-weight: bold;
    }
</style>