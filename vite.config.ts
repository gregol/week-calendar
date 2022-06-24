import { defineConfig, UserConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config: UserConfig = {
    plugins: [
      react()
    ]
  };

  // draft-js need this for serve command
  switch (command) {
    case "serve":
      config.define = {
      };
      break;
    default:
      break;
  }

  return config;
});