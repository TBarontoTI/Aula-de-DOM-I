const dados = () => {
    const dadosNome = document.getElementById ("nome");
    console.log (dadosNome.value);
    dadosNome.value = "";

    const dadosEndereco = document.getElementById ("endereco");
    console.log (dadosEndereco.value);
    dadosEndereco.value = "";

    const dadosEmail = document.getElementById ("email");
    console.log (dadosEmail.value);
    dadosEmail.value = "";
   
}

const uva = () => {
    const item = document.getElementById ("nome"); // Dados 
    const lista = document.getElementById("lista-site"); //Onde Listar
    lista.innerHTML += `<p>${item.value}</p>`;
    item.value = ""
}