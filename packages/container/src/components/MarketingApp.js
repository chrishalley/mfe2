import React, { useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { mount } from "marketing/MarketingApp";

export default () => {

  const marketingRef = useRef(null)
  const history = useHistory()

  const handleNavigation = ({ pathname: nextPathname }) => {
    const { pathname } = history.location
    if (pathname !== nextPathname) {
      history.push(nextPathname)
    }
  }

  useEffect(() => {
    const bullshit = 'bullshit'
    const { onParentNavigate } = mount(
      marketingRef.current,
      {
        onNavigate: handleNavigation,
        initialPath: history.location.pathname
      }
    )
    history.listen(onParentNavigate)
  }, [])

  return (
    <div ref={marketingRef} />
  )
}