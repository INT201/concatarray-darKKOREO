const { template } = require('@babel/core')

function concatArray(array1, array2) {
  let arr1 = array1
  let arr2 = array2
  
  if(arr1 === undefined || arr1 === null){
    if(arr2 != undefined && arr2 != null){
      return arr2
    }else{
      return undefined
    }
  }
  if(arr2 === undefined || arr2 === null){
    if(arr1 != undefined && arr1 != null){
      return arr1
    }else{
      return undefined
    }
  }else{
    return arr1.concat(arr2);
  }

}
module.exports = concatArray



