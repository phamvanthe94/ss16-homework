// Phân tích : Reduce
// cú pháp : arr.reduce(function(acc,curr){},0);
// acc: accumulator : Biến tích lũy   = total trong vòng lặp i
// cur : curent value : Giá trị hiện tại của phần tử đang duyệt qua = i trong for(leti)

const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [10, 20, 30, 40, 50, 60];
const arr3 = [1, 3, 5, 7, 9];

let sum = arr1.reduce(function (acc, curr) {
  return acc + curr;
}, 0);
console.log(sum);

let sum2 = arr2.reduce(function (acc, curr) {
  return acc + curr;
}, 0);
console.log(sum2);

let sum3 = arr3.reduce(function (acc, curr) {
  return acc + curr;
}, 0);
console.log(sum3);
