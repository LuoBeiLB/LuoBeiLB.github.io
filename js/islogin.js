let ut = localStorage.getItem("user_token");
// 获取相关元素
let name_user_location = document.querySelector("#name_user_location");
let pleaselogin = document.querySelector("#pleaselogin");
let login = document.querySelector("#login");
let logiout = document.querySelector("#loginout");

if (ut === null) { // 更严谨的 null 判断
    console.log("没有登录");
    name_user_location.style.display = "none"; // 隐藏未登录时需隐藏的元素
    logiout.style.display = "none"; // 隐藏登出按钮（假设未登录时不应显示）
} else {
    // 若 ut 存在（已登录），隐藏登录相关元素
    pleaselogin.style.display = "none"; // 隐藏登录提示元素
    login.style.display = "none"; // 隐藏登录按钮
    name_user_location.innerHTML = "欢迎您，"+localStorage.getItem("user_name")
}

function gotologin(){
    window.location.href = "/html/login.html"
}
function gotologout(){
    console.log('11')
    localStorage.clear();
    window.location.reload();
}