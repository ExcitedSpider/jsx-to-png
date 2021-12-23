import ts from "rollup-plugin-ts";
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from "rollup-plugin-terser";

export default {
  input: "index.ts",
  output: [
    {
      dir: "lib",
      format: "cjs",
      sourcemap: true,
    },
    {
      dir: "es",
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [commonjs(), nodeResolve(), ts({}), terser()],
  external: ["react-dom/server", "react-dom"],
};