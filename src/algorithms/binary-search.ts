function binarySearch(arr: any[], value: any): number {
  let start: number = 0;
  let end: number = arr.length - 1;
  let middle: number = Math.floor((start + end) / 2);

  while (arr[middle] !== value && start <= end) {
    if (arr[middle] > value) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }

    middle = Math.floor((start + end) / 2);
  }

  if (arr[middle] !== value)
    return -1;

  return middle;
}