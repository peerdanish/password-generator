import { useEffect, useState } from "react";
import { MdOutlineSettings } from "react-icons/md";

import { SearchBox, Slider, Title, Visual } from "./components";
import { usePasswordDispatch, usePasswordGenerator } from "./state";
import { Background } from "./components/Background";
import { CONTENT, generateRandomString } from "./utils";

function App() {
  const { length, cases } = usePasswordGenerator();
  const { setStateValue } = usePasswordDispatch();
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  const generatePassword = () => {
    const password = generateRandomString(length, cases);
    password && setStateValue({ password });
  };

  return (
    <>
      <div className="h-screen w-full absolute">
        <Background />
      </div>
      <div
        className={`flex justify-center items-center h-screen z-10 relative ${
          isAnimated ? "animate-fadeInUp" : ""
        }`}
      >
        <div className="bg-white w-full lg:min-w-max sm:max-w-md p-6 rounded-lg shadow-lg">
          <div>
            <Visual />
            <Title />
          </div>
          <SearchBox />
          <Slider />
          <div className="flex justify-center">
            <button
              className="w-full sm:w-1/2 bg-teal-500 p-3 rounded-xl mt-6 font-semibold text-white flex items-center justify-center gap-1 hover:bg-teal-900 transition duration-200"
              onClick={generatePassword}
            >
              <MdOutlineSettings className="w-6 h-6" /> {CONTENT.GENERATE}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
