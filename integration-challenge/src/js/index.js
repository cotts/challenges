var viewScript = document.createElement('script');
var script = document.createElement('script');

viewScript.type = 'text/javascript';
script.type = "text/javascript";

viewScript.src = 'js/view.js';
script.src = 'http://roberval.chaordicsystems.com/challenge/challenge.json?callback=X';

document.head.appendChild(viewScript);
document.head.appendChild(script);

/**
 * X: JSONP Callback with the response of request
 * @param {Object} response: The JSON Object with the response
 */
var X = function(response) {
  var showcase = document.getElementById('showcase');
  showcase.appendChild(this.view.historyView(response.data.reference.item));
  showcase.innerHTML+= '<hr>';
  showcase.appendChild(this.view.recommendedView(response.data.recommendation));
  this.view.createPagination('carousel-wrapper', 'widget', 'next', 'prev', 1);
}

