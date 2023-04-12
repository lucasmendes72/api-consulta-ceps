const campoCep = document.getElementById('cep');
const botaoEnviar = document.getElementById('envia');

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
})