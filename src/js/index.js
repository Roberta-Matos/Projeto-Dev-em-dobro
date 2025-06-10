// Passo 1 - Selecionar elementos do HTML
const botaoFiltrar = document.querySelector('.btn-filtrar');
const campoCategoria = document.querySelector('#categoria'); // Corrigido seletor
const campoPrecoMaximo = document.querySelector('#preco'); // Corrigido seletor

// Passo 2 - Adicionar evento de clique ao botão
botaoFiltrar.addEventListener('click', aplicarFiltros);

// Função para aplicar filtros às cartas
function aplicarFiltros() {
  const categoriaSelecionada = campoCategoria.value.trim();
  const precoMaximoSelecionado = parseFloat(campoPrecoMaximo.value);

  const cartas = document.querySelectorAll('.carta');
  
  cartas.forEach((carta) => {
    const categoriaCarta = carta.dataset.categoria.toLowerCase();
    const precoCarta = parseFloat(carta.dataset.preco);

    const correspondeCategoria = categoriaSelecionada === "" || categoriaSelecionada.toLowerCase() === categoriaCarta;
    const dentroDoPreco = isNaN(precoMaximoSelecionado) || precoCarta <= precoMaximoSelecionado;

    carta.classList.toggle('mostrar', correspondeCategoria && dentroDoPreco);
    carta.classList.toggle('esconder', !(correspondeCategoria && dentroDoPreco));
  });
}

