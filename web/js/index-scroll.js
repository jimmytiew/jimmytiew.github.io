const slider = document.querySelector('.scrollcontainer');
let isDown = false;
let startX;
let scrollLeft;

// 1. 鼠标按下事件
slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active'); // 改变光标样式为“紧握”
    startX = e.pageX - slider.offsetLeft; // 记录鼠标点击的初始位置
    scrollLeft = slider.scrollLeft; // 记录当前的滚动距离
});

// 2. 鼠标离开范围事件
slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

// 3. 鼠标松开事件
slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

// 4. 鼠标移动事件（核心拖拽逻辑）
slider.addEventListener('mousemove', (e) => {
    if (!isDown) return; // 如果没按住鼠标，就不执行
    e.preventDefault(); // 防止选中文字或图片拖拽
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // *2 是为了让滑动速度快一点，你可以改成 1 或者 3
    slider.scrollLeft = scrollLeft - walk;
});

// 5. 鼠标滚轮事件（将上下滚动转换为左右滚动）
slider.addEventListener('wheel', (e) => {
    // 只有当内容确实超出了容器宽度才拦截滚轮
    if (slider.scrollWidth > slider.clientWidth) {
        e.preventDefault(); // 阻止页面默认的上下滚动
        slider.scrollLeft += e.deltaY; // 将垂直滚动量加到水平滚动上
    }
});