import React, { useRef, useEffect } from "react";
import { mount } from "marketing/MarketingApp";

const MarketingApp = () => {
  const marketingRef = useRef(null);

  useEffect(() => {
    if (marketingRef) {
      mount(marketingRef.current);
    }
  }, []);

  return <div className="marketing-section" ref={marketingRef}></div>;
};

export default MarketingApp;
