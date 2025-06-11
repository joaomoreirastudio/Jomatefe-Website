import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
    // ...
    build: {
        outDir: "dist",
        sourcemap: true,
    },
    server: {
        fs: {
            allow: [".", "./src"],
        },
    },
});
