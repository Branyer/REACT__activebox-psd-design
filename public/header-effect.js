const header = document.querySelector('header');
const divHeader = document.querySelector('.header')

window.addEventListener( 'scroll', () => {

    if(window.scrollY > 20) {
      header.classList.remove('bg-transparent');
      header.classList.add('bg-blue');
      divHeader.classList.remove('border')
    } else {
      header.classList.remove('bg-blue');
      header.classList.add('bg-transparent');
      divHeader.classList.add('border')    
    }
  
  })