import InicioSesionModal from '../components/modalesGlobales/InicioSesion.vue';
import RegistroModal from '../components/modalesGlobales/RegistroPrincipal.vue';
import FacturacionModal from '../components/modalesGlobales/DatosFacturacion.vue';

const ModalBus = {
  //Instalar plugin
  install(Vue, options){
    this.EventBus = new Vue();

    Vue.component('inicio-sesion-modal', InicioSesionModal);
    Vue.component('facturacion-modal', FacturacionModal);
    Vue.component('registro-modal', RegistroModal);

    Vue.prototype.$GlobalModal = {
      modalIS(params){
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
