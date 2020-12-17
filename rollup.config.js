// rollup.config.js

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { terser } = require("rollup-plugin-terser");

export default [
	{
		input: "./lib/main.js",
		output: [
			{
				file: "dist/thaw-graph.cjs.js",
				format: "cjs",
				exports: "named"
			},
			{
				file: "dist/thaw-graph.esm.js",
				format: "es",
				compact: true,
				plugins: [terser()]
			},
			{
				file: "dist/thaw-graph.js",
				name: "thaw-graph",
				format: "umd",
				compact: true,
				plugins: [terser()]
			}
		]
	}
];
