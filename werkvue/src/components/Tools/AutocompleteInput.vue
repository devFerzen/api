<template lang="html">
  <div class="">
    <b-form-group>
      <label>{{inputLable}}</label>
      <b-form-input
        v-model="inputData"
        type="text"
        placeholder="Teclea aquí"
        class="werk-input werk-shadow-input"
        @keydown.down="onKeyDown"
        @keydown.up="onKeyUp"
        @keydown.enter="onEnter"
        @input="onChange"
      ></b-form-input>
    </b-form-group>
    <div v-show="isOpen">
      <b-list-group>
        <b-list-group-item
          v-for="(item, key) in itemsFiltered"
          :key="key"
          @click="itemSelection(item.name)"
          class="item-list"
          :class="{'is-active': key === visibleItemKey}"
          button>
          {{item.name}}
        </b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      inputLable: {
        type: String,
        default: ''
      },
      labelFor: {
        type: String,
        default: ''
      }

    },
    data() {
      return {
        /*Estos ddls como categoria o subcateogiria se bajaran desde }
          el inicio de la aplicación y solo esa vez - asegurar el cierre de sesion 2hrs*/
        items:[{name:'Mayo'},{name:'May'},{name:'Too'}],
        isOpen: false,
        inputData: '',
        visibleItemKey: -1,
        itemsFiltered: []
      }
    },
    methods:{
      onChange(){
        if(this.inputData.trimStart() == ''){
          this.isOpen = false;
          return;
        }
        this.isOpen = true;
        this.filterItems();
      },
      filterItems(){
        this.itemsFiltered = this.items.filter((item) => {
          let name = item.name;
          if(name.toLowerCase().indexOf(this.inputData.toLowerCase()) > -1){
              return name;
          }
        });
      },
      itemSelection(itemSelected){
        this.inputData = itemSelected;
        this.$emit('evInputCat',{value: itemSelected, inputFor: this.labelFor});
        this.isOpen = false;
      },
      clicksAfuera(event){
        if(!this.$el.contains(event.target)){
          this.isOpen = false;
          this.visibleItemKey = -1;
        }
      },
      onKeyUp(){
        console.log("onKeyUp");
        if (this.visibleItemKey > 0) {
          this.visibleItemKey = this.visibleItemKey -1;
          console.log(this.visibleItemKey);
        }
      },
      onKeyDown(){
        console.log("onKeyDown");
        console.log("onKeyDown");
        if (this.visibleItemKey < this.itemsFiltered.length) {
          this.visibleItemKey = this.visibleItemKey + 1;
          console.log(this.visibleItemKey);
        }
      },
      onEnter(){
        this.inputData = this.itemsFiltered[this.visibleItemKey].name;
        this.visibleItemKey = -1;
        this.isOpen = false;
      }
    },
    mounted(){
      document.addEventListener('click', this.clicksAfuera);
    },
    destroyed(){
      document.removeEventListener('Eclick', this.clicksAfuera);
    }
  }
</script>

<style lang="css" scoped>
  .item-list.is-active,
  .item-list:hover{
    background-color: blue;
    color: red;
  }
</style>
