function customReduce(arr, callback, initial) {
    let accumulator = initial !== undefined ? initial : arr[0];
    let startIndex = initial !== undefined ? 0 : 1;
    for (let i = startIndex; i < arr.length; i++) {
      accumulator = callback(accumulator, arr[i], i, arr);
    }
    return accumulator;
  }
let test = [5,6,7,8,9]

let example = customReduce(test,(acc,el,index)=>{
    acc[index] = el
    return acc
},{})
console.log(example);