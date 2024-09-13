import { TiPlus } from "react-icons/ti";
import { FaCheck } from "react-icons/fa";

import lock from "../assets/lock.svg";
import { usePasswordGenerator } from "../state/state";

export const Visual = () => {
  const { cases } = usePasswordGenerator();
  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <img src={lock} alt="" className="w-9 h-9" />
      <div className="flex border-4 border-teal-800 w-24 h-8 items-center justify-center rounded-md gap-1">
        {cases.map((caseType) => {
          return !caseType.value ? (
            <TiPlus key={caseType.title} className="rotate-45"/>
          ) : <FaCheck fontSize={16} color="teal"/>;
        })}
      </div>
    </div>
  );
};
