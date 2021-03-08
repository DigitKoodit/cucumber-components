// https://medium.com/justfrontendthings/how-to-create-and-publish-your-own-vuejs-component-library-on-npm-using-vue-cli-28e60943eed3

import Vue from 'vue'
import CucumberButton from './components/CButton';
import CucumberStyles from "./css/cucumber.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Add all icons to the library so you can use it in your page
library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)

const Components = {
  CucumberButton,
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default {
  Components,
  CucumberStyles
}