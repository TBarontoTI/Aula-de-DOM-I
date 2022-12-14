

const paragrafo = document.getElementById ("paragrafo");
console.log (paragrafo.innerHTML);

const put = document.getElementById("texto");


const funcao = () => {
    
    paragrafo.innerHTML = `${put.value}`
    put.value = ""
}

put.addEventListener ("keypress", function(){
    let letra = put.value;
    console.log(letra)
})


