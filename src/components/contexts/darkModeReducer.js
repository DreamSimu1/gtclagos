// const DarkModeReducer = (state, action) => {
//   switch (action.type) {
//     case "LIGHT": {
//       return {
//         darkMode: false,
//       };
//     }
//     case "DARK": {
//       return {
//         darkMode: true,
//       };
//     }
//     case "TOGGLE": {
//       return {
//         darkMode: !state.darkMode,
//       };
//     }
//     default:
//       return state;
//   }
// };

// export default DarkModeReducer;
const DarkModeReducer = (state, action) => {
  switch (action.type) {
    case "LIGHT":
      localStorage.setItem("darkMode", "false");
      return { darkMode: false };
    case "DARK":
      localStorage.setItem("darkMode", "true");
      return { darkMode: true };
    case "TOGGLE":
      const toggled = !state.darkMode;
      localStorage.setItem("darkMode", toggled.toString());
      return { darkMode: toggled };
    default:
      return state;
  }
};

export default DarkModeReducer;
