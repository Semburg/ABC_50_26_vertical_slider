const sliderContainer = document.querySelector('.slider-container')
const rightSlide = document.querySelector('.right-slide')
const leftSlide = document.querySelector('.left-slide')
const buttonUp = document.querySelector('.up-button')
const buttonDown = document.querySelector('.down-button')

const slidesLength = rightSlide.querySelectorAll('div').length

// TEST
console.log(slidesLength)

let activeSlideIndex = 0

leftSlide.style.top = `-${(slidesLength - 1) * 100}vh`

buttonUp.addEventListener('click', () => changeSlide('up'))
buttonDown.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight

    //TEST
    console.log(sliderHeight)

    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }


    rightSlide.style.transform = `translateY(-${activeSlideIndex*sliderHeight}px)`

    leftSlide.style.transform = `translateY(${activeSlideIndex*sliderHeight}px)`
}
