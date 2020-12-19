const submitBtn = document.querySelector("#submit-btn");
const input = document.querySelector("#name");
//当点击按钮 submit-btn 时，在console中输出 name 中的内容
submitBtn.onclick = function () {
    console.log(input.value);
};
//在输入过程中，如果按回车键，则同样执行上一条的需求
//在输入过程中，如果按 ESC 键，则把输入框中的内容清空
input.onkeyup = function (evt) {
    let keyCode = evt.keyCode;
    if (keyCode === 13) {
        console.log(this.value);
    } else if (keyCode === 27) {
        this.value = "";
    }
};
