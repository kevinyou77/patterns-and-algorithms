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

console.log(mergeSort([5,8,4,6,2,6,0,23,21,55,20,22]));
console.log(mergeSort(['z','b','a','x','c','f']));