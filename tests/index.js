const Benchmark = require("benchmark");
const wasmModule = require("../index.js");

const suite = new Benchmark.Suite();

const prime = 88896391;

suite
  .add("Wasm#isPrime", () => {
    wasmModule.isPrime(prime);
  })
  .add("JS#isPrime", () => {
    isPrime(prime);
  })
  .on("cycle", (event) => console.log(event.target.toString()))
  .run({ async: true });

function isPrime(input) {
  if (input < 2) return false;

  for (let i = 2; i < input; i++) {
    if (input % i === 0) return false;
  }

  return true;
}
