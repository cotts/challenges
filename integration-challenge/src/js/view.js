var view = function () {
  'use strict';

  /**
   * urlProtocol : return the protocol used on the window.
   * @param {Object} win - windows scope
   * @returns protocol (http: | https:)
   */
  var urlProtocol = function (win) {
    var url = win.location.href;
    return url.split('/')[0];
  }

  /**
   * reduceText: Reduce the text to fit inside the widget
   * @param {String} text
   * @returns the string with ellipsiss if the input has more than 100 characters
   */
  var reduceText = function (text) {
    if (text.length > 100) {
      return text.substring(0, 100) + '...';
    }
    return text;
  }

  /**
   * widget: Receive a Object with the standard values and create a template
   * @param {Object} product
   * @returns The template used on the showcase
   */
  var widget = function (product) {
    var oldPrice = (product.oldPrice) ? '<span class="product-old-price">De: ' + product.oldPrice + '</span>' : '';
    return '<div class="widget">'
      + '<a href="' + urlProtocol(window) + product.detailUrl + '">'
      + '<div class="thumbnail">'
      + '<img src=' + urlProtocol(window) + product.imageName + '></img>'
      + '</div>'
      + '<span class="product-info">' + reduceText(product.name) + '</span>'
      + oldPrice
      + '<div class="product-price">'
      + '<span>Por: <strong class="price">' + product.price + '</strong></span>'
      + '<span class="product-payment">' + product.productInfo.paymentConditions + '</span>'
      + '<span class="product-tax">sem juros</span>'
      + '</div>'
      + '</a>'
      + '</div>';
  };

  /**
   * setTitle: used to create a standard title template for a showcase
   * @param {String} title
   * @returns The Title inside a template
   */
  var setTitle = function (title) {
    return '<h3 class="view-title">' + title + '</h3>'
  };

  /**
   * historyView: Create a Module with the visited product.
   * Use the widget template inside to generate the Product Template
   * @param {Object} view
   * @returns The History view template with the product
   */
  var historyView = function (view) {
    var visitedView = document.createElement('div');
    visitedView.setAttribute('class', 'history');
    visitedView.innerHTML = setTitle('Você visitou:')
      + '<div class="history-product">'

      + widget(view)
      + '</div>';
    return visitedView;
  }

  /**
   *  carousel : Create the list of products to be used on recommendations
   * @param {Array} views
   * @returns All the Objects inside the Array with the widget Template
   */
  var carousel = function (views) {
    var list = '';
    for (var i = 0; i < views.length; i++) {
      list += widget(views[i]);
    }
    return list;
  };

  /**
   *recommendedView: Generate the recommended products inside a carousel
   * @param {Array} viewsList
   * @returns the DOM element with the carousel with arrows to be used on pagination
   */
  var recommendedView = function (viewsList) {
    var recommended = document.createElement('div');
    recommended.setAttribute('class', 'recommended');
    recommended.innerHTML = setTitle('e talvez se interesse por:')
      + '<div class="carousel">'
      + '<div id="prev"> <i class="arrow-prev"></i></div>'
      + '<div class="carousel-wrapper">'
      + carousel(viewsList)
      + '</div>'
      + '<div id="next"> <i class="arrow-next"></i></div>'
      + '</div>';
    return recommended;
  };

  /**
   * createPagination: Generate the events to paginate the products on recommended View
   * @param {String} wrapper: the DOM element that will be used to paginate the products
   * @param {String} reference: the DOM element with the size of one product to be used as product pagination length
   * @param {String} preview: The DOM element to be used as button to see previows products inside carousel
   * @param {String} next: The DOM element to be used as button to see the next products inside carousel
   * @param {number} amount: The value of pagination length
   */
  var createPagination = function (wrapper, reference, preview, next, amount) {
    var carousel = window.document.getElementsByClassName(wrapper);
    var scrollAmount = window.document.getElementsByClassName(reference)[0];
    window.document.getElementById(preview).addEventListener('click', function () {
      carousel[0].scrollLeft += (scrollAmount.clientWidth * amount);
    });
    window.document.getElementById(next).addEventListener('click', function () {
      carousel[0].scrollLeft -= (scrollAmount.clientWidth * amount);
    });
  };

  return {
    historyView: historyView,
    recommendedView: recommendedView,
    createPagination: createPagination

  }
}();
