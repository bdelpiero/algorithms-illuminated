import { secondMaxNum } from "./1.5"

describe("secondMaxNum", () => {
  it("should return the secondMax in the array", () => {
    const test1: number[] = [1, 3, 5, 8, 2, 4, 10, 11, 6]
    expect(secondMaxNum(test1).num).toEqual(10)

    const test2: number[] = [10, 3, 8, 5, 2, 4, 1, 6, 11]
    expect(secondMaxNum(test2).num).toEqual(10)
  })
})
