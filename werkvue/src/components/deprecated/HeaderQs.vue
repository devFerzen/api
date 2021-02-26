<template>
<div class="nav">
	<b-nav tabs>
		<b-nav-item disabled><b> Quiz </b></b-nav-item>
		<b-nav-item disabled> Correct: {{ numCorrect }}/{{ numTotal }} </b-nav-item>
	</b-nav>
</div>
</template>

<script>
export default {
	props: [
	'numCorrect',
	'numTotal'
	]
}
</script>

<style>
.nav {
	position: absolute;
	top: 0;
	width: 100%;
}
</style>