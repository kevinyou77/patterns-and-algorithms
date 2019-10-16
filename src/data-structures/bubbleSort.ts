export function bubbleSort(result: number[]): number[] {
    result = result.slice();

    for(let i = 0; i < result.length; i++) {
        for(let j = 0; j < result.length - 1; j++) {

            if(result[j] > result[j + 1]) {
                let swap = result[j]
                result[j] = result[j + 1]
                result[j + 1] = swap
            }
        }
    }
    return result
} 