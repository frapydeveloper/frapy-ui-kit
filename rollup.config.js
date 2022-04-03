import { babel } from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import scss from "rollup-plugin-scss";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "src/lib/index.ts",
    output: [
      {
        dir: "dist",
      },
    ],
    plugins: [
      scss({
        output: "dist/style.min.css",
        outputStyle: "compressed",
        failOnError: true,
        runtime: require("sass"),
      }),
      babel({
        exclude: ["node_modules/**", "src/stories"],
        presets: ["@babel/preset-react"],
      }),
      external(),
      resolve(),
      typescript(),
      terser(),
    ],
  },
];
