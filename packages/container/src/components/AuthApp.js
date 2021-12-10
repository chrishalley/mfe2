import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { mount } from "auth/AuthApp";

export default ({ onSignIn }) => {
  const authRef = useRef(null);
  const history = useHistory();

  const handleNavigation = ({ pathname: nextPathname }) => {
    const { pathname } = history.location;
    if (pathname !== nextPathname) {
      history.push(nextPathname);
    }
  };

  useEffect(() => {
    const { onParentNavigate } = mount(authRef.current, {
      onNavigate: handleNavigation,
      initialPath: history.location.pathname,
      onSignIn,
    });
    history.listen(onParentNavigate);
  }, []);

  return <div ref={authRef} />;
};
