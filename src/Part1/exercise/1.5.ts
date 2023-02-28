// !wrong solution
// recursive knock out tournament that keeps track of runner up
// at the root, we have all the runner ups and we can compare them?

interface Winner {
  num: number
  runnerUps: number[]
}

// the running time for this algorithm should take into consideration
//      the number of operations done at each node (at least 2 comparisons)
//      the total number of nodes
//  total number of nodes in a binary tree: 2^height - 1
//  for an arr of length 8:
//      2^4-1 (3 is the log2 of 8 + 1 for the root node): 15 nodes, 30 ops aprox (not counting the recursion calls)
//      the time complexity would be O(n) where n refers to number of nodes in the tree?

// the assignment asks for n+log2n-2
// for an arr of 8: 8 + 3 - 2 = 6

function findLargest(nums: number[], runnerUps: number[] = []): Winner {
  if (nums.length === 1) return { num: nums[0], runnerUps }

  // divide step
  const mid = Math.floor(nums.length / 2)
  // here i'm doing some heavy computations that may ruin the O(n) of the algorithm
  const firstHalfWinner = findLargest(nums.slice(0, mid), [...runnerUps])
  const secondHalfWinner = findLargest(nums.slice(mid), [...runnerUps])

  // comparison step
  const winner = firstHalfWinner.num > secondHalfWinner.num ? firstHalfWinner : secondHalfWinner
  const loser = winner.num === firstHalfWinner.num ? secondHalfWinner : firstHalfWinner
  winner.runnerUps.push(loser.num)
  return winner
}

// this is inefficient and doesn't meet the exercise requirements
// i shouldn't do two calls to findLargest
// see solution using chatgpt
export function findSecondLargest(nums: number[]) {
  const largest = findLargest(nums)
  return findLargest(largest.runnerUps)
}
