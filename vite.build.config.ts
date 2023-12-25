import { defineConfig } from "vite"

export default defineConfig({
  build: {
    lib: {
      entry: ["src/content.ts"],
      name: "Web Search Preview",
    },
  },
})
