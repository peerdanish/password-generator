// Define the types for cases
export type Cases = { title: string; value: boolean, displayName: string };

// Define the initial state type
export type InitialStates = {
  password: string;
  length: number;
  cases: Cases[];
};

// Define the setter function types
export type InitialSetterStates = {
  setStateValue: (newState: Partial<InitialStates>) => void;
  setCases: (value: Cases[]) => void;
};
