//=====task1=====//
function compareArrays(arr1, arr2) {
  let result;
  result = arr1.every((i,pos) => arr1[i,pos] === arr2[i,pos]) && arr2.every((i,pos) => arr1[i,pos] === arr2[i,pos]); /*сравнение элементов
  и их позиций массива1 и массива2, используя метод every, выступающей функцией высшего порядка по отношению к compareArrays()*/
  return result; // boolean
}

//=====task2=====//
function advancedFilter(arr) {
  let resultArr;
  resultArr = arr.filter(i => i > 0).filter(i => i % 3 === 0).map(i => i * 10); /*положительные числа, кратные 3 и возвращюащие 
  новый массив с отобранными числами, умноженными на 10, используя метод перебора массива filter и метод его преобразования map*/
  
  return resultArr; // array
}
