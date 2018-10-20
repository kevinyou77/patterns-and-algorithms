function merge(arr1: any[], arr2: any[]): any[] {
  let res: any[] = [];
  let i: number = 0;
  let j: number = 0;

  while(i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      res.push(arr1[i]);      
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }

  while(i < arr1.length) {
    res.push(arr1[i]);
    i++;
  }

  while(j < arr2.length) {
    res.push(arr2[j]);
    j++;
  }

  return res;
}

function sort(arr: any[]): any[] {
  if (arr.length <= 1) return arr;
  
  let mid = Math.floor(arr.length / 2);
  let left = sort(arr.splice(0, mid));
  let right = sort(arr.splice(mid));

  return merge(left, right);
}