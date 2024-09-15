/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  ReactNode,
} from "react";
import { Cases, InitialSetterStates, InitialStates } from "../types/state";

// Initial state for password generator
const initialStates: InitialStates = {
  password: "",
  length: 15,
  strength: "Weak",
  cases: [
    { title: "uppercase", value: false, displayName: "Uppercase" },
    { title: "lowercase", value: false, displayName: "Lowercase" },
    { title: "number", value: false, displayName: "Numbers" },
    { title: "symbol", value: false, displayName: "Special Characters" },
  ],
};

// Initial state setter functions (empty by default, will be updated in provider)
const initialSetterStates: InitialSetterStates = {
  setStateValue: (_newState: Partial<InitialStates>) => {},
  setCases: (_value: Cases[]) => {},
};

// Create context for state and dispatch functions
export const PasswordGeneratorContext = createContext(initialStates);
const PasswordDispatchContext = createContext(initialSetterStates);
PasswordGeneratorContext.displayName = "PasswordGeneratorContext";
PasswordDispatchContext.displayName = "PasswordDispatchContext";

// Custom hook to use password generator state
export const usePasswordGenerator = () => {
  const context = useContext(PasswordGeneratorContext);
  if (!context) {
    throw new Error("usePasswordGenerator must be used within a Provider");
  }
  return context;
};

// Custom hook to use password generator dispatch functions
export const usePasswordDispatch = () => {
  const context = useContext(PasswordDispatchContext);
  if (!context) {
    throw new Error("usePasswordDispatch must be used within a Provider");
  }
  return context;
};

// Context provider to wrap components
export const PasswordGeneratorProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [state, setState] = useState<InitialStates>(initialStates);

  // Update state based on incoming new state values
  const setStateValue = useCallback((newState: Partial<InitialStates>) => {
    setState((prevState) => ({
      ...prevState,
      ...newState,
    }));
  }, []);

  const setCases = useCallback((value: Cases[]) => {
    setState((prevState) => ({
      ...prevState,
      cases: value, 
    }))
  }, []);

  // Memoize state and setters for performance
  const value = useMemo(() => state, [state]);

  const setterValue = useMemo(
    () => ({
      setStateValue,
      setCases,
    }),
    [setStateValue, setCases]
  );

  return (
    <PasswordGeneratorContext.Provider value={value}>
      <PasswordDispatchContext.Provider value={setterValue}>
        {children}
      </PasswordDispatchContext.Provider>
    </PasswordGeneratorContext.Provider>
  );
};
