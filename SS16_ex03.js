// B1 : Cho người dùng nhập vào 2 số

// B2: Tạo hàm sum tính tổng của hai số , tham số đại diện
// là number1 , number2
function sum(number1, number2) {
  result = number1 + number2;
  return result;
}

// B3 : Dùng câu lệnh điều kiện if/else validate trong
// trường hợp người dùng nhập không phải là  số thì báo lỗi
// Nếu nhập đúng sẽ hiện tổng của 2 số vừa nhập
while (true) {
  let input1 = Number(prompt(` Hãy nhập vào số thứ 1: `));
  let input2 = Number(prompt(` Hãy nhập vào số thứ 2: `));
  if (isNaN(input1) || isNaN(input2)) {
    alert(` Bạn nhập không phải là số! Hãy nhập lại !!`);
    continue;
  } else {
    let result = sum(input1, input2);
    alert(` Tổng của 2 số bạn nhập là : ${result}`);
    break;
  }
}
