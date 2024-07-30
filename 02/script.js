const progress = document.getElementById('progress');
// 获取按钮
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');


let currentActive = 1;

// 添加点击计数
next.addEventListener('click', () => {
    currentActive++;
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }

    update();
})

// 添加点击计数
prev.addEventListener('click', () => {
    currentActive--;
    if (currentActive < 1) {
        currentActive = 1;
    }

    update();
})


function update() {
    circles.forEach((circles, idx) => {
        if (idx < currentActive) {
            circles.classList.add('active');
        }
        else {
            circles.classList.remove('active');
        }
    })

    const actives = document.querySelectorAll('.active');

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';
    if (currentActive === 1) {
        console.log('is good');
        prev.ariaDisabled = true;
    } else if (currentActive === circles.length) {
        next.ariaDisabled = true;
    } else if (currentActive > 1 && currentActive < circles.length) {
        prev.ariaDisabled = false;
        next.ariaDisabled = false;
        console.log('is good');
    }

    console.log(prev.ariaDisabled);
    console.log(next.ariaDisabled);
}
