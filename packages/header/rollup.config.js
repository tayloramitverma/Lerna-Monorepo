import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";

export default {
  input: ["src/index.tsx"],
  output: [
    {
      dir: "dist",
      entryFileNames: "[name].js",
      format: "cjs",
      exports: "named",
    },
    {
      dir: "dist/esm",
      entryFileNames: "[name].js",
      format: "esm",
      exports: "named",
    },
  ],
  plugins: [
    typescript(),
    postcss({
      plugins: [],
      extract: true,
      modules: true,
    }),
  ],
  external: ["react"],
};
