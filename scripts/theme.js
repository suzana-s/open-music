function darkMode() {
    const dmbutton = document.querySelector('button')
    const dmIcon = document.querySelector('.icon')
    const html = document.querySelector('html')

    dmbutton.addEventListener('click', () => {
        html.classList.toggle('dark-mode')
        dmIcon.classList.toggle('icon')

        const themeDark = localStorage.getItem('darkmode')
        if(!themeDark){
            localStorage.setItem('darkmode', true)
        }
        if(themeDark){
            localStorage.removeItem('darkmode')
        }
        

        if(dmIcon.classList.contains('icon')){
            dmIcon.src = 'assets/img/moon.png'
        }else {
            dmIcon.src = 'assets/img/sun.png'
        }

    })
}

darkMode()