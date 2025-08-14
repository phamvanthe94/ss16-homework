// B1: Cho người dùng nhập vào ok or cancel
let useInput = prompt(` Bạn có muốn chơi game không? (ok/cancel)`)
  .trim()
  .toLocaleLowerCase();

// B2 : Tạo hàm processConfirm với tham số đại diện là answer
function processConfirm(answer) {
  let result;
  if (answer) {
    result = `Excellent. We'll play a nice game of chess.`;
    return result;
  } else {
    result = `Maybe later then.`;
    return result;
  }
}

// B3 :Sử dụng if/else tạo điều kiện cho bài toán
// Nếu người dùng nhập vào ok -> answer = true
// hiển thị ra câu trên
// Ngược lại nếu người dùng nhập vào cancel thì hiển thị ra câu dưới
if (useInput === `ok`) {
  console.log(processConfirm(true));
} else if (useInput === `cancel`) {
  console.log(processConfirm(false));
} else {
  console.log(` Bạn nhập không đúng! Hãy nhập lại!!`);
}
