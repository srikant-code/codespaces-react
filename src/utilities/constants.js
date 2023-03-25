const STRINGS = {
  COLORS: {
    WHITE: "#FFFFFF",
    BLACK: "#000000",
    RED: "#FF0000",
    GREEN: "#00FF00",
    BLUE: "#0000FF",
    GREY: "#a0a0a0",
  },
};

export default STRINGS;

export const UID = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
