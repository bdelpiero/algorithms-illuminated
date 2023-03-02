import { karatsuba } from "./karatsuba";

describe("karatsubara", () => {
  it("should multiply one digit numbers correctly", () => {
    const a = 8,
      b = 5;
    expect(karatsuba(a, b)).toEqual(40);
  });

  it("should multiply even n-digit numbers correctly", () => {
    const a = 5678,
      b = 1234;
    expect(karatsuba(a, b)).toEqual(a * b);
  });

  it("should multiply uneven n-digit numbers correctly", () => {
    const a = 56782,
      b = 12343;
    expect(karatsuba(a, b)).toEqual(a * b);
  });

  // should test on bigger numbers. js has a low limit for accurate integer representation
  // TODO: use BigInt
  it("should multiply large numbers correctly", () => {
    const a = 3141592653589793,
      b = 2718281828459045;
    expect(karatsuba(a, b)).toEqual(a * b);
  });
});
