import './assets/styles.scss'

import { createApp } from 'vue'
import App from '@/App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCopy } from '@fortawesome/free-regular-svg-icons'
import { faSpinner, faCircleInfo } from '@fortawesome/free-solid-svg-icons'

library.add(faGithub, faCopy, faSpinner, faCircleInfo)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
