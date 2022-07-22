document.addEventListener('DOMContentLoaded',init)
function init() {
    const timer = document.querySelector('h1#counter')
    const ul = document.querySelector('ul.likes')
    const minus = document.querySelector('#minus')
    const plus = document.querySelector('#plus')
    const heart = document.querySelector('#heart')
    const pause = document.querySelector('#pause')
    const form = document.querySelector('#comment-form')
    const comment = document.querySelector('#list')
    const timeObj = {}
    let isPaused = false
    // updateCounter()
    // async function updateCounter() {
    //     setInterval(() => {
    //         let currentTime = parseInt(timer.textContent)
    //         timer.textContent = currentTime+1
    //     }, 1000)
    // }

    //Update counter is paused button isn't activated
    setInterval(() => {
        if (!isPaused) {
            let currentTime = parseInt(timer.textContent)
            timer.textContent = currentTime + 1
        }    
    }, 1000)

    // When minus button is clicked
    minus.addEventListener('click', () => {
        let currentTime = parseInt(timer.textContent)
        timer.textContent = currentTime - 1
    })

    // When plus button is clicked
    plus.addEventListener('click', () => {
        let currentTime = parseInt(timer.textContent)
        timer.textContent = currentTime + 1
    })

    // When heart button is clicked
    heart.addEventListener('click', () => {
        const currentTime = timer.textContent
        console.log(timeObj)
        if (typeof timeObj[currentTime] != 'undefined') {
            const li = document.querySelector(`li#seconds_${currentTime}`)
            timeObj[currentTime] = timeObj[currentTime] + 1
            li.textContent = `${currentTime} has been liked ${timeObj[currentTime]} times.`
        } else {
            const li = document.createElement('li')
            li.id = `seconds_${currentTime}`
            timeObj[currentTime] = 1
            li.textContent = `${currentTime} has been liked ${timeObj[currentTime]} time.`
            ul.appendChild(li)
        }
    })

    // When pause button is clicked
    pause.addEventListener('click', () => {
        if (!isPaused) {
            isPaused = true;
            minus.disabled = true;
            plus.disabled = true;
            heart.disabled = true;
            pause.textContent = 'resume';
        } else {
            isPaused = false;
            pause.textContent = 'pause';
        }
    })

    // When form is submitted with comment
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const newComment = document.createElement('p')
        newComment.textContent = form.comment_input.value
        comment.appendChild(newComment)
        form.reset()
    })
}