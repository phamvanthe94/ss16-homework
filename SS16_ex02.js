const arr1 = [3, 5, 1, 8, -3, 7, 8];
const arr2 = [7, 12, 6, 9, 20, 56, 89];
const arr3 = [];
const arr4 = [0, 0, 0, 0, 0, 0];

// B1 : Tìm tham số đại diện --> arr là hợp lý
// Tạo hàm với tham số đại diện arr

function minNumberOfArr(arr) {
  let min = arr[0]; // tạo biến min = phần tử đầu tiên trong mảng arr
  for (let i = 1; i < arr.length; i++) {
    // Chạy vòng lặp i
    if (arr[i] < min) {
      // i chạy qua từng phần tử , nếu phần tử nào nhỏ hơn min
      min = arr[i]; // thì min = phần tử nhỏ hơn
    }
  }
  return min; // Trả lại kết quả min
}

// B2: Chạy hàm với đối số thực tế là các mảng cho trước arr1 --> arr4
let minOfArr = minNumberOfArr(arr4);
console.log(minOfArr);
