<template>
    <div class="actions-werk-object">
      <b-button class="shadow-none action-werk-object">
        <font-awesome-icon icon="thumbs-up" />
      </b-button>
      <b-button class="shadow-none action-werk-object">
        <font-awesome-icon icon="star" />
      </b-button>
      <b-button class="shadow-none action-werk-object">
        <font-awesome-icon icon="share" />
      </b-button>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
  .actions-werk-object {
    border: 1px solid #000;
    border-radius: 10px;
    display: flex;
    width: 150px;
    min-width: 150px;
    max-width: 150px;
  }

  .action-werk-object {
    font-size: 1.37em;
    background-color: transparent;
    color: #dbdada;
    border: none;
    margin-left: auto;
    margin-right: auto;
    padding: 0.28rem 0.55rem;
  }

  .action-werk-object:hover {
    color: #5CD895;
    background-color: transparent;
    border: none;
  }

  .action-werk-object:active,
  .action-werk-object:focus {
    color: #5CD895;
    background-color: transparent !important;
    border: none;
  }
</style>
