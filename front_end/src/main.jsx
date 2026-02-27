import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import App from "./App.jsx";
import { AppProvider } from "./contexts/App";
import { GoogleOAuthProvider } from "@react-oauth/google";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <QueryClientProvider client={queryClient}>
      <GoogleOAuthProvider clientId="307086193257-v5iln2iovnbrsuoe99co5scevo46qih8.apps.googleusercontent.com">
        <AppProvider>
          <App />
          <ToastContainer
            position="top-right"
            autoClose={1200}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </AppProvider>
      </GoogleOAuthProvider>
    </QueryClientProvider>
  </HashRouter>
);
