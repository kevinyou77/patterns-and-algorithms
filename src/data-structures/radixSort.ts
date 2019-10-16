/**
 * Counting sort by digit
 *
 * @param {Array<number>} array
 * @param {number} exponent
 * @returns {Array<number>}
 */
const countingSort = function(array: Array<number>, exponent: number): Array<number> {
    let bucketIndex
    const bucketsContainer = []
    const result = []
  
    // Initialize bucket
    for (let i = 0; i < 10; i++) {
      bucketsContainer[i] = 0
    }
  
    // Count frequencies per bucket
    for (let i = 0; i <array.length; i++) {
      bucketIndex = Math.floor(((array[i]) / exponent) % 10)
      bucketsContainer[bucketIndex]++
    }
  
    // Modify the count array such that each element at each index
    // stores the sum of previous counts.
    let number = 1
    while(number<10){
      bucketsContainer[number] += bucketsContainer[number-1]
      number++
    }

    // Output each object from the input sequence followed by
    // decreasing its count by 1
    for (let i = array.length - 1; i >= 0; i--) {
      bucketIndex = Math.floor(((array[i]) / exponent) % 10)
      result[--bucketsContainer[bucketIndex]] = array[i]
    }
  
    return result
}

/**
 * Radix Sort
 *
 * @param {Array<number>} array
 * @returns {Array<number>}
 */
const radixSort = function(result: Array<number>): Array<number> {
  if (result.length === 0) {
    return result
  }

  const maxValue = Math.max(...result);

  // Perform counting sort on each exponent/digit
  let exponent = 1;
  while ((maxValue) / exponent >= 1) {
    result = countingSort(result, exponent)
    exponent *= 10
  }

  return result
}