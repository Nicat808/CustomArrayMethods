function customFilter(arr, callback) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr)) {
        result.push(arr[i])
      }
    }
    return result
  }
let array = [1,2,3,4,5,6,7,8,9]
let test = customFilter(array,(el,index,arr)=>{
    if (el > 5) {
        return el = el * 5 
    }
})
 console.log(test);




