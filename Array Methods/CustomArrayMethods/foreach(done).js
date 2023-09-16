function customForEach(arr,callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i],i,arr)
    }
}

let array = [2,67,4,7,8,44,2]
customForEach(array,(el,index,arr) => {
    console.log(
        "el:" + el + "   " + "index:" + index 
        )
})