const completed = document.querySelector('.completed');
const btn50 = document.getElementById('btn50');
const btn70 = document.getElementById('btn70');
const btn100 = document.getElementById('btn100');
let done = 0;

btn50.addEventListener('click', () => {
    done = 50;
    completed.style.opacity = 1;
    completed.style.width = done + '%';
    completed.innerText = done + '%';
})

btn70.addEventListener('click', () => {
    done = 70;
    completed.style.opacity = 1;
    completed.style.width = done + '%';
    completed.innerText = done + '%';
})

btn100.addEventListener('click', () => {
    done = 100;
    completed.style.opacity = 1;
    completed.style.width = done + '%';
    completed.innerText = done + '%';
})