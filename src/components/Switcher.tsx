type Props = {
  value: boolean;
  name: string;
  handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Switcher = ({ value, name, handleCheckboxChange }: Props) => {
  return (
    <label className="flex cursor-pointer select-none items-center">
      <div className="relative">
        <input
          type="checkbox"
          checked={value}
          onChange={handleCheckboxChange}
          className="sr-only"
          name={name}
        />
        <div className={`block h-6 w-12 rounded-full ${value ? "bg-teal-500" : "bg-gray-300"}`}></div>
        <div
          className={`absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition ${
            value ? "translate-x-6" : ""
          }`}
        ></div>
      </div>
    </label>
  );
};
