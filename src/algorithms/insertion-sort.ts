const insertionSort = (arr: any[]) => {
  for (let i = 0; i < arr.length; i++) {
    let currentValue = arr[i];
    let j = i - 1;

    while(j >= 0 && arr[j] > currentValue) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = currentValue;
  };

  return arr;
};

console.log(insertionSort([5,8,4,6,2,6,0,23,21,55,20,22]));