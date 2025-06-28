// import React, { useState } from "react";
// import { Responsive, WidthProvider } from "react-grid-layout";
// import "react-grid-layout/css/styles.css";
// import "react-resizable/css/styles.css";

// const ResponsiveGridLayout = WidthProvider(Responsive);

// const VisionBoard = ({ visions }) => {
//   const [layout, setLayout] = useState([]);
//   const [boardSize, setBoardSize] = useState("2x2"); // Default board size

//   // Board size options
//   const boardOptions = {
//     "2x2": { cols: 2, rows: 2 },
//     "3x3": { cols: 3, rows: 3 },
//     "4x4": { cols: 4, rows: 4 },
//     custom: { cols: 5, rows: 5 }, // Expandable custom option
//   };

//   const handleSizeChange = (size) => {
//     setBoardSize(size);
//     const { cols, rows } = boardOptions[size];
//     setLayout(
//       visions.map((vision, index) => ({
//         i: vision.id.toString(),
//         x: index % cols,
//         y: Math.floor(index / cols),
//         w: 1,
//         h: 1,
//       }))
//     );
//   };

//   return (
//     <div className="vision-board-container">
//       <h2>Customize Your Vision Board</h2>

//       {/* Board Size Selector */}
//       <label>Select Board Size:</label>
//       <select
//         onChange={(e) => handleSizeChange(e.target.value)}
//         value={boardSize}
//       >
//         {Object.keys(boardOptions).map((option) => (
//           <option key={option} value={option}>
//             {option.toUpperCase()}
//           </option>
//         ))}
//       </select>

//       {/* Vision Board Layout */}
//       <ResponsiveGridLayout
//         className="vision-board"
//         layouts={{ lg: layout }}
//         breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
//         cols={{ lg: boardOptions[boardSize].cols }}
//         rowHeight={150}
//         isResizable={true}
//         isDraggable={true}
//       >
//         {visions.map((vision) => (
//           <div
//             key={vision.id}
//             className="vision-item"
//             style={{
//               backgroundImage: `url(${vision.imageUrl})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//           >
//             <p>{vision.title}</p>
//           </div>
//         ))}
//       </ResponsiveGridLayout>
//     </div>
//   );
// };

// export default VisionBoard;

import React, { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

const VisionBoard = ({ visions = [] }) => {
  // Default to an empty array
  const [layout, setLayout] = useState([]);
  const [boardSize, setBoardSize] = useState("2x2");

  const boardOptions = {
    "2x2": { cols: 2, rows: 2 },
    "3x3": { cols: 3, rows: 3 },
    "4x4": { cols: 4, rows: 4 },
    custom: { cols: 5, rows: 5 },
  };

  const handleSizeChange = (size) => {
    setBoardSize(size);
    const { cols, rows } = boardOptions[size];

    // Ensure visions is an array before mapping
    setLayout(
      (visions || []).map((vision, index) => ({
        i: vision.id.toString(),
        x: index % cols,
        y: Math.floor(index / cols),
        w: 1,
        h: 1,
      }))
    );
  };

  return (
    <div className="vision-board-container">
      <h2>Customize Your Vision Board</h2>

      <label>Select Board Size:</label>
      <select
        onChange={(e) => handleSizeChange(e.target.value)}
        value={boardSize}
      >
        {Object.keys(boardOptions).map((option) => (
          <option key={option} value={option}>
            {option.toUpperCase()}
          </option>
        ))}
      </select>

      <ResponsiveGridLayout
        className="vision-board"
        layouts={{ lg: layout }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: boardOptions[boardSize].cols }}
        rowHeight={150}
        isResizable={true}
        isDraggable={true}
      >
        {/* Check if visions is an array before mapping */}
        {Array.isArray(visions) && visions.length > 0 ? (
          visions.map((vision) => (
            <div
              key={vision.id}
              className="vision-item"
              style={{
                backgroundImage: `url(${vision.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <p>{vision.title}</p>
            </div>
          ))
        ) : (
          <p>No visions available. Create a new vision!</p>
        )}
      </ResponsiveGridLayout>
    </div>
  );
};
export default VisionBoard;
