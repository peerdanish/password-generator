import { Cases } from "../types/state";
import {
  characters,
  CONTENT,
  COUNT_PERCENT,
  STRONG_THRESHOLD,
  WEAK_THRESHOLD,
} from "./constants";
// Function to generate random password
export const generateRandomString = (
  length: number,
  options: Cases[]
): Array<string> => {
  const minCount = Math.floor((COUNT_PERCENT / 100) * length);
  let availableChars = "";
  let result = "";
  let strength = "";
  options.forEach((option) => {
    if (option.value) {
      availableChars += characters[option.title];
    }
  });
  //password should contain minCount no. of characters of each option
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

  if (result.length > WEAK_THRESHOLD) {
    validatePassword(result) && result.length > STRONG_THRESHOLD
      ? (strength = CONTENT.STRONG)
      : (strength = CONTENT.GOOD);
  } else {
    strength = CONTENT.WEAK;
  }
  return [result, strength];
};

const validatePassword = (password: string) => {
  const hasLowercase = /[a-z]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSymbol = /[^a-zA-Z0-9]/.test(password);

  return hasLowercase && hasUppercase && hasNumber && hasSymbol;
};

export const getColor = (strength: string) => {
  if (strength === "Weak") {
    return "text-red-500";
  } else if (strength === "Good") {
    return "text-yellow-500";
  } else if (strength === "Strong") {
    return "text-green-500";
  }
};