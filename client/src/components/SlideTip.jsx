import React, { useState, useEffect } from "react";

const SlideTip = ({
  direction = "right",
  onClick,
  position = "right", // 'right' | 'left'
  popoverText = "Slide to see more",
  showDelay = 1200,
  hideDelay = 6000,
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setVisible(true), showDelay);
    const hideTimer = setTimeout(() => setVisible(false), hideDelay);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [showDelay, hideDelay]);

  const arrowPath = direction === "right" ? "M9 5l7 7-7 7" : "M15 5l-7 7 7 7";

  // Positioning classes
  // Move left-positioned tip closer to the left frame edge
  const containerPos = position === "left" ? "bottom-10 left-3" : "bottom-10 right-6";
  const flexDir = position === "left" ? "flex-row-reverse" : "flex-row";
  const popoverMargin = position === "left" ? "ml-2" : "mr-2";

  return (
    <div className={`absolute ${containerPos} z-60 ${flexDir} flex items-center justify-end pointer-events-auto`}>
      <div
        className={`${popoverMargin} max-w-xs w-auto transition-all duration-300 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
        style={{
          background: 'rgba(255,255,255,0.96)',
          border: '1px solid rgba(0,0,0,0.06)'
        }}
        aria-hidden={!visible}
      >
        <div className="px-3 py-2 rounded-lg shadow-md text-xs font-medium text-gray-800">
          {popoverText}
        </div>
      </div>

      <button
        onClick={onClick}
        aria-label={`Slide ${direction}`}
        className={`w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-transform transform active:scale-95 bg-white text-gray-800`}
        title="Slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={arrowPath} />
        </svg>
      </button>
    </div>
  );
};

export default SlideTip;
