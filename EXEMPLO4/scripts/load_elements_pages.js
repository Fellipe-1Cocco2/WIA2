// Carregar Footer
document.addEventListener("DOMContentLoaded", function () {
  fetch("../pages/footer_pages.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("footer").innerHTML = html;
    })
    .catch((error) => console.error("Erro ao carregar o rodapé:", error));
});

// Carregar Header
document.addEventListener("DOMContentLoaded", function () {
  fetch("../pages/header_pages.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("header").innerHTML = html;

      // Adiciona a lógica de adicionar a classe 'active' após o conteúdo ser carregado
      const currentPage = window.location.pathname.split("/").pop();
      const navItems = document.querySelectorAll(".navbar-links-link");

      navItems.forEach((item) => {
        const link = item.getAttribute("href").split("/").pop();
        if (link === currentPage) {
          item.classList.add("active");
          const elementWidth = item.offsetWidth;
          item.style.setProperty("--dynamic-width", `${elementWidth}px`);
          console.log(elementWidth);
        }
      });
    })
    .catch((error) => console.error("Erro ao carregar o cabeçalho:", error));
});

// pegar tamanho da tela
window.onload = function () {
  ajustarBackground();
};

window.onresize = function () {
  ajustarBackground();
};

function ajustarBackground() {
  var body = document.body;
  var largura = window.innerWidth;
  var altura = window.innerHeight;

  body.style.backgroundSize = "auto " + largura + "px";
  console.log(largura);
}
