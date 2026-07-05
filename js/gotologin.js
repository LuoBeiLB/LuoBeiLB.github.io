// 提取基础 URL
const BASE_URL = 'http://localhost:3000';

let other = document.querySelector("#other");
let login = document.querySelector("#login");
let username = document.querySelector("#username");
let register = document.querySelector("#register");
let font = document.querySelector("#font");
let backlogin = document.querySelector("#backlogin");

// 封装获取表单数据的函数
function getFormData(fields) {
    const formData = new URLSearchParams();
    fields.forEach(field => {
        const value = document.querySelector(`#${field}`).value;
        formData.append(field, value);
    });
    return formData;
}

// 封装发起 POST 请求的函数
async function postRequest(url, formData) {
    try {
        const response = await fetch(`${BASE_URL}${url}`, {
            method: "post",
            body: formData
        });
        return response;
    } catch (error) {
        console.error('请求出错:', error);
        throw error;
    }
}

// 登录函数
async function fn_login() {
    const formData = getFormData(['password', 'email']);
    try {
        const response = await postRequest('/auth/login', formData);
        const data = await response.json();
        localStorage.setItem("user_token", data.access_token);
        localStorage.setItem("user_name", data.username);
        window.location.href = "/index.html";
    } catch (error) {
        console.error('登录出错:', error);
    }
}

// 注册函数
async function gotoregist() {
    const formData = getFormData(['password', 'email', 'username']);
    try {
        const response = await postRequest('/user/register', formData);
        if (response.status === 200) {
            // 注册成功
            const other = document.querySelector("#other");
            const login = document.querySelector("#login");
            const username = document.querySelector("#username");
            const register = document.querySelector("#register");
            const font = document.querySelector("#font");
            font.innerHTML = "登录";
            login.style.display = "block";
            username.style.display = "none";
            register.style.display = "none";
            other.style.display = "flex";
            alert("注册成功");
        }
    } catch (error) {
        console.error('注册出错:', error);
    }
}

// 切换到注册页面函数
function fn_register() {
    font.innerHTML = "注册";
    login.style.display = "none";
    username.style.display = "block";
    register.style.display = "block";
}

function fn_backlogin() {
    font.innerHTML = "登录";
    login.style.display = "block";
    username.style.display = "none";
    register.style.display = "none";
}
