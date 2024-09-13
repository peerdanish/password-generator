import { Cases } from "../types/state";
import { characters, COUNT_PERCENT } from "./constants";
// Function to generate random password
export const generateRandomString = (
  length: number,
  options: Cases[]
): string => {
  const minCount = Math.floor((COUNT_PERCENT/ 100) * length);

  let result = "";
  const availableChars = Object.keys(characters)
    .map((key) => characters[key])
    .join("");
  options.forEach((option) => {
    if (option.value) {
      for (let i = 0; i < minCount; i++) {
        const randomIndex = Math.floor(
          Math.random() * characters[option.title].length
        );
        result += characters[option.title][randomIndex];
      }
    }
  });

  // Generate random string
  for (let i = result.length; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * availableChars.length);
    result += availableChars[randomIndex];
  }
  //shuffle to get less predictable password
  result = result
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
  return result;
};
