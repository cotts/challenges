// shorthand para selecionar elementos do DOM
const dom = document.querySelector.bind(document);

// realiza a busca no caminho indicado e converte o resultado em um array de objetos JSON
const getDados = path => fetch(path)
  .then(data => data.json());

// ordena a lista a partir dos hits do maior para o menor
const sortDados = path => getDados(path)
  .then(data => data.sort((a, b) => b.hits - a.hits));

// seleciona somente os 5 primeiros elementos da lista ordenada em sortDados
const getTopFive = path => sortDados(path).then(data => data.slice(0, 5));

// mapeia os dados e faz um somatório dos hits de todos os elementos
const totalHits = path => getDados(path)
  .then(data => data.map(el => el.hits))
  .then(data => data.reduce((a, b) => a + b));

// realiza a busca nos dados e retorna o resultado convertido em um objeto
const getShortUrl = (path, context) => getDados(path)
  .then(data => data.filter(item => item.url.includes(context)))
  .then(data => data.reduce((obj, i) => obj[i]));

// método para adicionar classe para um elemento
const addClass = (element, classname) => element.classList.add(classname);

// método para remover classe de um elemento
const removeClass = (element, classname) => element.classList.remove(classname);


// exporta os módulos como uma feature para utilização em outras aplicações
module.exports = {
  dom,
  getDados,
  sortDados,
  getTopFive,
  totalHits,
  getShortUrl,
  addClass,
  removeClass,
};
