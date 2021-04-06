/**
 * @file Js a cargo de manejar los emits de modales con informacion
 */
import FacturacionModal from '../components/modalesGlobales/DatosFacturacion.vue';

const ModalBus = {
  //Instalar plugin
  install(Vue, options){
    this.EventBus = new Vue();

    Vue.component('FacturacionModal', FacturacionModal);

    Vue.prototype.$GlobalModal = {
      modalIS(params){
        console.log("params");
        console.log(params);
        ModalBus.EventBus.$emit('modalIS', params)
      },
      modalDF(params){
        ModalBus.EventBus.$emit('modalDF', params)
      },
      modalRP(params){
        ModalBus.EventBus.$emit('modalRP', params)
      }
    }
  }
}

export default ModalBus;
