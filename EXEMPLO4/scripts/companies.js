function displayInfo() {
  const companyInfo = document.getElementById("companyInfo");
  const selectedCompany = document.querySelector(
    'input[name="company"]:checked'
  ).value;

  if (selectedCompany === "company1") {
    companyInfo.innerHTML = `
          <p>Wagner Investment Advisors (WIA) é pioneira na utilização de redes
            neurais para determinar os patamares de preços onde os mercados
            estão concentrados.<br /><br />

            O domínio desta tecnologia possibilita antever as expectativas de
            oscilações de preços, tornando possível agregar relevantes
            informações sobre o valuation, o range oscilatório e a tendência de
            determinado ativo. <br /><br />

            Devido à modernização dos mercados, estas concentrações se
            transformaram em importante fundamento, auxiliando os gestores nas
            tomadas de decisão. <br /><br />

            Sediada em Nova York desde 1997, a WIA publica o periódico "Daily
            Technical Comment" que contém o resumo diário dos patamares onde se
            concentram tais posições profissionais.</p>
      `;
  } else if (selectedCompany === "company2") {
    companyInfo.innerHTML = `
          <div>
            Wagner Investimentos Ltda. é uma empresa de Consultoria de Valores
            Mobiliários autorizada pela CVM. Localizada em São Paulo desde 1992,
            representa a empresa norte-americana WIA no Brasil. <br /><br />

            A Wagner disponibiliza na web os parâmetros gerados pelo "Daily
            Technical Comment" publicado pela WIA e orienta os clientes na
            interpretação destes parâmetros; no desenvolvimento de estratégias
            operacionais pertinentes; e na análise dos fundamentos de acordo com
            a dinâmica das concentrações. <br /><br />

            Entre os principais clientes estão:
            <br /><br />
              <ul class="listas">
                <li>
                  Bancos, Empresas de Asset Management, Corretores e
                  Distribuidoras;
                </li>
                <li>Companhias com exposição em câmbio e commodities;</li>
                <li>Family offices e Investidores individuais.</li>
              </ul>
          </div>
      `;
  }
}

// Chama a função para exibir as informações da empresa selecionada (Empresa 1) ao carregar a página
displayInfo();
