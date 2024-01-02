/**
 * Função para fazer requisição com promisses
 * @param {{
 * method: string
 * url: string
 * }} configRequest
 * @returns {Promise}
 */
const request = (configRequest) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(configRequest.method, configRequest.url, true);
    xhr.send();

    xhr.addEventListener("load", (e) => {
      if (xhr.status >= 200 && xhr.status <= 200) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.statusText);
      }
    });
  });
};

document.addEventListener("click", (e) => {
  /**
   * @type {HTMLElement}
   */
  const element = e.target;
  const tag = element.tagName.toLowerCase();

  if (tag === "a") {
    const valueHref = element.getAttribute("href");

    request({
      method: "GET",
      url: valueHref,
    })
      .then((response) => {
        const div = document.querySelector("#resultado");
        div.innerHTML = response;
      })
      .catch((error) => {
        console.log(error);
      });
  }
});

/**
 *
 * @param {string} method
 * @param {string} url
 */
async function doRequest(method, url) {
  try {
    const response = await request({ method: method, url: url }); //Pausa a execução da função, aguarda resolvimento, rejeição da promisse
  } catch (error) {
    alert(error);
  }
}

doRequest("GET", "page2.html");
