const greenTypes = ["Grass"];
const redTypes = ["Fire", "Fighting"];
const blueTypes = ["Fairy", "Water"];
const yellowTypes = ["Lightning"];
const purpleTypes = ["Darkness", "Metal", "Psychic"];
const brownTypes = ["Dragon", "Colorless"];

// Defines a className(color) by passing Pokemon type
export const handleCardColorByType = (type: string) => {
  if (greenTypes.includes(type)) return "green";
  if (redTypes.includes(type)) return "red";
  if (blueTypes.includes(type)) return "blue";
  if (yellowTypes.includes(type)) return "yellow";
  if (purpleTypes.includes(type)) return "purple";
  if (brownTypes.includes(type)) return "brown";
};
