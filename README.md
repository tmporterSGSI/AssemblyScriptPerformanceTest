https://www.assemblyscript.org/quick-start.html

### Compiling and running benchmarks

0. Pre-req - An up-to-date installation of Node.js.
1. Install packages - `npm i`
2. Compile Wasm modules - `npm run asbuild`
3. Run benchmarks - `npm test`

### Project structure

AssemblyScript code is found in `/assembly/index.ts`

Tests are found in `tests/index.js`

Plain-text Wasm is found in `/build/untouched.wat` after compiling the Wasm modules.
