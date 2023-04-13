const campoCep = document.getElementById('cep');
const botaoEnviar = document.getElementById('envia');
const divBuscador = document.querySelector('.buscador-conteiner');

async function consultaCep(cep) {
    const consulta = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
     .then( resposta => {
        return resposta.json()
     }).catch (err => {
        console.log(err);
     })
     return consulta;
}

botaoEnviar.addEventListener('click', async (event) => {
    event.preventDefault();
    const resposta = await consultaCep(campoCep.value);
    console.log(resposta);
    divBuscador.innerHTML += `<div class="cep-buscado"><p>Mostrando pesquisa para o CEP: ${campoCep.value}</p></div`
    document.body.innerHTML +=`<div class="mostrandoDados">
      <p>Estado: ${resposta.uf}</p><br>
      <p>Localidade: ${resposta.localidade}</p><br>
      <p>DDD: ${resposta.ddd}</p><br>
      <p>Bairro: ${resposta.bairro}</p><br>
      <p>Logradouro: ${resposta.logradouro}</p><br>
    </div>`
})