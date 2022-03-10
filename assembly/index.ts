// The entry file of your WebAssembly module.

export function add(a: i32, b: i32): i32 {
  return a + b;
}

export function isPrime(input: u32): bool {
  if (input < 2) return false;

  for (let i: u32 = 2; i < input; i++) {
    if (input % i === 0) return false;
  }

  return true;
}
