var loader = document.getElementById('preloader')
var slide1 = document.getElementById('slide1')
var slide2 = document.getElementById('slide2')
var counter = document.getElementById('counter')
var prev = document.getElementById('prev')
var next = document.getElementById('next')
var prevPointer = prev.firstElementChild
var nextPointer = next.firstElementChild
var correct1 = document.getElementById('correct1')
var incorrect1 = document.getElementById('incorrect1')
var correct2 = document.getElementById('correct2')
var incorrect2 = document.getElementById('incorrect2')
var showAns = document.getElementById('showAns')
var showAnsPointer = showAns.firstElementChild
var dummyPhoto = document.getElementById('dummyPhoto')
var help = document.getElementById('help')

loadFun = () => {
  loader.style.display = 'none'
}

nextSlide = () => {
  slide1.classList.replace('activeSlide', 'lastSlide')
  slide2.classList.replace('nextSlide', 'activeSlide')
  counter.innerHTML = '2'
  prev.classList.replace('halfOpacity', 'fullOpacity')
  next.classList.replace('fullOpacity', 'halfOpacity')
  prevPointer.classList.replace('noPointer', 'pointer')
  nextPointer.classList.replace('pointer', 'noPointer')
}

prevSlide = () => {
  slide2.classList.replace('activeSlide', 'nextSlide')
  slide1.classList.replace('lastSlide', 'activeSlide')
  counter.innerHTML = '1'
  prev.classList.replace('fullOpacity', 'halfOpacity')
  next.classList.replace('halfOpacity', 'fullOpacity')
  prevPointer.classList.replace('pointer', 'noPointer')
  nextPointer.classList.replace('noPointer', 'pointer')
}

correct1Show = () => {
  correct1.style.display = 'inline'
  if (correct2.style.display == 'inline') {
    showAns.style.opacity = 0.5
    showAnsPointer.classList.replace('pointer', 'noPointer')
  }
}
incorrect1Show = () => {
  incorrect1.style.display = 'inline'
  setTimeout(() => {
    incorrect1.style.display = 'none'
  }, 1000)
}

correct2Show = () => {
  correct2.style.display = 'inline'
  if (correct1.style.display == 'inline') {
    showAns.style.opacity = 0.5
    showAnsPointer.classList.replace('pointer', 'noPointer')
  }
}
incorrect2Show = () => {
  incorrect2.style.display = 'inline'
  setTimeout(() => {
    incorrect2.style.display = 'none'
  }, 1000)
}

correct3Show = () => {
  correct3.style.display = 'inline'
  if (correct4.style.display == 'inline') {
    showAns.style.opacity = 0.5
    showAnsPointer.classList.replace('pointer', 'noPointer')
  }
}
incorrect3Show = () => {
  incorrect3.style.display = 'inline'
  setTimeout(() => {
    incorrect3.style.display = 'none'
  }, 1000)
}

correct4Show = () => {
  correct4.style.display = 'inline'
  if (correct3.style.display == 'inline') {
    showAns.style.opacity = 0.5
    showAnsPointer.classList.replace('pointer', 'noPointer')
  }
}
incorrect4Show = () => {
  incorrect4.style.display = 'inline'
  setTimeout(() => {
    incorrect4.style.display = 'none'
  }, 1000)
}

showAnswers = () => {
  if (slide1.classList.contains('activeSlide')) {
    correct1Show()
    correct2Show()
  }
  if (slide2.classList.contains('activeSlide')) {
    correct1Show()
    correct2Show()
  }
}

reload = () => {
  if (slide1.classList.contains('activeSlide')) {
    correct1.style.display = 'none'
    correct2.style.display = 'none'
    incorrect1.style.display = 'none'
    incorrect2.style.display = 'none'
    showAns.style.opacity = 1
    showAnsPointer.classList.replace('noPointer', 'Pointer')
  }
  if (slide2.classList.contains('activeSlide')) {
    correct3.style.display = 'none'
    correct4.style.display = 'none'
    incorrect3.style.display = 'none'
    incorrect4.style.display = 'none'
    showAns.style.opacity = 1
    showAnsPointer.classList.replace('noPointer', 'pointer')
  }
}
replay = () => {
  if (slide1.classList.contains('activeSlide')) {
    reload()
  }
  if (slide2.classList.contains('activeSlide')) {
    prevSlide()
    reload()
  }
}

showPhoto = () => {
  dummyPhoto.style.display = 'block'
}

closePhoto = () => {
  dummyPhoto.style.display = 'none'
}

showHelp = () => {
  help.style.display = 'block'
}

closeHelp = () => {
  help.style.display = 'none'
}
