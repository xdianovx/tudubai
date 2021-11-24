import 'focus-visible'
import Choices from 'choices.js'
import MicroModal from 'micromodal'
import Readmore from 'readmore-js'
import Inputmask from 'inputmask'
import { Fancybox } from "@fancyapps/ui";
import burger from './modules/burger'
import slider from "./modules/slider";

burger()
slider()

const headerLangDrop = document.querySelector('.header__lang_selector')
headerLangDrop.addEventListener('click', () => {
  headerLangDrop.classList.toggle('active')
})

const selects = document.querySelectorAll('.select')
selects.forEach((item) => {
  new Choices(item, {
    searchEnabled: false,
    classNames: {
      containerOuter: 'select choices',
    },
  })
})

MicroModal.init({
  disableScroll: true, // [6]
  disableFocus: true, //
})

new Readmore('.read-more', {
  speed: 75,
  collapsedHeight: 72,
  moreLink: '<a href="#" class="more-link">Подробнее</a>',
  lessLink: '<a href="#" class="more-link">Свернуть</a>',
})


const accordions = document.querySelectorAll('.accordion')

const openAccordion = (accordion) => {
  const content = accordion.querySelector('.accordion__content')
  accordion.classList.add('accordion__active')
  // content.style.maxHeight = content.scrollHeight + "px"
  content.style.maxHeight = 'none'
}

const closeAccordion = (accordion) => {
  const content = accordion.querySelector('.accordion__content')
  accordion.classList.remove('accordion__active')
  content.style.maxHeight = null
}

accordions.forEach((accordion) => {
  const intro = accordion.querySelector('.accordion__intro')
  const content = accordion.querySelector('.accordion__content')

  intro.onclick = () => {
    if (content.style.maxHeight) {
      closeAccordion(accordion)
    } else {
      accordions.forEach((accordion) => closeAccordion(accordion))
      openAccordion(accordion)
    }
  }
})

Inputmask({
  mask: '+7 (999) 999 99 99',
}).mask('input[type="tel"]')

let today = new Date()
let dd = today.getDate()
let mm = today.getMonth() + 1 // January is 0!
const yyyy = today.getFullYear()

if (dd < 10) {
  dd = `0${dd}`
}

if (mm < 10) {
  mm = `0${mm}`
}

today = `${yyyy}-${mm}-${dd}`
document.getElementById('datefield').setAttribute('min', today)
document.getElementById('datefield').value = today
