function customFind(arr,callback) {
    for (let i = 0; i < arr.length; i++) {
        const isTrue = callback(arr[i],i,arr)
        if (isTrue) {
            return arr[i]
        }
    }
}
 
let array = [5,7,9,6,96]

customFind(array,(el,index,arr) => {
    if (el < 6) {
        console.log(index);
    }
})
