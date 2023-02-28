import { mergeSort } from "./mergeSort";

describe("mergeSort", () => {
  it("should return an empty array when given an empty array", () => {
    const arr: number[] = [];
    expect(mergeSort(arr)).toEqual([]);
  });

  it("should return the original array when given an array with one element", () => {
    const arr: number[] = [1];
    expect(mergeSort(arr)).toEqual([1]);
  });

  it("should sort an array of n numbers (where n is even) in ascending order", () => {
    const arr: number[] = [4, 2, 7, 1, 3, 5];
    expect(mergeSort(arr)).toEqual([1, 2, 3, 4, 5, 7]);
  });

  it("should sort an array of n numbers (where n is uneven) in ascending order", () => {
    const arr: number[] = [4, 2, 7, 1, 3];
    expect(mergeSort(arr)).toEqual([1, 2, 3, 4, 7]);
  });

  it("should return the same result for an already sorted array", () => {
    const arr: number[] = [1, 2, 3, 4, 7];
    expect(mergeSort(arr)).toEqual([1, 2, 3, 4, 7]);
  });

  it("should sort an array of strings in alphabetical order", () => {
    const arr: string[] = ["banana", "apple", "pear", "cherry"];
    expect(mergeSort(arr)).toEqual(["apple", "banana", "cherry", "pear"]);
  });

  it("should not modify the original array", () => {
    const arr: number[] = [4, 2, 7, 1, 3];
    mergeSort(arr);
    expect(arr).toEqual([4, 2, 7, 1, 3]);
  });
});
