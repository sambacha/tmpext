import { terser } from "rollup-plugin-terser";
import commonjs from "rollup-plugin-commonjs";
import copy from "rollup-plugin-copy";
import livereload from "rollup-plugin-livereload";
import resolve from "rollup-plugin-node-resolve";
import serve from "rollup-plugin-serve";
import svelte from "rollup-plugin-svelte";
import typescript from "rollup-plugin-typescript2";
import { extension } from "./package.json";

const IS_PROD = !process.env.ROLLUP_WATCH;

const sharedPlugins = [resolve(), commonjs(), IS_PROD && terser()];

const configExtension = {
  input: "src/background/index.ts",
  output: {
    file: `${extension.outDir}/background.js`,
    name: "bg",
    format: "umd",
  },
  plugins: [typescript(), ...sharedPlugins],
};

const configPopup = {
  input: "src/popup/index.ts",
  output: {
    sourcemap: !IS_PROD,
    format: "iife",
    name: "app",
    file: `${extension.outDir}/bundle.js`,
  },
  plugins: [
    copy({
      targets: [{ src: "src/popup/index.html", dest: extension.outDir }],
    }),
    typescript(),
    svelte({
      dev: !IS_PROD,
      css: (css) => {
        css.write(`${extension.outDir}/bundle.css`, false);
      },
    }),
    ...sharedPlugins,
    !IS_PROD &&
      serve({ contentBase: [extension.outDir], port: extension.port }),
    !IS_PROD && livereload({ watch: extension.outDir }),
  ],
};

export default [configExtension, configPopup];
