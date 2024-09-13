// import { useContext, useState } from "react";
import { Switcher } from "./Switcher";
import { usePasswordDispatch, usePasswordGenerator } from "../state/state";
import { CONTENT } from "../utils/constants";

export const Slider = () => {
  const { length, cases } = usePasswordGenerator();
  const { setStateValue, setCases } = usePasswordDispatch();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    if (value > 8) {
      setStateValue({ length: value });
      return;
    }
    setStateValue({ length: 8 });
  };
  const handleCaseChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedCases = cases.map((caseType) => {
      if (caseType.title === event.target.name) {
        return { ...caseType, value: event.target.checked };
      }
      return caseType;
    });
    setCases(updatedCases);
  };
  return (
    <div className="flex flex-col gap-4 mt-3">
      <p>{CONTENT.LENGTH} {length}</p>
      <input
        type="range"
        min="0"
        max="100"
        step="1"
        value={length}
        onChange={handleChange}
        className="h-2 rounded-lg cursor-pointer accent-teal-900"
      />
      {cases.map((caseType) => {
        return (
          <div
            key={caseType.displayName}
            className="flex items-center justify-between gap-2"
          >
            <p>{caseType.displayName}</p>
            <Switcher
              value={caseType.value}
              handleCheckboxChange={handleCaseChange}
              name={caseType.title}
            />
          </div>
        );
      })}
    </div>
  );
};
