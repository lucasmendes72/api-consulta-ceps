async function consultaCep(cep) {
  const consulta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const resposta = await consulta.json();
  return resposta;
}

const campoCep = document.getElementById('cep');
const botaoEnviar = document.getElementById('envia');
const divBuscador = document.querySelector('.buscador-conteiner');
const divResult = document.querySelector('.result');

const cepRegex = /[0-9]{8}/;

botaoEnviar.onclick = async (event) => {
  event.preventDefault();

  try {
    const resposta = await consultaCep(campoCep.value);
    divResult.innerHTML = `<div class="mostrandoDados">
      <p>Logradouro: ${resposta.logradouro}</p><br>
      <p>Bairro: ${resposta.bairro}</p><br>
      <p>Localidade: ${resposta.localidade}</p><br>
      <p>Estado: ${resposta.uf}</p><br>
      <p>DDD: ${resposta.ddd}</p><br>
    </div>`;
    campoCep.value = '';

  } catch (err) {
    console.log(err);
    divResult.innerHTML = `<div class="mostrandoDados"><p>Cep Inválido! Tente Novamente</p></div>`;
  }
};


