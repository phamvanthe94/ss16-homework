// Phân tích :
//  Chuỗi ký tự đối xứng là gì ?
// là chuỗi ký tự đọc xuôi hay ngược đều giống nhau
// Vd : 12321 , madam , aha...
// dùng split để tách  rồi , rồi reverse  để đảo ngược
// rồi lại join lại xem có giống chuỗi ban đầu không

// B1: Cho người dùng nhập chuỗi ký tự bằng hàm prompt()
let input = prompt(` Hãy nhập vào chuỗi ký tự :`);

// B2: Viết hàm isPalindrome() để kiểm  tra chuỗi đối xứng vì
// là chuỗi nên sẽ lấy tham số đại diện là string

function isPalindrome(str) {
  let reverse = str.split(``).reverse(``).join(``);
  if (str === reverse) {
    alert(` Chuỗi bạn nhập là chuỗi đối xứng!`);
    return;
  } else {
    alert(` Chuỗi bạn nhập KHÔNG PHẢI chuỗi đối xứng!`);
    return;
  }
}

// B3 : sử dụng hàm để kiểm tra
isPalindrome(input);
