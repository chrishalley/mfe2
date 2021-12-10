import React from 'react'
import ReactDOM from 'react-dom'
import { createMemoryHistory, createBrowserHistory } from 'history'

import App from './App'

// Mount function to start the app
const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
  console.log('marketing', { onNavigate, defaultHistory, initialPath })
  const history = defaultHistory || createMemoryHistory({
    initialEntries: [initialPath]
  })
  if (onNavigate) {
    history.listen(onNavigate)
  }
  ReactDOM.render(
    <App history={history} />,
    el
  )

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location
      console.log({ pathname, nextPathname })
      if (pathname !== nextPathname) {
        history.push(nextPathname)
      }
      console.log('container just navigated')
    }
  }
}

// If in development and isolation call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root')
  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() })
  }
}

// If we are running inside container then we should export the mount function
export { mount }