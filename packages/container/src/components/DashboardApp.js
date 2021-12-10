import React, { useRef, useEffect } from "react";

import { mount } from "dashboard/DashboardApp";

export default () => {
  const dashRef = useRef(null)

  useEffect(() => {
    mount(dashRef.current)
  }, []);

  return <div ref={dashRef} />;
};
