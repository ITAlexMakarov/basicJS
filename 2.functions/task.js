// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = Infinity;
  max = -Infinity;
  sum = 0;
  for (let i = 0; i < arr.length; i++){
    sum += arr[i];
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  avg = sum / arr.length;

  return { min: min, max: max, avg: Number(avg.toFixed(2)) };
}

// Задание 2
function worker(arr) { //создание вспомогательной функции для вычисления максимума массива
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, worker) {
  let max;
  let sum = 0;
  max = sum;
  for (let i = 0; i < arrOfArr.length; i++) { //обход всех элементов массива arrOfArr
    sum += worker(arrOfArr[i]);
    if (worker(arrOfArr[i]) > max) {
      max = worker(arrOfArr[i]);
    }
  }
  return max;
}

// Задание 3
function worker2(arr) { //создание вспомогательной функции для вычисления разности максимального и минимального значения внутри массива
  let difference;
  difference = Math.max(...arr) - Math.min(...arr);
  return Math.abs(difference);
}
function makeWork(arrOfArr, worker2) {
  let max;
  let sum = 0;
  max = sum;
  for (let i = 0; i < arrOfArr.length; i++) { //обход всех элементов массива arrOfArr
    sum += worker2(arrOfArr[i]);
    if (worker2(arrOfArr[i]) > max) {
      max = worker2(arrOfArr[i]);
    }
  }
  return max;
}