import { createApp } from 'vue'
import Dashboard from './components/Dashboard.vue'

// Mount function to start the app
const mount = (el) => {
  const app = createApp(Dashboard)
  app.mount(el)
}

// If in development and isolation call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#dashboard-dev-root')
  if (devRoot) {
    mount(devRoot)
  }
}

// If we are running inside container then we should export the mount function
export { mount }