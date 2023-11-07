import './assets/styles.scss'

import type { Data } from '@/Data'
import { createApp } from 'vue'
import App from '@/App.vue'
import { getData } from '@/Data'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCopy } from '@fortawesome/free-regular-svg-icons'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

library.add(faGithub, faCopy, faSpinner)

const app = createApp(App, {
  unipointsData: null,
  loadError: null
}).component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')

function setData(unipointsData: Data | null, loadError: Error | string | null) {
  if (app._instance !== null) {
    app._instance.props.unipointsData = unipointsData
    app._instance.props.loadError = loadError
  } else {
    setTimeout(() => {
      setData(unipointsData, loadError)
    }, 100)
  }
}
getData()
  .then((unipointsData: Data) => {
    setData(unipointsData, null)
  })
  .catch((error) => {
    setData(null, error)
  })
