let input = document.getElementById('input')
let btn = document.getElementById('btn')
let contenedorDeResultados = document.getElementById('contenedor-de-resultados')

let valores = []
let insertarValores
btn.addEventListener('click',(e) =>{
    let molde = {
        valor:input.value
    }
  // molde.valor =input.value
   valores.push(molde)
   ordenar()
   verifica()
   pintarResultado()
   console.log(input.value);
    console.log(e)
    console.log(valores);
})

function ordenar (){ let result = valores.sort((a, b) =>{
        if (a.valor > b.valor ) {
            return 1
        }else {
            return -1
     } 
})
}function verifica () {
    const matrix = valores.every((verificar)=>{
     if (verificar.valor.includes('a')) {   
        return 1
        }
       
   })
   console.log(matrix)
  }
  function pintarResultado() {
    valores.forEach((valor) => {
        insertarValores = `
        <h4>ultimo valor insertado</h4>
        <p>${input.value}</p>
        <br>`
        contenedorDeResultados.innerHTML = insertarValores
    });
  }

