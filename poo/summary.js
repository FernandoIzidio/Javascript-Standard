/*

camelCase - Para variveis e funções
PascalCase - Para classes

Chaves/atributos de objetos tem que ser string ou symbol

Produzir objetos com caracteristicas e comportamentos especificos, que possam ser reutilizados(em diversos contextos) e personalizados varias vezes

First-Class-Object - São objetos que podem ser tratados como dados, e podem ser armazenados em variaveis

Um metódo de objeto pode definir comportamentos de objeto, ou configurações do objeto

object.Freeze(objeto) - Congela objeto e não permite mais criação/alteração de atributos e metódos no objeto

Object.defineProperties - Configura as caracteristicas de um ou mais atributos de um objeto

Object.keys(obj) - Retorna um array com as chaves do objeto

class Classe{

} - Cria classe no javascript

constructor(attr1, attr2){
    this.name = attr1;
    this.surname = attr2;

} - É o metodo __init__ do javascript responsável por atributos metódos e atributos dos objetos de uma classe

new ClassName(value, value2) - Cria um objeto de uma classe, ou instância um objeot de uma classe

this - É um bult-in que se refere ao contexto de execução atual, é usado para se referir ao objeto que executou determinado metódo e atributo.

function foo() {
  this -> Referencia o contextObject passado pelo bhind
}.bind(contextObject) - É um metódo usado para manipular o contexto de referência do this, o this vai passar a referência o objeto do bind

arrow functions não alteram o this.

This é o objeto que executou/vai excutar determinado metódo e atributo


throw excession - Lança exceção


Todo objeto ou classe tem comportamentos, estados e caracteristicas
Todo objeto ou classe tem metódos e atributos

Encapsulamento(Controle de Acesso):
    Public -  Todo atributo ou  metódo do js é public por padrão
    _Protected - Apenas o escopo da classe tem acesso ao metódo ou atributo
    #Private - Apenas a parent class tem acesso ao atributo

É util em conjunto com getter/property e setter's para alterar nomes de atributos e metódos sem quebrar a aplicação, ou para fazer alterações sem quebrar a aplicação, com encapsulamento cada parte do código fica isolada e é mais fácil de fazer alterações

Classmethods em javascript - Muito úteis para criar construtores de objetos de forma personlizada
o js não tem esse recurso por padrão, mas é possivel obter mesmo comportamentos com metódos estaticos

static methodDo(args) {
  new ClassObj;
}

const p1 = Pessoa.oldperson("Truco", "Ladrão") # Usa o metódo de classe, ou metódo statico para criar/instanciar um objeto de forma personalizada


Abstração - A assinatura dos metódos e atributos de uma familia de classe é definido na parent class, assim qualquer child class conseguiria uma parent class sem quebrar a aplicação

Polimorfismo - É quando duas child-class que herdam de uma mesma parent-class, tem metódos e atributos de mesma assinatura(nomefunc, argumentos e tipo de retorno), mas que se comportam de maneiras diferentes

Herança no javascript é feita por Classe1 extends Classe2, onde classe1 vai herdar todos os metódos e atributos de Classe2

Relações entre objetos:
  Associação - É quando um objeto usa outro objeto, um objeto USA o outro

  Agregação  - É quando um objeto precisa de outro objeto para executar determinado metódo - um objeto PRECISA de outro para executar determinado metódo, exemplo um objeot cliente precissa de um objeto conta corrente para fazer um saque


  Composição -  É quando o ciclo de vida de um objeto depende do ciclo de vida de outro objeto, um cliente não existe sem o objeto da classe Endereço

  Herança - É um quando um objeto é filho de outro objeto, é util quando se deseja criar uma classe que herde todos os metódos e atributos de uma outra classe

*/

class Pessoas {
  constructor(nome, sobrenome, idade, sexo) {
    this._name = nome; // Atributo protegido pelo escopo das classes
    this._surname = sobrenome;
    this._age = idade;
    this._gender = sexo;
  }

  get fullName() {
    return `${this._name} ${this._surname}`;
  }

  apresentar() {
    console.log(`Meu nome é ${this.fullName}`);
  }

  set fullName(name) {
    if (typeof name === "string") {
      let [nome, surname] = name.split(" ");
      this._name = nome;
      this._surname = surname;
    }
  }

  static oldPerson(nome, sobrenome, sexo) {
    return new Pessoas(nome, sobrenome, 60, sexo);
  }
}

class Forma {
  constructor() {}

  calcularArea() {
    throw new Error("Metódo não implementado");
  }
}

class Quadrado extends Forma {
  constructor(lado) {
    super();

    this.side = lado;
  }

  calcularArea() {
    return this.side * this.side;
  }
}

class Triangulo extends Forma {
  constructor(base, altura) {
    super();
    this.base = base;
    this.height = altura;
  }

  calcularArea() {
    return (this.base * this.height) / 2;
  }
}

const p1 = new Pessoas("Tulio", "Cagão", 45, "Masculino");
p1.apresentar(); //Executa metódo de objeto, ou comportamento do objeto p1 da classe pessoa, ou o metódo apresentar do objeto p1 da classe pessoas

const p2 = Pessoas.oldPerson("Serjão", "Pneu", 45);
p2.apresentar();
const q1 = new Quadrado(5);

console.log(q1.calcularArea());

const trian = new Triangulo(8, 4);
console.log(trian.calcularArea());
console.log(p1.fullName);
p1.fullName = "Seu Bené";
console.log(p1.fullName);
