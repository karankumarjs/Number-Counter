let upperBtn = document.querySelector('#upper-controller')
let lowerBtn = document.querySelector('#lower-controller')
let numberList = document.querySelector('.number-list');
let audioSound = new Audio('./sound.wav')
// Increment

// Add the number on click

lowerBtn.addEventListener('click', function () {
    toggleNumberActive();
    addNumber();
    toggleNumberActive();
    scrollListUpward()
    audioSound.play();
})

// Add the number on click

window.addEventListener('keyup', function (e) {
    if (e.code == 'ArrowDown') {
        toggleNumberActive();
        addNumber();
        toggleNumberActive();
        scrollListUpward()
        audioSound.play();

    }
})


// Decrement

// Subtract the number on click
upperBtn.addEventListener('click', function () {

    if (numberList.children.length > 2) {
        delNumber();
        toggleNumberDeactive()
        toggleNumberActive()
        audioSound.play();
    }

})

// Subtract the number on up key

window.addEventListener('keyup', function (e) {
    console.log(e.code);
    if (e.code == 'ArrowUp') {
        if (numberList.children.length > 2) {
            delNumber();
            toggleNumberDeactive()
            toggleNumberActive()
            audioSound.play();
        }


    }
})

// Disable the mouse wheel on numbers

numberList.addEventListener('wheel', function (e) {
    e.preventDefault();
    e.stopPropagation();
})

function addNumber() {
    const newNum = document.createElement('p')
    newNum.innerText = eval(parseInt(numberList.lastElementChild.innerText) + 1);
    numberList.appendChild(newNum)
}

function toggleNumberActive() {
    let numberListChildrens = numberList.children;
    let currentActiveNumber = numberListChildrens[eval((numberList.children.length) - 2)];
    currentActiveNumber.style.transition = "0.5s";
    currentActiveNumber.classList.toggle('active');
    console.log(currentActiveNumber);
}

function scrollListUpward() {
    numberList.scrollBy(0, 128)

}

// Decrement
function delNumber() {
    numberList.lastElementChild.remove()


}

function toggleNumberDeactive() {
    let numberListChildrens = numberList.children;
    let currentDeactiveNumber = numberListChildrens[eval((numberList.children.length) - 1)];
    currentDeactiveNumber.style.transition = "0.7s";
    currentDeactiveNumber.classList.toggle('active');
}

