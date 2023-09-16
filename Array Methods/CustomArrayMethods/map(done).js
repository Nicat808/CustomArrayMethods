function customMap(arr, callback) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
      switch (callback(arr[i], i, arr)) {
        case false:
        case null:
        case true:
          return arr
        case undefined:
          result.push(arr[i])
          break
        default:
          result.push(callback(arr[i], i, arr))
      }
    }
    return result
  }
let array = [1,2,3,4,5,6,7,8,9]
let test = customMap(array,(el,index,arr)=>{
    if (el > 8) {
        return el = el * 5 
    }
})
 console.log(test)