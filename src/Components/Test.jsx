import { useEffect,useState } from "react"

const Test = () => {
    const stats = [
        ["+600 Intellect", "+2,223 Stamina", "+264 Critical Strike", "+586 Haste"],
        ["+1,345 Stamina", "+1,003 Haste", "+430 Mastery"],
        ["+450 Intellect", "+1,667 Stamina", "+444 Haste", "+194 Mastery", "+273 Leech"],
        ["+635 Intellect", "+2,391 Stamina", "+437 Haste", "+437 Mastery"],
        ["+450 Intellect", "+1,667 Stamina", "+444 Haste", "+194 Mastery"],
        ["+635 Intellect", "+2,391 Stamina", "+306 Critical Strike", "+568 Mastery"],
        ["+476 Intellect", "+1,793 Stamina", "+328 Haste", "+328 Mastery"],
        ["+338 Intellect", "+1,251 Stamina", "+280 Critical Strike", "+198 Haste"],
        ["+450 Intellect", "+1,667 Stamina", "+191 Haste", "+447 Versatility", "+273 Leech"],
        ["+1,345 Stamina", "+717 Haste", "+717 Mastery"],
        ["+1,345 Stamina", "+450 Critical Strike", "+983 Mastery"],
        ["+570 Intellect"],
        ["+570 Intellect"],
        ["+338 Intellect", "+338 Agility", "+338 Strength", "+1,251 Stamina", "+296 Critical Strike", "+182 Haste"],
        ["+1,848 Intellect", "+1,196 Stamina", "+218 Haste", "+218 Mastery"],
        ["+946 Intellect", "+1,153 Stamina", "+290 Critical Strike", "+141 Haste"]
      ];
      
      function removeCommas(str) {
        return str.replace(/,/g, "");
      }
      
      function sumStats(statsArray) {
        const sum = {};
      
        for (const subArray of statsArray) {
          for (const stat of subArray) {
            const [value, type] = stat.split(" ");
            const cleanedValue = parseInt(removeCommas(value));
      
            if (sum[type]) {
              sum[type] += cleanedValue;
            } else {
              sum[type] = cleanedValue;
            }
          }
        }
      
        return sum;
      }
      
      const totalStats = sumStats(stats);
      console.log(totalStats);
  return (
    <div>Test</div>
  )
}

export default Test