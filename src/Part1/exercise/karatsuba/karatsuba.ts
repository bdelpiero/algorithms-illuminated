// TODO: add proper docs to functions
// TODO: use `BigInt`

export function karatsuba(x: number, y: number): number {
  if (x.toString().length === 1 || y.toString().length === 1) {
    return x * y;
  }

  const digits = getTotalDigits(x, y);
  const paddedX = padLeft(x, digits);
  const paddedY = padLeft(y, digits);

  const mid = Math.ceil(digits / 2);
  const [a, b] = splitNumbers(paddedX, mid);
  const [c, d] = splitNumbers(paddedY, mid);
  const p = a + b,
    q = c + d;
  const ac = karatsuba(a, c),
    bd = karatsuba(b, d),
    pq = karatsuba(p, q);
  const abcd = pq - ac - bd;

  const n = digits % 2 !== 0 ? digits - 1 : digits;
  return addZerosToEnd(ac, n) + addZerosToEnd(abcd, n / 2) + bd;
}

// TODO: find better implementation using base 10 math
function splitNumbers(n: string, mid: number) {
  return [Number(n.slice(0, mid)), Number(n.slice(mid))];
}

// find a better name
function addZerosToEnd(n: number, digitsToAdd: number) {
  const totalDigits = n.toString().length + digitsToAdd;
  return Number(padRight(n, totalDigits));
}

function padLeft(n: number, totalDigits: number) {
  return String(n).padStart(totalDigits, "0");
}

function padRight(n: number, totalDigits: number) {
  return String(n).padEnd(totalDigits, "0");
}

function getTotalDigits(x: number, y: number) {
  return Math.max(x, y).toString().length;
}
