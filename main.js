import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector("#counter"));

// OBTENER DATOS DE BASE DE DATOS

// PROMESAS (a) .then (b) async await
const getData = async () => {
  const response = await fetch("http://localhost:3000/users");
  const data = await response.json();

  const products = await (await fetch("http://localhost:3000/products")).json();

  const usersArea = document.querySelector("#users");

  usersArea.innerHTML = /* HTML */ `
    <section>
      <article>
        ${data
          .map((e) => {
            return `
          <p>${e.name}</p>
        `;
          })
          .join("")}
      </article>
      <article>
        <p>Ellos compran: ${products.map((e) => `<span>${e.name}</span>`)}</p>
      </article>
    </section>
  `;
};

getData();
