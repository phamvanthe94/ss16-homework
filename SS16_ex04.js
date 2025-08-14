// Phân tích : hàm isEven , tham số number
// Số chẵn : number %2 === 0
// Nếu là số chẵn number = true
// ngược lại number = false
// return

// B1 : Tạo hàm isEven
function isEven(number) {
  let isNumber;
  if (number % 2 === 0) {
    isNumber = true;
    return isNumber;
  } else {
    isNumber = false;
    return isNumber;
  }
}

while (true) {
  // B2: Cho người dùng nhập vào 1 số nguyên bất kỳ
  let input = Number(prompt(` Hãy nhập vào 1 số nguyên bất kỳ `));
  // B3 : Validate giá trị nhập vào của người dùng có phải là
  // Số hay không ?
  if (isNaN(input)) {
    alert(` Bạn nhập vào không phải là số! Hãy nhập lại !!`);
    continue;
    // Nếu người dùng là số , cho hàm vào với đối số thực tế là input
    // Hiển thị kết quả bằng alert()
  } else {
    let result = isEven(input);
    alert(result);
    break;
  }
  // B4 : Lắp vòng lặp while(true) vào để khi người dùng nhập không phải số
  // Cho người dùng nhập lại
}
