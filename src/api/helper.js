import { Colors } from "./constants";

export const generateListColor = (data) => {
  if (data.length > Colors.length) {
    additionalList = [];
    for (i = 0; i < data.length - Colors.length; i++) {
      randomColor = Math.floor(Math.random() * 16777215).toString(16);
      while (Colors.includes(randomColor)) {
        randomColor = Math.floor(Math.random() * 16777215).toString(16);
      }
      additionalList.push(randomColor);
    }

    return additionalList.push(...Colors);
  }
  return Colors.slice(0, data.length);
};

export const mergeColorToData = (data, colors) => {
  const len = Math.min(data.length, colors.length);
  const mergedData = [...data];
  for (let i = 0; i < len; i++) {
    mergedData[i]["color"] = colors[i];
  }

  return mergedData;
};
