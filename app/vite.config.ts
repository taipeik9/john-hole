import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "https://taipeik9.github.io/john-hole/",
  plugins: [react()],
});
