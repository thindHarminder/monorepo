import { defineConfig } from "vite";
import { glob } from "glob";
import path from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        ...Object.fromEntries(
          glob
            .sync(["pages/**/*.ts"])
            .map((file) => [
              file.replace(/\.ts$/, ""),
              path.resolve(__dirname, file),
            ])
        ),
      },
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js",
        assetFileNames: "[name].[ext]",
      },
    },
  },
});
