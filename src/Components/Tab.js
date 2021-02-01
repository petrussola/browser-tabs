import React, { useState } from 'react';

export default function Tab({ children }) {
  const [highlightStyle, setHighLightStyle] = useState({ left: 0, opacity: 0 });

  function moveHighlight(e) {
    setHighLightStyle({
      left: e.nativeEvent.layerX - 150,
    });
  }

  function hideHighlight(e) {
    setHighLightStyle({
      opacity: 0,
      left: e.nativeEvent.layerX - 150,
    });
  }
  return (
    <div className="tab" onMouseMove={moveHighlight} onMouseOut={hideHighlight}>
      <div className="highlight" style={highlightStyle} />
      {children}
    </div>
  );
}
