function filterCategory() {
    const filterButton = document.querySelectorAll('.b-filter')
    const mainList = document.querySelector('ul')

    filterButton.forEach((button) => {
        button.addEventListener('click', ()=> {
            mainList.innerHTML = ''
            const filter = button.innerText

            if(filter === 'Todos'){
                criarCards(products, ul)
            }
            const filteredAlbum = filterMusic(filter)
            criarCards(filteredAlbum, ul)

        })
    })
}

function filterMusic(text){
    const albunsFiltrados = products.filter((albuns) => {
      return albuns.category.includes(text)
    })
    console.log(albunsFiltrados)
    return albunsFiltrados
}

filterCategory()