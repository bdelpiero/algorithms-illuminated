// recursive knock out tournament that keeps track of runner up
// at the root, we have all the runner ups and we can compare them?

interface Winner {
  num: number
  runnerUps: number[]
}

function maxNum(nums: number[], runnerUps: number[] = []): Winner {
  if (nums.length === 1) return { num: nums[0], runnerUps }

  // divide step
  const halfIndex = Math.floor(nums.length / 2)
  // here i'm doing some heavy computations that may ruin the O(n) of the algorithm
  const firstHalfWinner = maxNum(nums.slice(0, halfIndex), [...runnerUps])
  const secondHalfWinner = maxNum(nums.slice(halfIndex), [...runnerUps])

  // comparison step
  const winner = firstHalfWinner.num > secondHalfWinner.num ? firstHalfWinner : secondHalfWinner
  const loser = winner.num === firstHalfWinner.num ? secondHalfWinner : firstHalfWinner
  winner.runnerUps.push(loser.num)
  return winner
}

export function secondMaxNum(nums: number[]) {
  const maxNumWithRunnerUps = maxNum(nums)
  return maxNum(maxNumWithRunnerUps.runnerUps)
}
