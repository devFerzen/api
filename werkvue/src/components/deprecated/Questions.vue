<template>
<div>
  <b-jumbotron>
   <template v-slot:lead>
      {{ currentQuestion.question }}
    </template>
    <hr class="my-4">
    <b-list-group class="m-1">
		<b-list-group-item class="listItem"
		v-for="(answer, index) in shuffledAnswers" 
		:key="index"
		@click.prevent="selectAnswer(index)"
		:class="{active: selected === index}">
		{{ answer }}
		</b-list-group-item>
	</b-list-group>

    <b-button variant="primary"
	@click="submitAnswer"
	:disabled="selected === null || submited">
	Submit</b-button>
    <b-button variant="success" 
    :disabled="submited === false || n >= 10"
    @click="next">Next</b-button>
  </b-jumbotron>
</div>
</template>

<script>
import _ from 'lodash'

export default {
	data(){
		return {
			n: 0,
			selected: null,
			correctIndex: null,
			submited: false,
			shuffledAnswers: []
		}
	},
	props: {
		currentQuestion: Object,
		next: Function,
		increment: Function
	},
	computed: {
		answers(){
			let answers = [...this.currentQuestion.incorrect_answers]
			answers.push(this.currentQuestion.correct_answer)
			return answers
		}
	},
	watch: {
		currentQuestion: {
			immediate: true,
			handler() {
				this.selected = null
				this.shuffleAnswers() 
				this.submited = false
				this.n++
			}
		}
	},
	methods: {
		submitAnswer() {
			let isCorrect = false
			this.submited = true
			console.log(this.correctIndex)
			if(this.selected === this.correctIndex) {
				isCorrect = true
			}
			this.increment(isCorrect)
		},
		selectAnswer(index) {
			this.selected = index
			console.log(index)
		},
		shuffleAnswers(){
			let answers = [...this.currentQuestion.incorrect_answers, this.currentQuestion.correct_answer]
			this.shuffledAnswers = _.shuffle(answers)
			this.correctIndex = this.shuffledAnswers.indexOf(this.currentQuestion.correct_answer)

		}
	}
}
</script>

<style>
.listItem:hover {
	background-color: #eee;
	cursor: pointer;
}
.correct {
	background-color: #28a745;
}
.incorrect {
	background-color: #dc3545;
}
</style>