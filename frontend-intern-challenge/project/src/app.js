require('./sass/style.scss');

const util = require('./module/utils');

const topFiveLista = util.dom('.top-five-lista');
const buscaBotao = util.dom('.busca-form-botao');
const buscaTexto = util.dom('.busca-form-texto');
const buscaReset = util.dom('.busca-form-limpa');
const totalHits = util.dom('.total-hits-contador');

// caminho dos dados no servidor local
const path = 'assets/data/urls.json';

// realiza a consulta dos Top 5 elementos e insere no HTML os elementos
const listaTop = data => data.map(el => topFiveLista.innerHTML +=
  `<span class="top-five-link">${el.shortUrl}</span><span class="top-five-hits">${el.hits.toLocaleString()}</span>
  <hr>`);

util.getDados(path);

util.getTopFive(path)
  .then(data => listaTop(data));

const shortUrl = context => util.getShortUrl(path, context)
  .then(data => buscaTexto.value = data.shortUrl);

util.totalHits(path)
  .then(data => totalHits.textContent = (`${data.toLocaleString()}`));

buscaBotao.addEventListener('click', (e) => {
  e.preventDefault();
  const query = buscaTexto.value;
  util.addClass(buscaBotao, 'copiar');
  util.addClass(buscaReset, 'visivel');
  util.addClass(buscaReset, 'interaction');
  util.addClass(buscaTexto, 'resultado');
  util.addClass(buscaTexto, 'interaction');
  util.removeClass(buscaReset, 'oculto');
  shortUrl(query);
});

buscaReset.addEventListener('click', () => {
  buscaTexto.value = '';
  util.removeClass(buscaBotao, 'copiar');
  util.removeClass(buscaTexto, 'resultado');
  util.removeClass(buscaTexto, 'interaction');
  util.removeClass(buscaReset, 'visivel');
  util.removeClass(buscaReset, 'interaction');
  util.addClass(buscaReset, 'oculto');
});

