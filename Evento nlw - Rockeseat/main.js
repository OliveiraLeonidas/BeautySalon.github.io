// DOM - Document, Object Model
//document.body.style.background = 'violet'

//constantes
const nav = document.querySelector('#header nav') //query = pesquisar
const toggle = document.querySelectorAll('nav .toggle') //nav .toggle - em nav, procurar 'toggle'

// para abrir e fechar o menu do canto superior direto
for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

//quando clicar em um item do menu, fechar o menu
const links = document.querySelectorAll('nav ul li a')
for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

// mudar o header da página quando tiver scroll//

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // scroll é maior que a altura do header
    header.classList.remove('scroll')
  }
})
