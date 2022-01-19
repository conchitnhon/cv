const list = document.querySelectorAll('.heading-list');

function activeLive() {
    list.forEach((item) => {
        item.classList.remove('active');
        this.classList.add('active');
    })
}

list.forEach((item) => {
    item.addEventListener('click', activeLive);
})


const information = document.querySelector('.information');
const study = document.querySelector('.study');
const love = document.querySelector('.love');

const headinglist1 = document.querySelector('.heading-list:nth-child(1)');
const headinglist2 = document.querySelector('.heading-list:nth-child(2)');
const headinglist3 = document.querySelector('.heading-list:nth-child(3)');


headinglist1.onclick = () => {
    information.classList.add('visible');
    study.classList.remove('visible');
    love.classList.remove('visible');
    console.log('click1');
}

headinglist2.onclick = () => {
    information.classList.remove('visible');
    study.classList.add('visible');
    love.classList.remove('visible');
    console.log('click2');
}

headinglist3.onclick = () => {
    information.classList.remove('visible');
    study.classList.remove('visible');
    love.classList.add('visible');
    console.log('click3');
}

const loveImg = document.querySelector('.love-img');
const loveAnimation = document.querySelector('.love-animation');

loveImg.onclick = () => {
    loveAnimation.classList.add('active')
    setTimeout(() => {loveAnimation.classList.remove('active')},3000)
}