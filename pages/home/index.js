
function criarCards(arr, reference){
    arr.forEach((element) => {
        let template = criarTemplate(element)
        reference.append(template)
    })
}

function criarTemplate(element){
    let price = element.price
    let band = element.band
    let year = element.year
    let src = element.img
    let title = element.title

    let li = document.createElement('li')
    let div = document.createElement('div')
    let img = document.createElement('img')

    img.src = src
    div.insertAdjacentHTML('afterbegin', `
    <span>${band}</span>
        <span>${year}</span>
        <h2 class="text2 weigth600">${title}</h2>
        <div class="flex space-between">
        <h3 class="text2 weigth600">R$ ${price},00</h3>
        <button class="button">Comprar</button>
        </div>
    `)

    li.append(img, div)
    return li
}

let ul = document.querySelector('ul')
criarCards(products, ul)

//input-range 

const range = document.querySelector('input')
const value = document.querySelector('#value')

value.innerText = `Até R$ ${range.value},00 `

range.oninput = function(){
    ul.innerHTML = ''
   let valor =  value.innerHTML = this.value
   let arr = products.filter((e) => e.price <= valor)
    criarCards(arr, ul) 
}



