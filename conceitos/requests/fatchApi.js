/*

fetch(url, serverdata) - faz um requisição na url, e permite enviar dados para o servidor, se o metódo for post
    .then() - Quando a requisição for bem sucedida/ promisse for resolvida, executar o metódo .then
    .catch()- Se a promisse retornar um error, capturar o erro


fetch tem a promisse de requisição, e promisse de conversão
 */

/**
 *
 * @param {string} url
 * @returns {string}
 */
function doRequest(url) {
  fetch(url)
    .then((response) => {
      if (response.status !== 200) return;
      return response.text();
    })
    .then((responseConverted) => {
      //Quando a promisse de conversão for resolvida, vai executar esse bloco de código
      console.log(responseConverted);
      document.querySelector("#resultado").innerHTML = responseConverted;
    })
    .catch((rejectPromisseError) => console.log(rejectPromisseError));
}

doRequest("page1.html");
doRequest("page2.html");

document.addEventListener("click", (e) => {
  /**
   * @type {HTMLElement}
   */
  const element = e.target;
  e.preventDefault();
  const tag = element.tagName.toLowerCase();
  if (tag === "a") {
    const hrefValue = element.getAttribute("href");
    doRequest(hrefValue);
  }
});
