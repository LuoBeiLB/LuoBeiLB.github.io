function render(arr,dom,cssname) {
    if (arr.length == 0) {
        console.log('数组没有元素');
        dom.replaceChildren();
        return 0;
    }
    console.log(dom)
    // 销毁所有子dom
    dom.replaceChildren();
    for(let i = 0;i<arr.length;i++){
        const sondiv = createElement(cssname,arr[i]);
        dom.appendChild(sondiv);
    }
}
function createElement(style,innerH) {
    const fatherdiv = document.createElement('div');
    const sondiv = document.createElement('div');
    if (style) {
        sondiv.className=style;
    }
    if(innerH){
        sondiv.innerHTML = innerH;
        sondiv.dataset.name = innerH;
    }
    console.log(`sondiv${sondiv}`)
    fatherdiv.appendChild(sondiv);
    return fatherdiv;
}

// 添加点击事件
function addevent() {
    let bottom_son = document.querySelectorAll('.bottom_son');
    for (let index = 0; index < bottom_son.length; index++) {
        const element = bottom_son[index];
        element.addEventListener('click', (e) => {
            const dataName = e.target.closest('.bottom_son').getAttribute('data-name');
            if (dataName === 'random') {
                window.location.href = "/html/random.html";
            } else if (dataName === 'note') {
                const dataId = e.target.closest('.bottom_son').getAttribute('data-id');
                window.location.href = `/html/notedetail.html?id=${dataId}`;
            }
        })
    }
}