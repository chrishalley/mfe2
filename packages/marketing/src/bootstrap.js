import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

// Mount function to start the app
const mount = (el) => {
  ReactDOM.render(
    <App />,
    el
  )
}

// If in development and isolation call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root')
  if (devRoot) {
    mount(devRoot)
  }
}

// If we are running inside container then we should export the mount function
export { mount }