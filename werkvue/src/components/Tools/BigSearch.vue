<template>
<div>
	<div class="bigSearch">
		<h1 class="bs-title">ENCUENTRA TU werk..er</h1>
		<b-col class="bs-bar">
			<p class="mb-1 ml-2"> REALIZA TU BÚSQUEDA </p>
			<b-input-group>
				<template v-slot:append>
					<button type="button" class="btn btn-outline-secondary"><b-icon icon="Search"></b-icon></button>
				</template>
				<b-form-input class="seam-r" placeholder="TECLEA AQUÍ"></b-form-input>
			</b-input-group>
			<p class="mt-1 ml-2"> TAGS: </p>
		</b-col>
	</div>
	<div class="mb-5">
		<b-button pill class="bs-button">BUSCAR</b-button>
	</div>
</div>
</template>

<script>
export default {
}
</script>

<style scoped>

	.bigSearch {
		background-color: #05386B;
		position: relative;
		width: 100%;
		min-width: 320px;
		margin-bottom: 60px;
	}

	.bigSearch::after {
		content: "";
	  position: absolute;
	  left: 0;
	  width: 100%;
	  height: 100%;
		background-image: url("../../assets/Fondo.svg");
		background-repeat: no-repeat;
		z-index: 0;
	}

	.bigSearch input {
		font-size: 17px;
		padding-left: 20px;
		height: 55px;
		border-radius: 11px;
	}

	.bigSearch p {
		color: #fff;
		font-weight:600;
		text-align: left;
		margin-bottom: 0px;
	}

	.bs-button {
		position: relative;
		font-weight:800 !important;
		background-color: #5CD895 !important;
		color: #05386B !important;
		border: 0px !important;
	}

	.bs-button:hover {
		background-color: #8EE4AF !important;
	}

	.btn-outline-secondary {
		background-color: #fff !important;
	  border-color: #ced4da !important;
	  border-left: 0px !important;
	  border-radius: 0 11px 11px 0 !important;
	}

	.bigSearch .btn-outline-secondary {
		padding-right: 20px;
	}

	.seam-r {
		border-right: 0px !important;
	}

	body h1 {
		color: #fff;
		font-weight:800;

	}
	body h2 {
		font-weight:900;
		text-align: left;
	}

	.bs-title {
		color: #F8F8F8;
	}

	@media only screen and (max-width:576px) {
		.bs-button {

		}
		.bs-title {
			padding: 80px 0 20px 0;
		}
		body h1 {
			font-size: 30px;
		}
		.bs-button {
			font-size: 20px !important;
			top: -50px;
			width: 150px;
			height: 50px;
		}
	}
	@media only screen and (min-width:576px) {
		.bs-title {
			padding: 100px 0 40px 0;
		}
		body h1 {
			font-size: 40px;
		}
		.bs-bar {
			padding-right: 10% !important;
			padding-left: 10% !important;
		}
		.bs-button {
			font-size: 23px !important;
			top: -35px;
			width: 300px;
			height: 60px;
		}
	}
	@media only screen and (min-width:768px) {
		.bs-title {
			padding: 100px 0 40px 0;
		}
		body h1 {
			font-size: 50px;
		}
		.bs-bar {
			padding-right: 10% !important;
			padding-left: 10% !important;
		}
		.bs-button {
			margin-bottom: 100px;
			width: 390px;
			height: 60px;
		}
	}
	@media only screen and (min-width:900px) {
		.bs-button {
			top: -10px;
		}
	}
	@media only screen and (min-width:1200px) {
		.bs-title {
			padding: 140px 0 60px 0;
		}
		body h1 {
			font-size: 65px;
		}
		.bs-bar {
			padding-right: 15% !important;
			padding-left: 15% !important;
		}
		.bs-button {
			top: 25px;
		}
	}
	@media only screen and (min-width:1440px) {
		.bs-bar {
			padding-right: 20% !important;
			padding-left: 20% !important;
		}
		.bs-button {
			top: 45px;
			margin-bottom: 100px;
			width: 320px;
			height: 53px;
		}
	}
	@media only screen and (min-width:1920px) {
		.bs-button {
			top: 90px;
		}
	}
	@media only screen and (min-width:2560px) {
		.bs-button {
			top: 155px;
		}
	}

</style>
