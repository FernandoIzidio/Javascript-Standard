/*
Ajax - Asynchrounos javascript and xml, é um forma de fazer requisições utilizando javascript

Para fazer requisições asyncronas com Ajax é preciso 

xhr - new XMLHttpRequest(); - Cria um objeto usado para fazer requisições
xhr.open(method, url, ansync=bool) - Define o metódo, url, e se vai ser uma requisição de fluxo normal, ou asyncrona.
xhr.send() - Envia a requisição ao servidor// Se for post, enviar dados da requisição no send

Atributos e metódos:
  xhr.status -  Status da requisição
  xhr.responseText - Retorna response da requisição em texto.
  xhr.statusText - Retorna motivo da requisição de ter falhado, esse motivo é o statusCode de uma requisição em texto, statusText, pode retornar 404 pagina não encontrada e etc

Eventos -   
      xhr.load - Requisição concluida
      


*/

/**
 *
 * @param {Object} configRequest
 */
const request = (configRequest) => {
  const xhr = new XMLHttpRequest();
  xhr.open(configRequest.method, configRequest.url, true); // Define o metódo, url, e se a request é asyncrona
  xhr.send(); // envia request para servidor, pode enviar dados se o metódo for post

  xhr.addEventListener("load", (e) => {
    // Quando a requisição for realizada, retornar essa func, em resposta ao evento
    if (xhr.status >= 200 && xhr.status <= 300) {
      // Verifica codigo de status da request
      configRequest.sucess(xhr.responseText); // Retorna response em texto da request se for bem sucedida
    } else {
      configRequest.error(xhr.statusText); // Retorna status da request, se a requisição falhar
    }
  });
};

/**
 *
 * @param {string} method - request method
 * @param {string} url - Url request
 * @returns {{method: string, url: string, sucess: Function, error: Function}}
 */
function configResquest(method, url) {
  return {
    method: method,
    url: url,
    sucess(requestResponse) {
      const div = document.querySelector("#resultado");
      div.innerHTML = requestResponse;
    },
    error(statusCode) {
      console.log(statusCode);
    },
  };
}

document.addEventListener("click", (e) => {
  /**
   * @type {HTMLElement}
   */
  const element = e.target;
  e.preventDefault();

  const tag = element.tagName.toLocaleLowerCase();

  if (tag === "a") {
    request(configResquest("GET", element.getAttribute("href")));
  }
});
