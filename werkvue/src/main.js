import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import BootstarpVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar, faShare, faThumbsUp, faArrowLeft,
          faTimes, faPhoneAlt, faEnvelope, faGlobe,
          faEllipsisV, faTrashAlt, faPencilAlt, faEye
        } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faApple, faGoogle,
          faInstagram, faWhatsapp, faLinkedin,
          faTwitter
        } from '@fortawesome/free-brands-svg-icons'; // confuso https://www.npmjs.com/package/@fortawesome/vue-fontawesome#using-brand-icons
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import ApolloClient from "apollo-boost"
import VueApollo from "vue-apollo"
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
//Esto resuelve los errores de union y fragmentos de graphql en apollo
import { IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import introspectionQueryResultData from './fragmentTypes.json';

import ModalPlugin from './plugins/ModalPlugin'

Vue.use(ModalPlugin)

Vue.use(BootstarpVue)
Vue.config.productionTip = false
library.add(faStar, faShare, faThumbsUp, faArrowLeft,
  faTimes, faPhoneAlt, faEnvelope, faGlobe, faEllipsisV,
  faTrashAlt, faPencilAlt, faEye,
  faFacebookSquare, faApple, faGoogle,
  faInstagram, faWhatsapp, faLinkedin,
  faTwitter
)
Vue.component('font-awesome-icon', FontAwesomeIcon)

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData
});
//const httpLink = new HttpLink({ uri: 'http://localhost:3000/graphql' })
const cache = new InMemoryCache({ fragmentMatcher });

Vue.use(VueApollo);
const client = new ApolloClient({
  uri: "http://localhost:3000/graphql", //"http://192.168.100.69:3000/graphql",
  credentials: "include",
  cache
});
const apolloProvider = new VueApollo({
    defaultClient: client,
})

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
