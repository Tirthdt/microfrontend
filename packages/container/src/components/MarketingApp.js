import React, { useRef, useEffect } from "react";
import { mount } from "marketing/MarketingApp";
import { useHistory } from "react-router-dom";

const MarketingApp = () => {
  const marketingRef = useRef(null);
  const history = useHistory();

  useEffect(() => {
    if (marketingRef) {
      const { onParentNavigate } = mount(marketingRef.current, {
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

  return <div className="marketing-section" ref={marketingRef}></div>;
};

export default MarketingApp;
