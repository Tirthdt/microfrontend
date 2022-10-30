import React, { useRef, useEffect } from "react";
import { mount } from "auth/AuthApp";
import { useHistory } from "react-router-dom";

const AuthApp = () => {
  const authRef = useRef(null);
  const history = useHistory();

  useEffect(() => {
    if (authRef) {
      const { onParentNavigate } = mount(authRef.current, {
        onNavigate: ({ pathname: nextPathName }) => {
          const pathName = history.location;
          if (pathName !== nextPathName) {
            history.push(nextPathName);
          }
        },
        initialPath: history.location.pathname,
      });

      history.listen(onParentNavigate);
    }
  }, []);

  return <div className="auth-section" ref={authRef}></div>;
};

export default AuthApp;
