import React from "react";

const WithAuth = (WrappedComponent) => {
  return function AuthComponent(props) {
    const isAuthenticated = true; // just for demo (no logic in App)

    if (!isAuthenticated) {
      return <h2>Access Denied ❌</h2>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default WithAuth;
