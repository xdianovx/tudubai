const burger = () => {
  const burgerBtn = document.querySelector('.burger')
  const headerNav = document.querySelector('.header__nav')

  burgerBtn.addEventListener('click', () => {
    headerNav.classList.toggle('active')
    burgerBtn.classList.toggle('active')
  })
}

export default burger
