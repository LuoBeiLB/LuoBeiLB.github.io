let nav_a = document.getElementsByClassName('nav_son');
console.log(nav_a);

nav_a[0].style.background = 'var(--logo-color)';

for (let index = 0; index < nav_a.length; index++) {
    const element = nav_a[index];
    element.addEventListener('mouseover',()=>{
        console.log(`监听到悬停事件`);
        element.style.background = 'var(--logo-color)';
    })
    element.addEventListener('mouseout',()=>{
        console.log('监听到鼠标移出');
        element.style.background = '';
        
    })
    
}

let left_tool = document.querySelector('#tool')

let change = 1; //1是开启遮罩。0是关闭遮罩

left_tool.addEventListener('click',()=>{
    console.log('点击了tool')
    
    let nav = document.querySelector('#nav');
    let alfter = document.querySelector('#AFTER');
    // let left_after = window.getComputedStyle(left,":after")
    // console.log(left_after)
    console
    if(change){
        nav.style.animationName='scrollLeft'
        nav.style.left='0px'
        alfter.classList.add('removeafter')
        console.log(left);
        change = 0;
    }
    else{
        nav.style.animationName='RescrollLeft'
        nav.style.left='-200px'
        alfter.classList.remove('removeafter')
        change = 1;
    }
})

let bottom_son = document.querySelectorAll('.bottom_son');
for(let i = 0;i<bottom_son.length-1;i++){
    bottom_son[i].addEventListener('click',()=>{
        window.location.href = "./detial.html?name=" + bottom_son[i].id; 
    })
}