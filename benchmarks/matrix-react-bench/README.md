React Microbenchmark using Matrix/Element
=========================================

NOTE: This is very much a WORK IN PROGRESS.

This is a JS-focused micro-benchmark of the React framework using the
matrix-react-sdk library to provide a more "real-world" example while still
being focused and repeatable(-ish).

The benchmark mocks out some chat events and then switches rooms back and force
rapidly. The matrix-react-sdk uses a different key per room which triggers a
nearly complete update in React.

An additional goal is to be able to run this directly in the SpiderMonkey
js-shell using a minimal polyfill/mock of the DOM APIs. This is easier to do
detailed performance testing with and gives additional data points on how much
the DOM API interaction plays a role in performance of this.


Instructions
------------
1) Setup NodeJS/NPM tools. If building Firefox, you can also use the version
   from `mach boostrap` which can be found in `$HOME/.mozbuild/node/bin`.
2) Run `npm install` to fetch dependencies using the `package.json` file.
3) Run `npm run build` to generate the WebPack/Babel output files.
4) Optionally host the HTML and dist/main.js file using a simple server (such as `python3 -m http.server`)
5.a) Load the matrix_demo.html page and check console after done.
5.b) Run js-shell on dist/main.js and look at output.

Key Files
---------
matrix_demo.html - This loads the main JS file and has dummy CSS.
babel.config.json - Controls the level of transpiling. Modelled after the practical settings used by the Element Web (Matrix) client.
webpack.config.js - WebPack configuration to enable Babel. It also uses the `null-loader` to disable a eagerly loaded modules of the matrix-element-sdk to avoid features we are not focused on such as WASM compile time. This can be used to switch between production and development configurations.
package.json - Dependency files for build and execution. Mostly just Babel and React packages.
dist/main.js - The main (generated) JS file that is loaded in browser or run directly in a JS shell.
src/shell-polyfill-hack.js - Mocked functions for SpiderMonkey shell with just enough detail to run the application. This is ignored in browser environments which use the real DOM APIs.

Running in Shell
----------------
The `dist/main.js` file can be run directly in the SpiderMonkey shell. It will
automatically mock some web-platform APIs to allow things to run (mostly)
correctly. This polyfill will use plain-objects as DOM nodes and maintains the
parent/child relationships as well as small amounts of additional state. This
_will_ have  different performance characteristics than a real DOM
implementation.

If the matrix code encounters errors, it may render an error page instead of
throwing an exception to the top level. When making changes, it is worth dumping
the mock DOM tree and seeing if it is reasonable. The `src/DumpDOMTree.js` code
can help out here. Note that Promise microtasks need to be flushed for an issued
render to complete.
