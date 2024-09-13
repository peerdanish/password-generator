import { CONTENT } from "../utils/constants";

export const Title = () => {
  return (
    <div className="max-w-md text-center mt-5 mx-auto">
      <h1 className="text-2xl font-semibold">{CONTENT.TITLE}</h1>
      <p>{CONTENT.SUBTITLE}</p>
    </div>
  );
};
