function mostrarResultados(results) {
  // Recibe la data que le pasamos en main
  const contenedor = document.querySelector(".results");
  const template = document.getElementById("result-item-template");

  for (const resultados of results) {
    // console.log(resultados);
    const titleEl = template.content.querySelector(".result-item-title");
    titleEl.textContent = resultados.title;

    // const resultsEl = document.querySelector(".results-count")
    // resultsEl.textContent = resultadosArticle

    const imgEl = template.content.querySelector(".result-item-img");
    imgEl.src = resultados.thumbnail;

    const priceEl = template.content.querySelector(".result-item-price");
    priceEl.textContent = `$ ${resultados.price}`;

    const soldEl = template.content.querySelector(".result-item-sell-count-num")
    soldEl.textContent =`Vendidos: ${resultados.sold_quantity}` 

    const conditionEl = template.content.querySelector(".result-item-condition");
    conditionEl.textContent = resultados.condition;

    const clone = document.importNode(template.content, true);
    contenedor.appendChild(clone); // A contenedor se agrega clone
  }
 
}

function main() {
  const formEL = document.querySelector(".search-form");
  formEL.addEventListener("submit", (event) => {
    event.preventDefault();
    const palabraABuscar =
      event.target.buscar
        .value; /*target hace referencia al elemento que dispara el evento(a el formulario, que contiene al input buscar)*/

    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${palabraABuscar}`)
      .then((response) => response.json())
      .then((data) => mostrarResultados(data.results)); // results es el objeto del array de toda la respuesta que tiene los resultados que nesecitamos
      const contenedor = document.querySelector(".results");
      contenedor.textContent =""
  });
}
main();
