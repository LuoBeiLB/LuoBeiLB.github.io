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