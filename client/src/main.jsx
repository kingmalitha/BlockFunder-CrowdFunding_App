import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";

import { Toaster } from "react-hot-toast";

import App from "./App";

import { StateContextProvider } from "./context";

import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <ThirdwebProvider
    activeChain={Sepolia}
    clientId={import.meta.env.VITE_THIRDWEB_CLIENT_ID}
  >
    <Toaster
      position="top-center"
      gutter={8}
      toastOptions={{
        duration: 5000,
      }}
    />
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider>
);
