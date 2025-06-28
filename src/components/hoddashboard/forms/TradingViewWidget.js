// import React, { useEffect, useRef, memo } from "react";

// const TradingViewWidget = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src =
//       "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
//     script.type = "text/javascript";
//     script.async = true;
//     script.innerHTML = `
//       {
//         "width": "100%",
//         "height": "100%",
//         "symbol": "OANDA:EURUSD",
//         "interval": "D",
//         "timezone": "Etc/UTC",
//         "theme": "light",
//         "style": "1",
//         "locale": "en",
//         "allow_symbol_change": true,
//         "support_host": "https://www.tradingview.com"
//       }
//     `;
//     if (containerRef.current) {
//       containerRef.current.innerHTML = "";
//       containerRef.current.appendChild(script);
//     }
//   }, []);

//   return (
//     <div
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         height: "100vh",
//         width: "100vw",
//         zIndex: 1,
//         backgroundColor: "#fff",
//       }}
//     >
//       <div
//         className="tradingview-widget-container"
//         style={{ width: "100%", height: "100%" }}
//       >
//         <div
//           ref={containerRef}
//           className="tradingview-widget-container__widget"
//           style={{ width: "100%", height: "100%" }}
//         />
//         <div className="tradingview-widget-copyright">
//           <a
//             href="https://www.tradingview.com/"
//             rel="noopener nofollow"
//             target="_blank"
//           >
//             <span className="blue-text">Track all markets on TradingView</span>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default memo(TradingViewWidget);
import React, { useEffect, useRef, memo } from "react";
import "./trading.css";
const TradingViewWidget = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "width": "100%",
        "height": "100%",
        "symbol": "OANDA:EURUSD",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "light",
        "style": "1",
        "locale": "en",
        "allow_symbol_change": true,
        "support_host": "https://www.tradingview.com"
      }
    `;
    if (containerRef.current) {
      containerRef.current.innerHTML = "";
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "100%",
        height: "calc(100vh - 60px)", // Adjust if you have a header
        padding: "0 10px",
        boxSizing: "border-box",
      }}
    >
      <div
        className="tradingview-widget-container"
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <div
          ref={containerRef}
          className="tradingview-widget-container__widget"
          style={{ width: "100%", height: "100%" }}
        />
        <div
          className="tradingview-widget-copyright"
          style={{ textAlign: "center", marginTop: "8px", fontSize: "12px" }}
        >
          <a
            href="https://www.tradingview.com/"
            rel="noopener nofollow"
            target="_blank"
          >
            <span className="blue-text">Track all markets on TradingView</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default memo(TradingViewWidget);
