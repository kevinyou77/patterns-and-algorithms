function partition(arr: any[], start = 0, end = arr.length - 1) {
  let swapIdx:number = start;
  let pivot: number = arr[start];

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      
      let temp = arr[swapIdx];
      arr[swapIdx] = arr[i];
      arr[i] = temp;
    }
  }

  let temp = arr[start];
  arr[start] = arr[swapIdx];
  arr[swapIdx] = temp;
  
  return swapIdx;
}

function mergeSort(arr: any[], left = 0, right = arr.length) {
  if (left < right) {
    let pivotIdx:number = partition(arr, left, right);
    mergeSort(arr, left, pivotIdx - 1);
    mergeSort(arr, pivotIdx + 1, right);
  }

  return arr;
}