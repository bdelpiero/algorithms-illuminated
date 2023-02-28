export function mergeSort<T>(arr: T[]): T[] {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const firstHalf = mergeSort(arr.slice(0, mid));
  const secondHalf = mergeSort(arr.slice(mid));

  return merge(firstHalf, secondHalf, arr.length);
}

function merge<T>(firstHalf: T[], secondHalf: T[], n: number): T[] {
  const sortedArr: T[] = [];

  let i = 0,
    j = 0,
    k = 0;

  while (k < n) {
    if (
      j >= secondHalf.length ||
      (i < firstHalf.length && firstHalf[i] < secondHalf[j])
    ) {
      sortedArr[k] = firstHalf[i];
      i++;
    } else {
      sortedArr[k] = secondHalf[j];
      j++;
    }
    k++;
  }

  return sortedArr;
}

// cleaner implementation.
// when no more listA.length o listB.length, push to the other one
// function merge<T>(listA: T[], listB: T[]): T[] {

//   const merged: T[] = [];

//   while (listA.length && listB.length) {

//       if (listA[0] <= listB[0])
//           merged.push(listA.shift());
//       else
//           merged.push(listB.shift());
//   }

//   while (listA.length > 0) merged.push(listA.shift());
//   while (listB.length > 0) merged.push(listB.shift());

//   return merged;
// }
