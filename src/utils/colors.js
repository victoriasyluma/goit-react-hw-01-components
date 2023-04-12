export const getRandomColor = () => {
  // generate a random hexadecimal color code
  const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  return color;
};

export const getContrastColor = hexColor => {
  // remove the hash sign if it exists
  hexColor = hexColor.replace('#', '');

  // convert the hex color to RGB values
  const r = parseInt(hexColor.substr(0, 2), 16);
  const g = parseInt(hexColor.substr(2, 2), 16);
  const b = parseInt(hexColor.substr(4, 2), 16);

  // calculate the luminance (brightness) of the color
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // return black or white depending on the luminance
  return luminance > 0.5 ? '#000000' : '#ffffff';
};

export const getComplementaryColors = () => {
  const color = getRandomColor();
  const contrastColor = getContrastColor(color);

  return { color, contrastColor };
};
