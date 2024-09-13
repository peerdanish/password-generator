import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { PasswordGeneratorProvider } from "./state/state.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PasswordGeneratorProvider>
      <App />
    </PasswordGeneratorProvider>
  </StrictMode>
);
