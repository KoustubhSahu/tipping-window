import React, { useState, useEffect } from "react";

const SecretButton = ({ setRotated }) => {
  const [tapCount, setTapCount] = useState(0);

  useEffect(() => {
    if (tapCount >= 3) {
      setRotated(prev => !prev);
      setTapCount(0);
    }

    const timeout = setTimeout(() => {
      setTapCount(0);
    }, 1000); // Reset tap count if delay is too long

    return () => clearTimeout(timeout);
  }, [tapCount, setRotated]);

  const handleTap = () => {
    setTapCount(prev => prev + 1);
  };

  return (
    <div
      onClick={handleTap}
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        width: "40px",
        height: "40px",
        zIndex: 1000,
        cursor: "pointer",
      }}
    />
  );
};

export default SecretButton;
