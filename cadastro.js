const inputCep = document.getElementById('cep-autocomplete');
const inputLogradouro = document.getElementById('logradouro-id');
const inputNumero = document.getElementById('numero-id');
const inputComplemento = document.getElementById('complemento-id');
const inputBairro = document.getElementById('bairro-id');
const inputCidade = document.getElementById('cidade-id');


async function consultaCep(cep) {
    const consulta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const resposta = await consulta.json();
    return resposta;
  }

inputCep.addEventListener('focusout', async () => {
    try {
        const resposta = await consultaCep(inputCep.value)
        console.log(resposta)
        inputLogradouro.value = resposta.logradouro;
        inputComplemento.value = resposta.complemento;
        inputBairro.value = resposta.bairro;
        inputCidade.value = resposta.localidade;
    } catch (erro){
        console.log(erro)
    }
})

