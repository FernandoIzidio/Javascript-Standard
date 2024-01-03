"use strict";

function _typeof(o) {
  "@babel/helpers - typeof";
  return (
    (_typeof =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (o) {
            return typeof o;
          }
        : function (o) {
            return o &&
              "function" == typeof Symbol &&
              o.constructor === Symbol &&
              o !== Symbol.prototype
              ? "symbol"
              : typeof o;
          }),
    _typeof(o)
  );
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : String(i);
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var produtos = [];
var StockManager = /*#__PURE__*/ (function () {
  function StockManager() {
    _classCallCheck(this, StockManager);
    this.currentStock = [];
  }
  _createClass(StockManager, [
    {
      key: "generateData",
      value: function generateData(quantity) {
        for (var count = 1; count < quantity + 1; count++) {
          this.currentStock.push({
            Name: "Produto ".concat(count),
            Preco: Math.round(Math.random() * 60 + 40),
            Quantidade: Math.floor(Math.random() * 10 + 1),
          });
        }
      },
    },
    {
      key: "giveDiscount",
      value: function giveDiscount(percent) {
        this.currentStock = this.currentStock.map(function (produto) {
          produto.Preco = produto.Preco - produto.Preco * (percent / 100);
          return produto;
        });
      },
    },
  ]);
  return StockManager;
})();
var estoque1 = new StockManager();
estoque1.generateData(50);
console.log(estoque1.currentStock);
estoque1.giveDiscount(10);
console.log(estoque1.currentStock);
