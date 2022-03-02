function createHeart() {

    const heart = document.createElement('div');
    heart.classList.add('heart')
    heart.innerText = ' 💜 💓 💗'
    heart.style.left = Math.random() * 100 + 'vh';
    heart.style.right = Math.random() * 200 + 'vh';

    heart.style.animationDuration = Math.random() * 2 + 3 + 's'
    document.body.appendChild(heart)
    setTimeout(()=>{heart.remove()},5000)

}
setInterval(createHeart, 100)