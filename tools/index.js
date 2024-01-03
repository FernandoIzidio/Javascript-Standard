const produtos = [];

class StockManager {
  constructor() {
    this.currentStock = [];
  }

  generateData(quantity) {
    for (let count = 1; count < quantity + 1; count++) {
      this.currentStock.push({
        Name: `Produto ${count}`,
        Preco: Math.round(Math.random() * 60 + 40),
        Quantidade: Math.floor(Math.random() * 10 + 1),
      });
    }
  }

  giveDiscount(percent) {
    this.currentStock = this.currentStock.map((produto) => {
      produto.Preco = produto.Preco - produto.Preco * (percent / 100);
      return produto;
    });
  }
}

const estoque1 = new StockManager();
estoque1.generateData(50);
console.log(estoque1.currentStock);
estoque1.giveDiscount(10);
console.log(estoque1.currentStock);
