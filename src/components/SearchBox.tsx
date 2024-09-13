import { useState } from "react";
import { IoCopy } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";

import { usePasswordGenerator } from "../state/state";
import { CONTENT } from "../utils/constants";

export const SearchBox = () => {
  const [copyText, setCopyText] = useState(CONTENT.COPY);
  const [isCopied, setIsCopied] = useState(false);
  const { password } = usePasswordGenerator();

  const handleCopy = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      setCopyText(CONTENT.COPIED);
      setIsCopied(true);
      setTimeout(() => {
        setCopyText(CONTENT.COPY);
        setIsCopied(false);
      }, 2000);
    }
  };

  return (
    <div className="flex items-center gap-3 mt-3 text-white max-w-lg">
      <div
        className=" h-9 p-3 flex items-center bg-white text-black border border-gray-300 rounded-xl 
        overflow-hidden whitespace-nowrap flex-grow"
      >
        {password || (
          <span className="text-gray-400">{CONTENT.GENERATED_PASSWORD}</span>
        )}
      </div>
      <button
        className={`flex items-center gap-2 ${
          password ? "bg-teal-500" : "bg-gray-300"
        } p-3 rounded-xl h-9`}
        onClick={handleCopy}
        disabled={!password}
      >
        {isCopied ? <FaCheck /> : <IoCopy />} {copyText}
      </button>
    </div>
  );
};
